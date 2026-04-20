import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { BenefitsSection } from './components/benefits-section/benefits-section';
import { SocialProof } from './components/social-proof/social-proof';
import { PreviewSection } from './components/preview-section/preview-section';
import { PricingSection } from './components/pricing-section/pricing-section';
import { FAQSection } from './components/faq-section/faq-section';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Hero,
    BenefitsSection,
    SocialProof,
    PreviewSection,
    PricingSection,
    FAQSection,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
