import { Component } from '@angular/core';
import {
  LucideTarget,
  LucideLightbulb,
  LucideTrendingUp,
  LucideUsers,
  LucideBookOpen,
  LucideInfinity,
} from '@lucide/angular';

@Component({
  selector: 'app-benefits-section',
  standalone: true,
  imports: [
    LucideTarget,
    LucideLightbulb,
    LucideTrendingUp,
    LucideUsers,
    LucideBookOpen,
    LucideInfinity,
  ],
  templateUrl: './benefits-section.html',
})
export class BenefitsSection {
  benefits = [
    {
      icon: 'target',
      title: "Planos de Negócio Vencedores",
      description: "Aprenda a criar estratégias sólidas que transformam ideias em negócios lucrativos",
      color: "from-[#FF6B35] to-[#FF8555]",
      problem: "Dificuldade em estruturar um plano de negócios",
      result: "Plano completo e validado em 7 dias"
    },
    {
      icon: 'lightbulb',
      title: "Aprendizado Gamificado",
      description: "Conceitos complexos apresentados de forma lúdica e envolvente através do jogo de tabuleiro",
      color: "from-[#FDB813] to-[#FDCA33]",
      problem: "Teoria chata e difícil de absorver",
      result: "Aprenda brincando e retenha 3x mais"
    },
    {
      icon: 'trending-up',
      title: "Metodologia Comprovada",
      description: "Sistema testado e aprovado por mais de 500 empreendedores de sucesso",
      color: "from-[#1E3A8A] to-[#3B5FBA]",
      problem: "Medo de investir em algo não comprovado",
      result: "Método validado por centenas de casos reais"
    },
    {
      icon: 'users',
      title: "Networking e Comunidade",
      description: "Acesso a uma rede exclusiva de empreendedores para trocar experiências",
      color: "from-[#10B981] to-[#34D399]",
      problem: "Empreender sozinho é solitário",
      result: "Comunidade ativa e suporte contínuo"
    },
    {
      icon: 'book-open',
      title: "Conteúdo Prático e Aplicável",
      description: "Exercícios e casos reais que você pode implementar imediatamente no seu negócio",
      color: "from-[#8B5CF6] to-[#A78BFA]",
      problem: "Conteúdo teórico sem aplicação prática",
      result: "Implemente hoje, veja resultados amanhã"
    },
    {
      icon: 'infinity',
      title: "Acesso Vitalício + Atualizações",
      description: "Receba todas as atualizações e novos conteúdos gratuitamente, para sempre",
      color: "from-[#EC4899] to-[#F472B6]",
      problem: "Conteúdo desatualizado após poucos meses",
      result: "Sempre atualizado com novas estratégias"
    }
  ];
}
