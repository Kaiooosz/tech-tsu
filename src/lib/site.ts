// Dados institucionais e links de contato — fonte única para todo o site.

export const EMPRESA = {
  razaoSocial: "TSUNOKAWA TECH LTDA",
  nome: "Tech Tsu",
  cnpj: "66.720.724/0001-80",
  praca: "Alphaville · Barueri / SP",
  atendimento: "Brasil inteiro, remoto",
  emailComercial: "contato@techtsu.com.br",
  emailSocio: "kaio@techtsu.com.br",
  socio: "Kaio Tsunokawa",
  whatsappNumero: "5511952364424",
  whatsappDisplay: "+55 11 95236-4424",
  instagram: "@tech.tsu",
  instagramUrl: "https://instagram.com/tech.tsu",
  site: "techtsu.com.br",
  // Link curto oficial do WhatsApp Business (sem mensagem customizada)
  whatsappCurto: "https://wa.me/message/OS53XLBC6RQOM1",
} as const

export function wa(mensagem: string) {
  return `https://wa.me/${EMPRESA.whatsappNumero}?text=${encodeURIComponent(mensagem)}`
}

// Cada CTA abre a conversa já com apresentação + pergunta de abordagem.
export const WA = {
  geral: wa(
    "Olá, Tech Tsu. Sou [seu nome], da [sua empresa], e cheguei pelo site de vocês. " +
    "Minha operação hoje roda em planilha e WhatsApp e eu quero organizar tudo em um sistema só. " +
    "Como funciona o diagnóstico gratuito de vocês?"
  ),
  diagnostico: wa(
    "Olá, Tech Tsu. Sou [seu nome], da [sua empresa], e vim pelo site. " +
    "Quero marcar o diagnóstico gratuito para mapear os gargalos da minha operação. " +
    "Quais horários vocês têm disponíveis nesta semana?"
  ),
  orcamento: wa(
    "Olá, Tech Tsu. Sou [seu nome], da [sua empresa], e vim pelo site. " +
    "Preciso de um sistema sob medida (CRM, ERP ou portal) para a minha operação. " +
    "Vocês conseguem me passar um escopo inicial e a faixa de investimento?"
  ),
  agenteIA: wa(
    "Olá, Tech Tsu. Sou [seu nome], da [sua empresa], e vim pelo site. " +
    "Meu time perde muito tempo respondendo as mesmas perguntas no WhatsApp. " +
    "Como funciona o agente de IA de atendimento conectado ao meu próprio sistema?"
  ),
  disparos: wa(
    "Olá, Tech Tsu. Sou [seu nome], da [sua empresa], e vim pelo site. " +
    "Quero rodar campanhas na minha base pela API Oficial do WhatsApp. " +
    "Como funciona o setup e qual a projeção de custo por disparo?"
  ),
  empresa: wa(
    "Olá, Tech Tsu. Sou [seu nome], da [sua empresa], e vim pelo site. " +
    "Quero entender melhor como vocês trabalham antes de marcar uma conversa. " +
    "Podem me mostrar projetos parecidos com o meu que vocês já entregaram?"
  ),
} as const
