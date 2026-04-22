import { Component, signal } from '@angular/core';

import { LucideCheck, LucideChevronDown, LucideFileText, LucideBookOpen } from '@lucide/angular';

@Component({
  selector: 'app-preview-section',
  standalone: true,
  imports: [LucideCheck, LucideChevronDown, LucideFileText, LucideBookOpen],
  templateUrl: './preview-section.html',
})
export class PreviewSection {
  selectedImage = signal<number | null>(null);
  openChapters = signal<number[]>([]);

  chapters = [
    {
      number: '01',
      title: 'Fundamentos do Empreendedorismo',
      description: 'Entenda os pilares essenciais para construir um negócio sólido e sustentável',
      topics: [
        'Mindset empreendedor',
        'Identificação de oportunidades',
        'Análise de mercado',
        'Validação de ideias',
      ],
    },
    {
      number: '02',
      title: 'Planejamento Estratégico',
      description: 'Aprenda a criar planos de ação que realmente funcionam na prática',
      topics: [
        'Business Model Canvas',
        'Análise SWOT aplicada',
        'Metas SMART',
        'Roadmap de execução',
      ],
    },
    {
      number: '03',
      title: 'Gestão Financeira para Empreendedores',
      description: 'Domine as finanças do seu negócio sem complicação',
      topics: [
        'Controle de fluxo de caixa',
        'Precificação estratégica',
        'Indicadores financeiros',
        'Investimentos e captação',
      ],
    },
    {
      number: '04',
      title: 'Marketing e Vendas',
      description: 'Estratégias comprovadas para atrair e converter clientes',
      topics: [
        'Posicionamento de marca',
        'Funil de vendas',
        'Marketing digital essencial',
        'Técnicas de negociação',
      ],
    },
    {
      number: '05',
      title: 'Operações e Processos',
      description: 'Estruture seu negócio para escalar com eficiência',
      topics: [
        'Mapeamento de processos',
        'Automação inteligente',
        'Gestão de equipes',
        'Qualidade e excelência',
      ],
    },
    {
      number: '06',
      title: 'Crescimento e Escala',
      description: 'Leve seu negócio para o próximo nível com estratégias avançadas',
      topics: [
        'Expansão de mercado',
        'Parcerias estratégicas',
        'Inovação contínua',
        'Métricas de crescimento',
      ],
    },
  ];

  previewImages = [
    {
      title: 'Página de Introdução',
      description: 'Metodologia visual e envolvente',
    },
    {
      title: 'Exercícios Práticos',
      description: 'Atividades para aplicar o conhecimento',
    },
    {
      title: 'Estudos de Caso',
      description: 'Exemplos reais de sucesso',
    },
  ];

  selectImage(index: number) {
    this.selectedImage.set(index);
  }

  toggleChapter(index: number) {
    const current = this.openChapters();
    if (current.includes(index)) {
      this.openChapters.set(current.filter((i) => i !== index));
    } else {
      this.openChapters.set([...current, index]);
    }
  }
}
