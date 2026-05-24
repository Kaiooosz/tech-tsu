"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { E, staggerContainer, childFadeUp } from "@/lib/motion"

/* ── Types ───────────────────────────────────────────────────── */
type StatColor = "problem" | "result"
type Stat = { value: string; label: string; color: StatColor }
type Pain = { icon: string; category: string; quote: string; solution: string }
type Segment = {
  id: string; label: string; sub: string
  headline: string; desc: string
  stats: Stat[]; pains: Pain[]
  entrega: string; mvp: string
}

/* ── SVG icon map ────────────────────────────────────────────── */
const ICONS: Record<string, React.ReactNode> = {
  clock: <svg width="13" height="13" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="var(--teal)" strokeWidth="1.5"/><path d="M12 7v5l3 3" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  doc: <svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="var(--teal)" strokeWidth="1.5"/><path d="M14 2v6h6M9 13h6M9 17h4" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  users: <svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  chart: <svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path d="M18 20V10M12 20V4M6 20v-6" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  calendar: <svg width="13" height="13" fill="none" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" stroke="var(--teal)" strokeWidth="1.5"/><path d="M16 2v4M8 2v4M3 10h18" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  zap: <svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  trend: <svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path d="M23 6l-9.5 9.5-5-5L1 18M17 6h6v6" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  mail: <svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="var(--teal)" strokeWidth="1.5"/><path d="M22 6l-10 7L2 6" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  eye: <svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="var(--teal)" strokeWidth="1.5"/><circle cx="12" cy="12" r="3" stroke="var(--teal)" strokeWidth="1.5"/></svg>,
  tool: <svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  map: <svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="var(--teal)" strokeWidth="1.5"/><circle cx="12" cy="10" r="3" stroke="var(--teal)" strokeWidth="1.5"/></svg>,
  brain: <svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path d="M9.5 2A2.5 2.5 0 017 4.5v0A2.5 2.5 0 014.5 7H4a2 2 0 00-2 2v6a2 2 0 002 2h.5A2.5 2.5 0 017 19.5v0A2.5 2.5 0 019.5 22h5a2.5 2.5 0 002.5-2.5v0a2.5 2.5 0 012.5-2.5H20a2 2 0 002-2V9a2 2 0 00-2-2h-.5A2.5 2.5 0 0117 4.5v0A2.5 2.5 0 0114.5 2h-5z" stroke="var(--teal)" strokeWidth="1.5"/></svg>,
  link: <svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  package: <svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="var(--teal)" strokeWidth="1.5"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  repeat: <svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path d="M17 1l4 4-4 4M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 01-4 4H3" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  award: <svg width="13" height="13" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6" stroke="var(--teal)" strokeWidth="1.5"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  truck: <svg width="13" height="13" fill="none" viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 8h4l3 3v5h-7V8zM5.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  home: <svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 22V12h6v10" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  grad: <svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 12v5c3.333 2 8.667 2 12 0v-5" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  hierarchy: <svg width="13" height="13" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="6" height="5" rx="1" stroke="var(--teal)" strokeWidth="1.5"/><rect x="16" y="9" width="6" height="5" rx="1" stroke="var(--teal)" strokeWidth="1.5"/><rect x="16" y="17" width="6" height="5" rx="1" stroke="var(--teal)" strokeWidth="1.5"/><path d="M8 4.5h4a2 2 0 012 2v10a2 2 0 01-2 2H8" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round"/><path d="M16 11.5h-4M16 19.5h-4" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round"/></svg>,
}

/* ── Segment data ────────────────────────────────────────────── */
const segments: Segment[] = [
  {
    id: "clinica",
    label: "Clínicas",
    sub: "Clínicas · Saúde · Odontologia · Psicologia · Estética",
    headline: "A clínica cresce. A operação desmorona.",
    desc: "Agenda no papel, retorno esquecido, prontuário perdido no grupo do WhatsApp. Crescer sem sistema é crescer contra você mesmo.",
    stats: [
      { value: "38%", label: "dos pacientes não retornam por falta de follow-up proativo", color: "problem" },
      { value: "4h", label: "por dia perdidas em tarefas administrativas manuais", color: "problem" },
      { value: "3×", label: "mais receita com agenda integrada e CRM automatizado", color: "result" },
    ],
    pains: [
      { icon: "clock", category: "TEMPO PERDIDO", quote: "A recepcionista passa o dia no WhatsApp confirmando consulta manualmente", solution: "Com automação de confirmação, 70% das confirmações viram automáticas e a equipe foca no atendimento." },
      { icon: "repeat", category: "RECEITA PERDIDA", quote: "Paciente sumiu depois da 1ª consulta e ninguém foi atrás", solution: "Pipeline de retorno com lembrete automático e régua de relacionamento recupera pacientes inativos." },
      { icon: "doc", category: "DESORGANIZAÇÃO", quote: "O prontuário está em três lugares e nenhum deles é confiável", solution: "Gestão centralizada de documentos e prontuários com histórico, versão e acesso por perfil." },
      { icon: "eye", category: "SEM VISIBILIDADE", quote: "Não sei quantos pacientes novos entram por mês nem de onde vêm", solution: "Dashboard com origem, conversão e LTV de cada canal em tempo real, sem planilha." },
    ],
    entrega: "CRM de pacientes + automação de WhatsApp + agenda integrada + dashboard de receita.",
    mvp: "MVP em 4 semanas",
  },
  {
    id: "juridico",
    label: "Jurídico",
    sub: "Escritórios de Advocacia · Contabilidade · Consultoria",
    headline: "Prazo vencido. Processo sumiu. Cliente ligando.",
    desc: "O escritório que opera no improviso perde cliente, perde processo e perde reputação. Controle real não é luxo — é sobrevivência.",
    stats: [
      { value: "1 em 3", label: "escritórios perde prazo crítico por controle manual", color: "problem" },
      { value: "60%", label: "do tempo do sócio vai para gestão, não para advocacia", color: "problem" },
      { value: "2×", label: "mais processos atendidos com OS e agenda integrados", color: "result" },
    ],
    pains: [
      { icon: "clock", category: "PRAZO CRÍTICO", quote: "Soube do prazo pelo cliente, não pelo sistema", solution: "Alerta automático de prazos com notificação no WhatsApp e e-mail 72h, 24h e no dia do vencimento." },
      { icon: "doc", category: "DOCUMENTOS", quote: "O cliente pediu o contrato e a gente ficou 40 minutos procurando", solution: "Repositório com busca, tags e versionamento — qualquer documento encontrado em menos de 10 segundos." },
      { icon: "users", category: "EQUIPE", quote: "Cada advogado tem sua planilha. Ninguém sabe o que o outro está fazendo", solution: "Dashboard de OS por responsável com status, prazo e prioridade visível para toda a equipe." },
      { icon: "chart", category: "FINANCEIRO", quote: "Não sei se o escritório cresceu ou diminuiu esse trimestre", solution: "Relatório de receita, inadimplência e margem em tempo real, sem depender de Excel." },
    ],
    entrega: "ERP jurídico com OS, documentos, agenda, CRM e alertas automáticos. Case real: escritório Bezerra Borges entregue em 6 semanas.",
    mvp: "MVP em 4–6 semanas",
  },
  {
    id: "b2b",
    label: "Serviços B2B",
    sub: "Prestadores de Serviço · Construtoras · Técnicos · Facilities",
    headline: "A operação escala. O caos escala junto.",
    desc: "Ordens de serviço no caderno, técnico sem roteiro, cliente sem atualização. Quando não há sistema, quem paga a conta é a sua margem.",
    stats: [
      { value: "47%", label: "das OS têm retrabalho por falta de histórico e checklist", color: "problem" },
      { value: "3h", label: "por dia perdidas em alinhamento operacional via WhatsApp", color: "problem" },
      { value: "40%", label: "de redução de retrabalho com sistema de OS integrado", color: "result" },
    ],
    pains: [
      { icon: "tool", category: "OPERAÇÃO", quote: "O técnico chegou no cliente sem saber o histórico do equipamento", solution: "OS com histórico completo, checklist e acesso mobile pelo técnico no campo, mesmo sem internet." },
      { icon: "map", category: "RASTREIO", quote: "Cliente liga perguntando status e ninguém sabe onde está a OS", solution: "Atualização automática por WhatsApp para o cliente a cada mudança de status da OS." },
      { icon: "chart", category: "MARGEM", quote: "Terminei o mês sem saber se lucrei ou se trabalhei de graça", solution: "Dashboard de custo por OS e margem real por serviço, cliente e técnico — em tempo real." },
      { icon: "brain", category: "AGENTE IA", quote: "Perco lead porque demoro a responder fora do horário comercial", solution: "Agente de IA no WhatsApp que responde, qualifica e agenda automaticamente 24/7." },
    ],
    entrega: "Sistema de OS + CRM + agente de IA no WhatsApp + dashboard de margem por serviço.",
    mvp: "MVP em 3–5 semanas",
  },
  {
    id: "agencia",
    label: "Agências",
    sub: "Marketing · Design · Desenvolvimento · Consultoria · Performance",
    headline: "Entregando ao cliente o que não consegue fazer por você mesmo.",
    desc: "Agências que vendem transformação digital e gerenciam seus próprios projetos no Notion, WhatsApp e intuição. A ironia é real — e cara.",
    stats: [
      { value: "52%", label: "das agências perdem prazo por falta de visibilidade centralizada", color: "problem" },
      { value: "R$8k", label: "perdidos por mês em retrabalho e horas não cobradas", color: "problem" },
      { value: "35%", label: "de aumento de margem com timesheet e OS integrados", color: "result" },
    ],
    pains: [
      { icon: "clock", category: "TEMPO", quote: "Não sei quantas horas foram gastas no cliente e se o projeto pagou", solution: "Timesheet automático por projeto e cliente com rentabilidade e custo real em tempo real." },
      { icon: "doc", category: "PROPOSTA", quote: "Monto cada proposta do zero no Word e levo 3 horas", solution: "Gerador de propostas com templates, variáveis dinâmicas e envio direto com link de aprovação." },
      { icon: "repeat", category: "RETRABALHO", quote: "O cliente mudou o briefing e ninguém avisou o time de produção", solution: "Histórico de versões com notificação automática de alterações para toda a equipe em segundos." },
      { icon: "link", category: "INTEGRAÇÃO MCP", quote: "Tenho 7 ferramentas e nenhuma conversa com a outra", solution: "Integrações MCP conectando Slack, Drive, Notion, CRM e WhatsApp num único fluxo operacional." },
    ],
    entrega: "Gestão de projetos + timesheet + gerador de propostas + integrações MCP + IA para briefing automático.",
    mvp: "MVP em 3–4 semanas",
  },
  {
    id: "varejo",
    label: "Varejo / E-com",
    sub: "Varejo · E-commerce · Distribuidoras · Franquias · Marketplace",
    headline: "Estoque no achismo. Venda perdida na demora.",
    desc: "Ruptura de estoque, pedido duplicado, cliente sem resposta no WhatsApp. Em varejo, cada minuto de desorganização é receita no bolso do concorrente.",
    stats: [
      { value: "23%", label: "das vendas perdidas por ruptura ou erro de estoque", color: "problem" },
      { value: "8min", label: "é o tempo que o cliente tolera para ser respondido antes de ir embora", color: "problem" },
      { value: "5×", label: "mais conversão com atendimento automatizado por IA", color: "result" },
    ],
    pains: [
      { icon: "package", category: "ESTOQUE", quote: "Vendi no WhatsApp, mas o produto já tinha acabado ontem", solution: "Estoque em tempo real integrado ao canal de vendas com alerta automático de ruptura." },
      { icon: "brain", category: "ATENDIMENTO IA", quote: "Tenho 3 atendentes no WhatsApp e ainda perco venda fora do horário", solution: "Agente de IA que atende, consulta estoque, tira dúvidas e fecha pedido automaticamente 24/7." },
      { icon: "repeat", category: "RECOMPRA", quote: "O cliente comprou uma vez e sumiu. Não sei nem quem é ele", solution: "CRM com régua de recompra automatizada, NPS e programa de fidelidade integrado." },
      { icon: "link", category: "INTEGRAÇÃO", quote: "Loja, marketplace, estoque e financeiro são 4 sistemas separados", solution: "Integrações via API e MCP unificando todos os canais em um único painel operacional." },
    ],
    entrega: "Agente IA no WhatsApp + CRM de clientes + controle de estoque + dashboard de canais unificado.",
    mvp: "MVP em 4–5 semanas",
  },
  {
    id: "ceo",
    label: "CEO / Gestor",
    sub: "CEO · Diretor · Sócio · Gestor de Operações",
    headline: "Você gerencia o negócio ou apaga incêndio todos os dias?",
    desc: "Sem dado confiável em tempo real, todo gestor vira bombeiro. A empresa depende de você para funcionar — e isso é o maior risco que um negócio pode ter.",
    stats: [
      { value: "70%", label: "dos gestores tomam decisão com dados desatualizados ou incompletos", color: "problem" },
      { value: "6h", label: "semanais perdidas em reuniões de alinhamento que um sistema evitaria", color: "problem" },
      { value: "10×", label: "mais velocidade de decisão com dashboard executivo em tempo real", color: "result" },
    ],
    pains: [
      { icon: "eye", category: "CEGUEIRA", quote: "Só sei o resultado do mês quando o financeiro fecha — no dia 15 do seguinte", solution: "Dashboard executivo em tempo real com receita, pipeline, margem e inadimplência sempre atualizado." },
      { icon: "hierarchy", category: "DEPENDÊNCIA", quote: "Se eu sair de férias por uma semana, a empresa trava", solution: "Processos em sistema com permissões por perfil e automações que rodam sem você presente." },
      { icon: "brain", category: "AGENTE IA", quote: "Quero saber o status da operação sem precisar perguntar para 5 pessoas", solution: "Agente de IA interno que responde perguntas sobre o negócio com dados reais em segundos." },
      { icon: "trend", category: "ESCALA", quote: "Não consigo crescer porque cada novo cliente aumenta o caos proporcionalmente", solution: "Sistema que absorve crescimento sem aumentar headcount — operação escala, estrutura não." },
    ],
    entrega: "Dashboard executivo + automações de processo + agente IA interno + sistema que escala sem caos.",
    mvp: "Diagnóstico gratuito de 30 min",
  },
  {
    id: "imobiliaria",
    label: "Imobiliárias",
    sub: "Imobiliárias · Corretores · Incorporadoras · Loteamentos",
    headline: "Lead esfria em 5 minutos. Comissão fica em disputa por meses.",
    desc: "No mercado imobiliário, o primeiro a responder fecha o negócio. Corretora sem CRM perde lead para o concorrente enquanto ainda está procurando o telefone.",
    stats: [
      { value: "60%", label: "dos leads imobiliários não são respondidos em menos de 5 minutos", color: "problem" },
      { value: "R$25k", label: "perdidos por mês em comissão por falta de rastreio de origem", color: "problem" },
      { value: "4×", label: "mais fechamentos com pipeline e follow-up automatizado", color: "result" },
    ],
    pains: [
      { icon: "zap", category: "DISTRIBUIÇÃO", quote: "Recebi 20 leads pelo portal, respondi 6 e os outros 14 foram para o concorrente", solution: "CRM com distribuição automática de leads por corretor, follow-up sequenciado e rastreio de origem." },
      { icon: "home", category: "PIPELINE", quote: "Não sei em que fase está cada cliente nem qual imóvel ele visitou semana passada", solution: "Pipeline visual com histórico de visitas, propostas enviadas, documentos e próximo passo por cliente." },
      { icon: "doc", category: "DOCUMENTOS", quote: "Perdemos o fechamento porque ficamos 2 dias procurando a matrícula do imóvel", solution: "Repositório digital com busca por imóvel, cliente e tipo de documento — tudo em segundos." },
      { icon: "chart", category: "PERFORMANCE", quote: "Fim do mês não sei qual corretor trouxe resultado real e qual ficou só no volume", solution: "Dashboard de performance por corretor: VGV, conversão, tempo médio de ciclo e comissão detalhada." },
    ],
    entrega: "CRM imobiliário + pipeline de leads + gestão documental + automação de follow-up e WhatsApp.",
    mvp: "MVP em 3–4 semanas",
  },
  {
    id: "educacao",
    label: "Educação / EAD",
    sub: "Escolas · Cursos Online · Infoprodutos · Treinamentos Corporativos",
    headline: "Aluno sumiu na semana 3. Você ficou sabendo no pedido de reembolso.",
    desc: "Escola sem sistema de acompanhamento perde aluno no meio do curso e não sabe por quê. Cada evasão é receita que não se repete — e que você pagou tráfego para conquistar.",
    stats: [
      { value: "1 em 4", label: "alunos evade por falta de acompanhamento proativo e personalizado", color: "problem" },
      { value: "30%", label: "da receita de escolas vem de ex-alunos com recompra estruturada", color: "result" },
      { value: "5×", label: "mais engajamento com régua de comunicação automatizada", color: "result" },
    ],
    pains: [
      { icon: "mail", category: "EVASÃO", quote: "O aluno parou de acessar na semana 3 e eu só soube quando pediu reembolso", solution: "Alerta automático de inatividade com régua de reengajamento via WhatsApp e e-mail personalizado." },
      { icon: "chart", category: "VENDAS", quote: "Comprei tráfego, mas não sei qual curso converte melhor nem de onde vêm os alunos", solution: "Dashboard de conversão por produto, canal e etapa do funil com LTV real por aluno." },
      { icon: "award", category: "CERTIFICADOS", quote: "Emitir certificado leva 3 dias e ainda erro o nome do aluno", solution: "Geração automática de certificados com validação por QR code e banco de dados auditável." },
      { icon: "trend", category: "UPSELL", quote: "Aluno concluiu o curso, virou fã — e eu nunca ofereci nada depois", solution: "Régua de upsell automática baseada no histórico de compras, engajamento e perfil do aluno." },
    ],
    entrega: "CRM de alunos + automações de reengajamento + geração de certificados + dashboard de receita por produto.",
    mvp: "MVP em 3 semanas",
  },
  {
    id: "logistica",
    label: "Logística",
    sub: "Transportadoras · Logística · Frotas · Delivery · Distribuidoras",
    headline: "Carga saiu. Motorista sumiu. Cliente ligando.",
    desc: "Operação logística sem sistema é custo invisível. Cada reentrega, cada rota mal feita, cada manutenção atrasada é margem sendo destruída em tempo real.",
    stats: [
      { value: "35%", label: "das entregas atrasadas geram reentrega — que dobra o custo operacional", color: "problem" },
      { value: "R$12k", label: "perdidos por mês em combustível por rotas não otimizadas", color: "problem" },
      { value: "60%", label: "menos ligações de cliente com rastreio e notificação automática", color: "result" },
    ],
    pains: [
      { icon: "truck", category: "RASTREIO", quote: "Cliente liga perguntando onde está a entrega e eu tenho que ligar pro motorista", solution: "Rastreio em tempo real com notificação automática para o cliente a cada atualização de status." },
      { icon: "map", category: "ROTAS", quote: "Cada motorista escolhe o próprio caminho e o combustível vai embora", solution: "Roteirização com histórico de km percorrido, custo real por entrega e desvios identificados." },
      { icon: "doc", category: "OS", quote: "Não sei quantas entregas foram feitas, com qual motorista e se foram concluídas", solution: "OS digital com registro de ocorrências, foto de entrega e assinatura do recebedor no celular." },
      { icon: "tool", category: "FROTA", quote: "Só descubro que o caminhão precisava de manutenção quando quebra na estrada", solution: "Controle de manutenção preventiva com alerta automático por km rodado ou prazo de revisão." },
    ],
    entrega: "Sistema de OS + rastreio de entregas + controle de frota + roteirização + dashboard de margem por rota.",
    mvp: "MVP em 4 semanas",
  },
]

/* ── Component ───────────────────────────────────────────────── */
export function Segmentos() {
  const [active, setActive] = useState(segments[0].id)
  const seg = segments.find(s => s.id === active)!

  return (
    <>
      <section id="segmentos" style={{ padding: "96px 40px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* ── Header ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer(0.1)}
            style={{ marginBottom: 40 }}
          >
            <motion.div variants={childFadeUp} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              marginBottom: 20, padding: "4px 12px",
              border: "1px solid rgba(46,196,182,0.25)", borderRadius: 999,
              fontSize: 11, fontWeight: 600, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "var(--teal)",
              fontFamily: "var(--font-mono)",
            }}>
              <span className="pulse-dot" style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--teal)", display: "inline-block" }} />
              Inteligência comercial
            </motion.div>
            <div style={{ overflow: "hidden" }}>
              <motion.h2
                variants={{ hidden: { y: "100%" }, visible: { y: "0%", transition: { duration: 0.75, ease: E, delay: 0.08 } } }}
                style={{
                  fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 700,
                  lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 14,
                }}
              >
                Cada segmento tem sua dor.<br />
                <span style={{ color: "rgba(255,255,255,0.3)", fontWeight: 300, fontStyle: "italic" }}>Nós temos a solução exata.</span>
              </motion.h2>
            </div>
            <motion.p variants={childFadeUp} style={{ fontSize: 16, color: "var(--muted)", maxWidth: 540, lineHeight: 1.65 }}>
              Selecione o perfil do seu negócio e veja os problemas que custam caro hoje — e como a Tech TSU transforma isso em sistema funcional.
            </motion.p>
          </motion.div>

          {/* ── Segment filter ── */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 40 }} className="seg-filter">
            {segments.map(s => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(s.id)}
                style={{
                  padding: "8px 14px", borderRadius: 6,
                  border: active === s.id ? "1px solid var(--teal)" : "1px solid var(--border-m)",
                  background: active === s.id ? "rgba(46,196,182,0.08)" : "rgba(255,255,255,0.02)",
                  color: active === s.id ? "var(--teal)" : "var(--muted)",
                  fontSize: 12, fontWeight: active === s.id ? 600 : 400,
                  cursor: "pointer", fontFamily: "inherit",
                  transition: "all 0.18s", letterSpacing: "0.01em",
                }}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* ── Animated content ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: E }}
            >
              {/* Eyebrow + Headline */}
              <div style={{ marginBottom: 28 }}>
                <p style={{
                  fontSize: 10, fontFamily: "var(--font-mono)", color: "var(--teal)",
                  letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12, fontWeight: 600,
                }}>
                  {seg.sub}
                </p>
                <h3 style={{
                  fontSize: "clamp(20px, 3vw, 34px)", fontWeight: 700,
                  letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: 10,
                }}>
                  {seg.headline}
                </h3>
                <p style={{ fontSize: 14, color: "var(--muted)", maxWidth: 580, lineHeight: 1.7 }}>
                  {seg.desc}
                </p>
              </div>

              {/* Stats — problem (muted) vs result (teal) */}
              <div style={{
                display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
                gap: 1, background: "var(--border)",
                border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden",
                marginBottom: 16,
              }} className="seg-stats">
                {seg.stats.map((st, i) => (
                  <div key={i} style={{
                    padding: "24px 20px", background: "var(--bg-3)", textAlign: "center",
                  }}>
                    <p style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "clamp(22px, 3.5vw, 34px)",
                      fontWeight: 700, lineHeight: 1, marginBottom: 8,
                      color: st.color === "result" ? "var(--teal)" : "var(--text)",
                    }}>
                      {st.value}
                    </p>
                    <p style={{ fontSize: 11, color: "var(--muted)", lineHeight: 1.5, maxWidth: 150, margin: "0 auto" }}>
                      {st.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Pain cards — 2×2 */}
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr",
                gap: 1, background: "var(--border)",
                border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden",
                marginBottom: 12,
              }} className="seg-pains">
                {seg.pains.map((p, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ background: "rgba(46,196,182,0.025)", transition: { duration: 0.18 } }}
                    style={{ padding: "22px 22px", background: "var(--bg-2)", position: "relative" }}
                  >
                    {/* Category label */}
                    <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 12 }}>
                      {ICONS[p.icon]}
                      <span style={{
                        fontSize: 9, fontFamily: "var(--font-mono)", color: "var(--teal)",
                        fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase",
                      }}>
                        {p.category}
                      </span>
                    </div>

                    {/* Quote */}
                    <p style={{
                      fontSize: 14, fontWeight: 500, fontStyle: "italic",
                      color: "rgba(255,255,255,0.72)", lineHeight: 1.55,
                      marginBottom: 12, paddingBottom: 12,
                      borderBottom: "1px solid var(--border)",
                    }}>
                      "{p.quote}"
                    </p>

                    {/* Solution */}
                    <p style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.65 }}>
                      {p.solution}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Entrega + MVP */}
              <div style={{
                display: "flex", alignItems: "flex-start", gap: 14,
                padding: "16px 18px",
                background: "rgba(46,196,182,0.04)",
                border: "1px solid rgba(46,196,182,0.14)",
                borderRadius: 8, marginBottom: 1,
              }}>
                <div style={{
                  width: 30, height: 30, borderRadius: 6, flexShrink: 0,
                  background: "rgba(46,196,182,0.1)",
                  border: "1px solid rgba(46,196,182,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="13" height="13" fill="none" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M22 4L12 14.01l-3-3" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                    <p style={{ fontSize: 11, color: "var(--muted-2)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>
                      O que a Tech TSU entrega
                    </p>
                    <span style={{
                      fontSize: 10, fontFamily: "var(--font-mono)", color: "var(--teal)",
                      padding: "2px 8px", borderRadius: 999,
                      border: "1px solid rgba(46,196,182,0.2)",
                      fontWeight: 600, letterSpacing: "0.08em",
                    }}>
                      {seg.mvp}
                    </span>
                  </div>
                  <p style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.6 }}>{seg.entrega}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ── CTA strip — fora do AnimatePresence, não reanimacena ── */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 16,
            padding: "20px 24px", marginTop: 16,
            background: "var(--bg-3)",
            border: "1px solid var(--border-m)",
            borderRadius: 8,
          }}>
            <div>
              <p style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>
                Reconheceu alguma dessas dores?
              </p>
              <p style={{ fontSize: 13, color: "var(--teal)", lineHeight: 1.5 }}>
                A Tech TSU transforma isso em sistema funcional em 3 a 6 semanas.
              </p>
            </div>
            <a
              href="#contato"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "11px 22px", borderRadius: 6,
                background: "var(--teal)", color: "#070809",
                fontSize: 13, fontWeight: 700,
                transition: "opacity 0.18s", whiteSpace: "nowrap",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.88")}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
            >
              Solicitar diagnóstico gratuito
              <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </a>
          </div>

        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .seg-stats { grid-template-columns: 1fr !important; }
          .seg-pains { grid-template-columns: 1fr !important; }
          #segmentos { padding: 64px 20px !important; }
        }
        @media (max-width: 480px) {
          .seg-filter button { font-size: 11px !important; padding: 6px 11px !important; }
        }
      `}</style>
    </>
  )
}
