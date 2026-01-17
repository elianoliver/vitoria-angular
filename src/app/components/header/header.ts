import { Component, OnInit, HostListener, signal } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { Button } from '../../shared/button/button';
import { config } from '../../config';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, Button, LucideAngularModule],
  templateUrl: './header.html',
})
export class Header implements OnInit {
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);

  menuItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Conteúdo', href: '#preview' },
    { label: 'FAQ', href: '#faq' },
  ];

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  checkScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  get headerClasses(): string {
    return this.isScrolled()
      ? 'bg-white/95 backdrop-blur-md shadow-lg'
      : 'bg-transparent';
  }

  get logoTextClasses(): string {
    return this.isScrolled() ? 'text-gray-900' : 'text-white';
  }

  get navLinkClasses(): string {
    return this.isScrolled() ? 'text-gray-700' : 'text-white/90';
  }

  get mobileMenuButtonClasses(): string {
    return this.isScrolled()
      ? 'text-gray-900 hover:bg-gray-100'
      : 'text-white hover:bg-white/10';
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(value => !value);
  }

  handleNavClick(event: Event, href: string) {
    event.preventDefault();
    this.mobileMenuOpen.set(false);
    const element = this.document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth'
      });
    }
  }

  handleCTA() {
    window.open(config.checkoutUrl, '_blank', 'noopener,noreferrer');
  }
}
