import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../shared/card/card';
import { config } from '../../config';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [CommonModule, Card, LucideAngularModule],
  templateUrl: './faq-section.html',
})
export class FAQSection {
  config = config;
  openFaqs = signal<number[]>([]);

  faqs = [
    {
      question: "Como recebo o e-book após a compra?",
      answer: "Após a confirmação do pagamento, você receberá um e-mail com o link para download do e-book em formato PDF. O acesso é imediato para pagamentos via cartão de crédito e PIX. Para boleto, após a compensação bancária (1-2 dias úteis)."
    },
    {
      question: "Posso compartilhar o e-book com outras pessoas?",
      answer: "O e-book é para uso pessoal e individual. O compartilhamento não autorizado viola os direitos autorais. Cada licença é válida para um único usuário, mas você pode acessar o conteúdo em todos os seus dispositivos."
    },
    {
      question: "Existe garantia de reembolso?",
      answer: "Sim! Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito com o conteúdo, basta enviar um e-mail para contato@dotabuleiroaomercado.com.br e devolveremos 100% do seu investimento, sem perguntas."
    },
    {
      question: "O e-book funciona em qualquer dispositivo?",
      answer: "Sim! O e-book está em formato PDF, que pode ser lido em computadores (Windows, Mac, Linux), tablets, smartphones (iOS e Android) e e-readers que suportam PDF. Você pode baixar e acessar em quantos dispositivos quiser."
    },
    {
      question: "É realmente um produto digital? Não receberei nada físico?",
      answer: "Correto! Este é um produto 100% digital. Você não receberá nenhum material físico pelo correio. Isso permite acesso imediato, preço mais acessível e você pode começar a aprender assim que o pagamento for confirmado."
    },
    {
      question: "O conteúdo é adequado para iniciantes?",
      answer: "Absolutamente! O e-book foi desenvolvido para atender desde quem está começando até empreendedores que já têm um negócio e querem melhorar. A linguagem é clara, os conceitos são explicados passo a passo, e a metodologia do jogo torna tudo mais fácil de entender."
    },
    {
      question: "Vou ter suporte caso tenha dúvidas?",
      answer: "Sim! Além do conteúdo do e-book, você terá acesso à nossa comunidade exclusiva onde pode tirar dúvidas, trocar experiências com outros empreendedores e receber suporte da nossa equipe."
    },
    {
      question: "As atualizações do e-book são realmente gratuitas?",
      answer: "Sim! Quando lançarmos novas versões do e-book com conteúdo adicional, melhorias ou atualizações, todos os clientes que já compraram receberão gratuitamente. Você paga uma única vez e tem acesso para sempre, incluindo todas as futuras atualizações."
    }
  ];

  toggleFaq(index: number) {
    const current = this.openFaqs();
    if (current.includes(index)) {
      this.openFaqs.set(current.filter(i => i !== index));
    } else {
      this.openFaqs.set([...current, index]);
    }
  }
}
