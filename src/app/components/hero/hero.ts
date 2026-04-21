import { Component } from '@angular/core';
import { config } from '../../config';
import { Book3D } from './book3d';

import { LucideArrowRight, LucideDownload, LucideZap, LucideShieldCheck } from '@lucide/angular';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [Book3D, LucideArrowRight, LucideDownload, LucideZap, LucideShieldCheck],
  templateUrl: './hero.html',
})
export class Hero {
  handleCTA() {
    window.open(config.checkoutUrl, '_blank', 'noopener,noreferrer');
  }
}
