import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-book3d',
  standalone: true,
  template: '<div #canvasContainer class="w-full h-full"></div>',
})
export class Book3D implements AfterViewInit, OnDestroy {
  @ViewChild('canvasContainer', { static: false }) canvasContainer!: ElementRef<HTMLDivElement>;

  private renderer: THREE.WebGLRenderer | null = null;
  private scene: THREE.Scene | null = null;
  private camera: THREE.PerspectiveCamera | null = null;
  private animId: number = 0;
  private bookGroup: THREE.Group | null = null;
  private frontGroup: THREE.Group | null = null;
  private pageGroups: THREE.Group[] = [];
  private _resizeHandler: (() => void) | null = null;

  private isOpen = false;
  private openProg = 0;
  private targetProg = 0;

  private readonly BW = 1.5;
  private readonly BH = 2.2;
  private readonly CT = 0.065;
  private readonly PT = 0.018;
  private readonly NP = 16;
  private readonly BASE_RX = -0.58;
  private readonly BASE_RY = 0.18;

  ngAfterViewInit(): void {
    this.initScene();
  }

  private initScene(): void {
    const container = this.canvasContainer.nativeElement;
    const w = container.clientWidth || 400;
    const h = container.clientHeight || 480;

    // ── RENDERER ─────────────────────────────────────────
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.domElement.style.display = 'block';
    this.renderer.domElement.style.cursor = 'pointer';
    container.appendChild(this.renderer.domElement);

    // ── SCENE & CAMERA ───────────────────────────────────
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(65, w / h, 0.1, 100);
    this.camera.position.set(-0.5, 2.5, 5.5);
    this.camera.lookAt(0, 0.5, 0);

    // ── LIGHTS ───────────────────────────────────────────
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.45));

    const sunLight = new THREE.DirectionalLight(0xfff5e0, 1.6);
    sunLight.position.set(3, 7, 5);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 30;
    sunLight.shadow.camera.left = -5;
    sunLight.shadow.camera.right = 5;
    sunLight.shadow.camera.top = 5;
    sunLight.shadow.camera.bottom = -5;
    this.scene.add(sunLight);

    const fillLight = new THREE.PointLight(0xFF6B35, 0.8, 14);
    fillLight.position.set(-5, 0.5, 3);
    this.scene.add(fillLight);

    const topLight = new THREE.PointLight(0xFDB813, 0.45, 10);
    topLight.position.set(0, 6, 1);
    this.scene.add(topLight);

    // ── BUILD BOOK ───────────────────────────────────────
    this.buildBook();

    // ── CLICK HANDLER ────────────────────────────────────
    this.renderer.domElement.addEventListener('click', () => this.toggleBook());

    // ── RESIZE HANDLER ───────────────────────────────────
    this._resizeHandler = () => this.onWindowResize();
    window.addEventListener('resize', this._resizeHandler);

    // ── ANIMATION LOOP ───────────────────────────────────
    this.animate();
  }

  private buildBook(): void {
    if (!this.scene) return;

    const spineX = -this.BW / 2;
    const totalThickness = this.CT * 2 + this.PT * this.NP;

    const blobShadowTex = this.makeShadowTexture();
    const blobGeo = new THREE.PlaneGeometry(4.2, 3.0);
    const blobMat = new THREE.MeshBasicMaterial({
      map: blobShadowTex,
      transparent: true,
      opacity: 0.28,
      depthWrite: false,
    });
    const blobShadow = new THREE.Mesh(blobGeo, blobMat);
    blobShadow.rotation.x = -Math.PI / 2;
    blobShadow.position.set(0.35, -1.85, 0.0);
    this.scene.add(blobShadow);

    // ── BOOK GROUP ───────────────────────────────────────
    this.bookGroup = new THREE.Group();
    this.bookGroup.rotation.x = this.BASE_RX;
    this.bookGroup.rotation.y = this.BASE_RY;
    this.bookGroup.position.set(0, 0, 0);
    this.scene.add(this.bookGroup);

    const edgeMat = (color: number, roughness = 0.65) =>
      new THREE.MeshStandardMaterial({ color, roughness });

    const CE = 0x0c1d68;

    // ── BACK COVER ───────────────────────────────────────
    const backGeo = new THREE.BoxGeometry(this.BW, this.BH, this.CT);
    const backMesh = new THREE.Mesh(backGeo, [
      edgeMat(CE),
      edgeMat(CE),
      edgeMat(0x070c28),
      edgeMat(0x070c28),
      edgeMat(0x090c24),
      new THREE.MeshStandardMaterial({
        map: this.makeBackCoverTexture(),
        roughness: 0.5,
      }),
    ]);
    backMesh.position.z = this.CT / 2;
    backMesh.castShadow = true;
    this.bookGroup.add(backMesh);

    // ── SPINE ────────────────────────────────────────────
    const spineGeo = new THREE.BoxGeometry(0.09, this.BH, totalThickness);
    const spineMesh = new THREE.Mesh(spineGeo, [
      edgeMat(0x07102e),
      new THREE.MeshStandardMaterial({
        map: this.makeSpineTexture(),
        roughness: 0.4,
      }),
      edgeMat(0x050c24),
      edgeMat(0x050c24),
      edgeMat(0x0c1c55),
      edgeMat(0x0c1c55),
    ]);
    spineMesh.position.x = spineX - 0.045;
    spineMesh.position.z = this.CT + totalThickness / 2;
    spineMesh.castShadow = true;
    this.bookGroup.add(spineMesh);

    // ── PAGES ────────────────────────────────────────────
    for (let i = 0; i < this.NP; i++) {
      const pg = new THREE.Group();
      pg.position.x = spineX;
      pg.position.z = this.CT + i * this.PT + this.PT / 2;

      const pageTex = this.makePageTexture(i);
      const pageGeo = new THREE.BoxGeometry(this.BW, this.BH, this.PT * 0.55);
      const pageMesh = new THREE.Mesh(pageGeo, [
        edgeMat(0xe8e8d5, 0.9),
        edgeMat(0xe8e8d5, 0.9),
        edgeMat(0xd5d5c0, 0.9),
        edgeMat(0xd5d5c0, 0.9),
        new THREE.MeshStandardMaterial({ map: pageTex, roughness: 0.85 }),
        new THREE.MeshStandardMaterial({ map: pageTex, roughness: 0.85 }),
      ]);
      pageMesh.position.x = this.BW / 2;
      pageMesh.castShadow = true;
      pg.add(pageMesh);
      this.pageGroups.push(pg);
      this.bookGroup.add(pg);
    }

    // ── FRONT COVER ──────────────────────────────────────
    this.frontGroup = new THREE.Group();
    this.frontGroup.position.x = spineX;
    this.frontGroup.position.z = this.CT + this.NP * this.PT + this.CT / 2;

    const frontGeo = new THREE.BoxGeometry(this.BW, this.BH, this.CT);
    const frontMesh = new THREE.Mesh(frontGeo, [
      edgeMat(CE),
      edgeMat(CE),
      edgeMat(0x091440),
      edgeMat(0x091440),
      new THREE.MeshStandardMaterial({
        map: this.makeFrontCoverTexture(),
        roughness: 0.22,
        metalness: 0.06,
      }),
      new THREE.MeshStandardMaterial({
        color: 0x181838,
        roughness: 0.7,
      }),
    ]);
    frontMesh.position.x = this.BW / 2;
    frontMesh.castShadow = true;
    this.frontGroup.add(frontMesh);
    this.bookGroup.add(this.frontGroup);

    // Ground shadow plane
    const shadowGeo = new THREE.PlaneGeometry(8, 8);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.18 });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -this.BH / 2 - 0.02;
    shadowPlane.receiveShadow = true;
    this.bookGroup.add(shadowPlane);
  }

  private toggleBook(): void {
    this.isOpen = !this.isOpen;
    this.targetProg = this.isOpen ? 1 : 0;
  }

  private applyProgress(p: number): void {
    if (!this.frontGroup) return;

    const easeOutSine = (t: number) => Math.sin((t * Math.PI) / 2);

    // Front cover
    this.frontGroup.rotation.y = p * -Math.PI;

    // Pages
    this.pageGroups.forEach((pg, i) => {
      const t = i / Math.max(1, this.NP - 1);
      const arcT = easeOutSine(t);
      const targetAngle = -Math.PI * (0.05 + arcT * 0.87);
      const staggerDelay = (1 - t) * 0.18;
      const localP = Math.max(
        0,
        Math.min(
          1,
          (p - staggerDelay) / Math.max(0.001, 1 - staggerDelay)
        )
      );
      pg.rotation.y = localP * targetAngle;
    });
  }

  private animate = (): void => {
    this.animId = requestAnimationFrame(this.animate);

    if (!this.renderer || !this.scene || !this.camera || !this.bookGroup) return;

    // Lerp open progress
    this.openProg += (this.targetProg - this.openProg) * 0.038;
    this.applyProgress(this.openProg);

    // Float animation
    const t = Date.now() * 0.001;
    const floatY = Math.sin(t * 0.75) * 0.015;
    this.bookGroup.position.y = 0 + floatY;

    this.renderer.render(this.scene, this.camera);
  };

  private onWindowResize(): void {
    if (!this.renderer || !this.camera || !this.canvasContainer) return;

    const w = this.canvasContainer.nativeElement.clientWidth;
    const h = this.canvasContainer.nativeElement.clientHeight;

    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  private makeShadowTexture(): THREE.CanvasTexture {
    const cvs = document.createElement('canvas');
    cvs.width = 256;
    cvs.height = 256;
    const ctx = cvs.getContext('2d')!;
    const grd = ctx.createRadialGradient(128, 128, 8, 128, 128, 128);
    grd.addColorStop(0, 'rgba(0,0,0,0.52)');
    grd.addColorStop(0.45, 'rgba(0,0,0,0.22)');
    grd.addColorStop(0.78, 'rgba(0,0,0,0.06)');
    grd.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 256, 256);
    return new THREE.CanvasTexture(cvs);
  }

  private roundedRect(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    r: number
  ): void {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }

  private makeFrontCoverTexture(): THREE.CanvasTexture {
    const cvs = document.createElement('canvas');
    cvs.width = 600;
    cvs.height = 900;
    const ctx = cvs.getContext('2d')!;

    const bg = ctx.createLinearGradient(0, 0, 0, 900);
    bg.addColorStop(0, '#07175a');
    bg.addColorStop(0.42, '#1E3A8A');
    bg.addColorStop(0.75, '#1d50c0');
    bg.addColorStop(1, '#bf3d10');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, 600, 900);

    ctx.strokeStyle = 'rgba(253,184,19,0.09)';
    ctx.lineWidth = 1;
    for (let x = 0; x <= 600; x += 50) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 900);
      ctx.stroke();
    }
    for (let y = 0; y <= 900; y += 50) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(600, y);
      ctx.stroke();
    }

    ctx.strokeStyle = '#FDB813';
    ctx.lineWidth = 13;
    ctx.strokeRect(15, 15, 570, 870);
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgba(253,184,19,0.45)';
    ctx.strokeRect(28, 28, 544, 844);

    const bx = 128,
      by = 95,
      bs = 344;
    ctx.fillStyle = 'rgba(5, 15, 55, 0.82)';
    this.roundedRect(ctx, bx, by, bs, bs, 14);
    ctx.fill();
    ctx.strokeStyle = '#FDB813';
    ctx.lineWidth = 3;
    this.roundedRect(ctx, bx, by, bs, bs, 14);
    ctx.stroke();

    const sq = bs / 5;
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        ctx.fillStyle =
          (row + col) % 2 === 0 ? 'rgba(253,184,19,0.13)' : 'rgba(255,255,255,0.03)';
        ctx.fillRect(bx + col * sq, by + row * sq, sq, sq);
      }
    }

    const pathCells = [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [1, 4],
      [2, 4],
      [3, 4],
      [4, 4],
      [4, 3],
      [4, 2],
      [4, 1],
      [4, 0],
      [3, 0],
      [2, 0],
    ];
    pathCells.forEach(([r, c]) => {
      const cx2 = bx + c * sq + sq / 2;
      const cy2 = by + r * sq + sq / 2;
      ctx.beginPath();
      ctx.arc(cx2, cy2, 10, 0, Math.PI * 2);
      ctx.fillStyle = '#FDB813';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(cx2, cy2, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#0d2470';
      ctx.fill();
    });

    const mcx = bx + bs / 2,
      mcy = by + bs / 2;
    ctx.beginPath();
    ctx.arc(mcx, mcy, 38, 0, Math.PI * 2);
    ctx.fillStyle = '#FF6B35';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(mcx, mcy, 30, 0, Math.PI * 2);
    ctx.strokeStyle = '#FDB813';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 34px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('$', mcx, mcy + 13);

    ctx.beginPath();
    ctx.arc(bx + sq / 2, by + sq / 2, 17, 0, Math.PI * 2);
    ctx.fillStyle = '#FF3333';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(bx + sq / 2, by + sq / 2, 9, 0, Math.PI * 2);
    ctx.fillStyle = '#ff9999';
    ctx.fill();

    ctx.strokeStyle = 'rgba(253,184,19,0.6)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(65, 480);
    ctx.lineTo(535, 480);
    ctx.stroke();

    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(0,0,0,0.65)';
    ctx.shadowBlur = 14;
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 49px Arial';
    ctx.fillText('DO TABULEIRO', 300, 535);
    ctx.fillStyle = '#FDB813';
    ctx.font = 'bold 59px Arial';
    ctx.fillText('AO MERCADO', 300, 605);
    ctx.shadowBlur = 0;
    ctx.fillStyle = 'rgba(255,255,255,0.82)';
    ctx.font = '26px Arial';
    ctx.fillText('Empreendedorismo pelo jogo', 300, 655);

    ctx.strokeStyle = 'rgba(253,184,19,0.3)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(100, 695);
    ctx.lineTo(500, 695);
    ctx.stroke();

    ctx.fillStyle = '#FF6B35';
    this.roundedRect(ctx, 224, 714, 152, 48, 24);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 27px Arial';
    ctx.fillText('E-BOOK', 300, 745);

    ctx.fillStyle = '#FDB813';
    ctx.font = '25px Arial';
    ctx.fillText('★★★★★', 300, 805);
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.font = '18px Arial';
    ctx.fillText('Edição Digital Exclusiva', 300, 845);

    return new THREE.CanvasTexture(cvs);
  }

  private makeBackCoverTexture(): THREE.CanvasTexture {
    const cvs = document.createElement('canvas');
    cvs.width = 600;
    cvs.height = 900;
    const ctx = cvs.getContext('2d')!;
    const bg = ctx.createLinearGradient(0, 900, 0, 0);
    bg.addColorStop(0, '#030a22');
    bg.addColorStop(1, '#0b1c58');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, 600, 900);
    ctx.strokeStyle = '#FDB813';
    ctx.lineWidth = 8;
    ctx.strokeRect(12, 12, 576, 876);
    ctx.fillStyle = 'rgba(255,255,255,0.55)';
    ctx.font = '17px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('contato@dotabuleiroaomercado.com.br', 300, 695);
    ctx.fillStyle = 'rgba(255,255,255,0.06)';
    ctx.fillRect(172, 722, 256, 98);
    for (let i = 0; i < 22; i++) {
      ctx.fillStyle =
        i % 3 === 0 ? 'rgba(253,184,19,0.38)' : 'rgba(255,255,255,0.18)';
      ctx.fillRect(177 + i * 10, 730, i % 3 === 0 ? 9 : 5, 73);
    }
    return new THREE.CanvasTexture(cvs);
  }

  private makeSpineTexture(): THREE.CanvasTexture {
    const cvs = document.createElement('canvas');
    cvs.width = 128;
    cvs.height = 900;
    const ctx = cvs.getContext('2d')!;
    const bg = ctx.createLinearGradient(0, 0, 128, 0);
    bg.addColorStop(0, '#050e30');
    bg.addColorStop(1, '#102278');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, 128, 900);
    ctx.strokeStyle = '#FDB813';
    ctx.lineWidth = 3;
    ctx.strokeRect(4, 4, 120, 892);
    ctx.save();
    ctx.translate(64, 450);
    ctx.rotate(-Math.PI / 2);
    ctx.fillStyle = '#FDB813';
    ctx.font = 'bold 21px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('DO TABULEIRO AO MERCADO', 0, 8);
    ctx.restore();
    return new THREE.CanvasTexture(cvs);
  }

  private makePageTexture(idx: number): THREE.CanvasTexture {
    const cvs = document.createElement('canvas');
    cvs.width = 512;
    cvs.height = 768;
    const ctx = cvs.getContext('2d')!;

    const base = 248 - Math.floor(idx / 2) * 2;
    ctx.fillStyle = `rgb(${base},${base - 2},${base - 12})`;
    ctx.fillRect(0, 0, 512, 768);

    const edgeShadow = ctx.createLinearGradient(0, 0, 60, 0);
    edgeShadow.addColorStop(0, 'rgba(0,0,0,0.14)');
    edgeShadow.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = edgeShadow;
    ctx.fillRect(0, 0, 60, 768);

    ctx.fillStyle = 'rgba(0,0,0,0.055)';
    const lineCount = 24 + (idx % 3) * 2;
    for (let i = 0; i < lineCount; i++) {
      const lw = 180 + Math.random() * 260;
      ctx.fillRect(65, 75 + i * 25, lw, 2.5);
    }

    ctx.fillStyle = 'rgba(0,0,0,0.04)';
    ctx.fillRect(65, 300, 120, 2.5);

    ctx.fillStyle = 'rgba(0,0,0,0.18)';
    ctx.font = '15px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`${idx + 1}`, 256, 742);

    return new THREE.CanvasTexture(cvs);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animId);
    if (this.renderer && this.canvasContainer) {
      const container = this.canvasContainer.nativeElement;
      if (this.renderer.domElement.parentElement === container) {
        container.removeChild(this.renderer.domElement);
      }
      this.renderer.dispose();
    }
    if (this._resizeHandler) {
      window.removeEventListener('resize', this._resizeHandler);
    }
  }
}
