/**
 * Configurações do site - Do Tabuleiro ao Mercado
 * 
 * ⚠️ IMPORTANTE: Atualize a URL do checkout da Hotmart abaixo ⚠️
 * 
 * Como encontrar a URL do seu produto na Hotmart:
 * 1. Entre no painel da Hotmart
 * 2. Vá em Produtos → Meus Produtos
 * 3. Encontre o produto "E-book Do Tabuleiro ao Mercado"
 * 4. Copie o link de checkout/afiliado
 * 
 * Exemplos de URLs válidas:
 * - Link direto: 'https://pay.hotmart.com/XXXXXXXXXX'
 * - Link de checkout: 'https://pay.hotmart.com/XXXXXXXXXX?checkoutMode=10'
 */

export const config = {
  // ============================================
  // 🛒 CHECKOUT - CONFIGURAÇÃO OBRIGATÓRIA
  // ============================================
  
  // URL do checkout da Hotmart - SUBSTITUIR PELA URL REAL
  checkoutUrl: 'https://pay.hotmart.com/SEU_CODIGO_AQUI',
  
  // ============================================
  // 📧 CONTATO
  // ============================================
  
  // Informações de contato
  email: 'contato@dotabuleiroaomercado.com.br',
  
  // ============================================
  // 🌐 REDES SOCIAIS
  // ============================================
  
  // Redes sociais (substituir pelos links reais ou deixar como '#' para desabilitar)
  social: {
    facebook: 'https://facebook.com/dotabuleiroaomercado',
    instagram: 'https://instagram.com/dotabuleiroaomercado',
    linkedin: 'https://linkedin.com/company/dotabuleiroaomercado',
  },
  
  // ============================================
  // 💰 PRODUTO
  // ============================================
  
  // Informações do produto
  product: {
    name: 'Do Tabuleiro ao Mercado - E-book',
    price: 97.00,          // Preço atual (mostrado grande)
    oldPrice: 197.00,      // Preço antigo (mostrado riscado)
    currency: 'BRL',
    id: 'ebook-tabuleiro',
  },
  
  // ============================================
  // 📊 ANALYTICS (OPCIONAL)
  // ============================================
  
  // Google Analytics 4
  // Para ativar: 
  // 1. Criar conta em https://analytics.google.com
  // 2. Copiar o Measurement ID (formato: G-XXXXXXXXXX)
  // 3. Alterar enabled para true
  // 4. Colar o ID abaixo
  analytics: {
    enabled: false,              // Mudar para true quando configurar
    measurementId: 'G-XXXXXXXXXX', // Substituir pelo ID real do GA4
  },
};
