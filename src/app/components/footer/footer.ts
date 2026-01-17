import { Component } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { Button } from '../../shared/button/button';
import { config } from '../../config';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, Button, LucideAngularModule],
  templateUrl: './footer.html',
})
export class Footer {
  config = config;
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'FAQ', href: '#faq' },
  ];

  socialLinks = [
    { name: 'Facebook', href: config.social.facebook, icon: '📘' },
    { name: 'Instagram', href: config.social.instagram, icon: '📷' },
    { name: 'LinkedIn', href: config.social.linkedin, icon: '💼' },
  ];

  constructor(@Inject(DOCUMENT) private document: Document) {}

  handleCTA() {
    window.open(config.checkoutUrl, '_blank', 'noopener,noreferrer');
  }

  handleNavClick(event: Event, href: string) {
    event.preventDefault();
    this.scrollToSection(href);
  }

  scrollToSection(href: string) {
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
}
