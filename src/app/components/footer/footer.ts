import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { config } from '../../config';



@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
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
