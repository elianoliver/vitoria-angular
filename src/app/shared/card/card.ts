import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
})
export class Card {
  @Input() class = '';

  get cardClasses(): string {
    return `bg-white rounded-xl border border-gray-200 shadow-sm ${this.class}`;
  }
}
