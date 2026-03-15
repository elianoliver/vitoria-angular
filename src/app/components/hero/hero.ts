import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '../../shared/button/button';
import { Badge } from '../../shared/badge/badge';
import { config } from '../../config';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, Button, Badge, LucideAngularModule],
  templateUrl: './hero.html',
})

export class Hero {
  handleCTA() {
    window.open(config.checkoutUrl, '_blank', 'noopener,noreferrer');
  }
}
