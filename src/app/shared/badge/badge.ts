import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.html',
})
export class Badge {
  @Input() variant: 'default' | 'secondary' | 'outline' = 'default';
  @Input() class = '';

  get badgeClasses(): string {
    const baseClasses = 'inline-flex items-center rounded-lg px-3 py-1 text-sm font-medium';

    const variantClasses = {
      default: 'bg-[#1E3A8A] text-white',
      secondary: 'bg-white/20 text-white border border-white/30 backdrop-blur-sm',
      outline: 'border-2 border-gray-300 text-gray-700',
    };

    return `${baseClasses} ${variantClasses[this.variant]} ${this.class}`;
  }
}
