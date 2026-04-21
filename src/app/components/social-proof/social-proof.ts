import { Component } from '@angular/core';

import { LucideQuote, LucideStar } from '@lucide/angular';

@Component({
  selector: 'app-social-proof',
  standalone: true,
  imports: [LucideQuote, LucideStar],
  templateUrl: './social-proof.html',
})
export class SocialProof {
  testimonials = [
    {
      name: 'Ana Paula Silva',
      role: 'CEO',
      company: 'TechStart',
      initials: 'AS',
      content:
        'Este e-book transformou completamente minha visão sobre empreendedorismo. A metodologia do jogo tornou o aprendizado muito mais prático e envolvente!',
    },
    {
      name: 'Carlos Mendes',
      role: 'Fundador',
      company: 'InovaBrasil',
      initials: 'CM',
      content:
        'Aprendi em dias o que levaria meses em cursos tradicionais. A abordagem lúdica facilita muito a absorção dos conceitos de negócios.',
    },
    {
      name: 'Juliana Costa',
      role: 'Empreendedora',
      company: 'Boutique JC',
      initials: 'JC',
      content:
        'Recomendo para todos que querem empreender! O conteúdo é rico e a forma como é apresentado através do jogo torna tudo mais claro e aplicável.',
    },
  ];
}
