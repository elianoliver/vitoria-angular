import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
})
export class Button {
  @Input() variant: 'default' | 'outline' | 'ghost' = 'default';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
  @Input() class = '';
  @Output() onClick = new EventEmitter<MouseEvent>();

  get buttonClasses(): string {
    const baseClasses = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const sizeClasses = {
      sm: 'h-9 px-4 text-sm',
      md: 'h-10 px-6 text-base',
      lg: 'h-14 px-8 md:px-12 text-base md:text-lg'
    };
    
    const variantClasses = {
      default: 'bg-gradient-to-r from-[#FF6B35] to-[#FDB813] hover:from-[#FF8555] hover:to-[#FDCA33] text-white shadow-lg hover:shadow-xl hover:scale-105',
      outline: 'border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white',
      ghost: 'text-gray-700 hover:bg-gray-100'
    };
    
    return `${baseClasses} ${sizeClasses[this.size]} ${variantClasses[this.variant]} ${this.class}`;
  }
}
