import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.html',
})
export class Button {
  @Input() variant: 'default' | 'outline' | 'ghost' = 'default';
  @Input() size: 'sm' | 'md' | 'lg' = 'lg';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
  @Output() onClick = new EventEmitter<MouseEvent>();

  get buttonClasses(): string {
    const parts = ['inline-flex items-center justify-center cursor-pointer rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'];

    switch (this.size) {
      case 'sm': parts.push('h-9 px-4 text-sm'); break;
      case 'md': parts.push('h-10 px-6 text-base'); break;
      case 'lg': parts.push('h-14 px-8 md:px-12 text-base md:text-lg'); break;
    }

    switch (this.variant) {
      case 'default': parts.push('bg-gradient-to-r from-[#FF6B35] to-[#FDB813] hover:from-[#FF8555] hover:to-[#FDCA33] text-white shadow-lg hover:shadow-xl hover:scale-105'); break;
      case 'outline': parts.push('border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white'); break;
      case 'ghost': parts.push('text-gray-700 hover:bg-gray-100'); break;
    }

    return parts.join(' ');
  }
}
