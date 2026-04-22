import { DOCUMENT } from '@angular/common';
import { Component, Inject, signal } from '@angular/core';
import { LucideMenu, LucideX, LucideShoppingCart } from '@lucide/angular';
import { config } from '../../config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LucideMenu, LucideX, LucideShoppingCart],
  templateUrl: './header.html',
})
export class Header {
  mobileMenuOpen = signal(false);

  menuItems = [
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Conteúdo', href: '#preview' },
    { label: 'FAQ', href: '#faq' },
  ];

  constructor(@Inject(DOCUMENT) private document: Document) {}

  toggleMobileMenu() {
    this.mobileMenuOpen.update(value => !value);
  }

  handleNavClick(event: Event, href: string) {
    event.preventDefault();
    this.mobileMenuOpen.set(false);

    const element = this.document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const top = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  handleCTA() {
    window.open(config.checkoutUrl, '_blank', 'noopener,noreferrer');
  }
}
