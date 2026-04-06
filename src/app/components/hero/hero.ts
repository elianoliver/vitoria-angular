import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

import { config } from '../../config';
import { Book3D } from './book3d';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LucideAngularModule, Book3D],
  templateUrl: './hero.html',
})

export class Hero {
  handleCTA() {
    window.open(config.checkoutUrl, '_blank', 'noopener,noreferrer');
  }
}
