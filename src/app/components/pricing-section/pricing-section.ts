import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '../../shared/button/button';
import { Card } from '../../shared/card/card';
import { Badge } from '../../shared/badge/badge';
import { config } from '../../config';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-pricing-section',
  standalone: true,
  imports: [CommonModule, Button, Card, Badge, LucideAngularModule],
  templateUrl: './pricing-section.html',
})
export class PricingSection {
  config = config;

  includes = [
    { text: "E-book completo em PDF (150+ páginas)" },
    { text: "Acesso vitalício ao conteúdo" },
    { text: "Atualizações gratuitas para sempre" },
    { text: "Acesso à comunidade exclusiva" },
    { text: "Garantia de 7 dias - 100% do dinheiro de volta" }
  ];

  paymentMethods = [
    { name: "Cartão de Crédito", icon: "💳" },
    { name: "PIX", icon: "📱" },
    { name: "Boleto", icon: "🎫" }
  ];

  handlePurchase() {
    window.open(config.checkoutUrl, '_blank', 'noopener,noreferrer');
    
    // Google Analytics tracking (se configurado)
    if (config.analytics.enabled && typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'begin_checkout', {
        currency: config.product.currency,
        value: config.product.price,
        items: [{
          item_id: config.product.id,
          item_name: config.product.name,
          price: config.product.price,
          quantity: 1
        }]
      });
    }
  }
}
