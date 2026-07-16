import type { Metadata } from "next"
import { LegalPage } from "@/components/LegalPage"

export const metadata: Metadata = {
  title: "Aviso de Privacidade | Tech Tsu",
  description: "Como a Tech Tsu coleta, utiliza e protege dados pessoais, conforme a LGPD.",
}

export default function Privacidade() {
  return (
    <LegalPage
      title="Aviso de Privacidade"
      subtitle="Diretrizes e políticas"
      updated="15 de julho de 2026"
    >
      <h2>1. Quem somos</h2>
      <p>
        Este Aviso de Privacidade descreve como a <strong>TSUNOKAWA TECH LTDA</strong>, CNPJ
        66.720.724/0001-18, com sede em Barueri/SP (&quot;<strong>Tech Tsu</strong>&quot;), trata
        dados pessoais, em conformidade com a Lei Geral de Proteção de Dados — LGPD
        (Lei nº 13.709/2018).
      </p>

      <h2>2. A quem este aviso se aplica</h2>
      <p>Este aviso se aplica a:</p>
      <ul>
        <li>Visitantes do site da Tech Tsu;</li>
        <li>Pessoas que preenchem o formulário de diagnóstico ou entram em contato pelos nossos canais;</li>
        <li>Clientes e seus representantes durante a relação comercial.</li>
      </ul>
      <p>
        <strong>Não se aplica</strong> aos dados tratados dentro dos sistemas que desenvolvemos
        para Clientes, nem às bases de contatos utilizadas em campanhas de disparo. Nesses
        casos, o Cliente é o controlador dos dados e a Tech Tsu atua como operadora, nos termos
        da cláusula 7.
      </p>

      <h2>3. Quais dados coletamos</h2>
      <h3>Dados fornecidos por você</h3>
      <ul>
        <li>Identificação e contato: nome, e-mail, WhatsApp, empresa, site e cargo;</li>
        <li>
          Respostas do formulário de diagnóstico: informações sobre a operação da empresa, como
          segmento, serviços de interesse, ferramentas utilizadas, gargalos, urgência, porte e
          faixas de faturamento e investimento;
        </li>
        <li>Conteúdo de mensagens enviadas por e-mail, WhatsApp ou redes sociais.</li>
      </ul>
      <h3>Dados coletados automaticamente</h3>
      <ul>
        <li>
          Registros de acesso: endereço IP, data e hora, navegador (user-agent) e página de
          origem — mantidos por obrigação do Marco Civil da Internet (Lei nº 12.965/2014).
        </li>
      </ul>

      <h2>4. Para que usamos os dados</h2>
      <ul>
        <li>Responder solicitações e agendar o diagnóstico;</li>
        <li>Elaborar propostas comerciais e priorizar o atendimento;</li>
        <li>Comunicar novidades sobre serviços da Tech Tsu, com opção de descadastro;</li>
        <li>Garantir a segurança do site e prevenir fraudes;</li>
        <li>Cumprir obrigações legais e exercer direitos em processos;</li>
        <li>Medir e melhorar o desempenho do site.</li>
      </ul>

      <h2>5. Bases legais</h2>
      <ul>
        <li><strong>Procedimentos preliminares ao contrato</strong> (art. 7º, V da LGPD): dados do formulário de diagnóstico e tratativas comerciais;</li>
        <li><strong>Legítimo interesse</strong> (art. 7º, IX): comunicação institucional, segurança e melhoria do site;</li>
        <li><strong>Obrigação legal</strong> (art. 7º, II): guarda de registros de acesso e documentos fiscais;</li>
        <li><strong>Consentimento</strong> (art. 7º, I): quando solicitado de forma específica, podendo ser revogado a qualquer momento.</li>
      </ul>

      <h2>6. Com quem compartilhamos</h2>
      <p>Não vendemos dados pessoais. Compartilhamos apenas com:</p>
      <ul>
        <li>
          <strong>Provedores de infraestrutura:</strong> hospedagem do site (Vercel) e banco de
          dados (Neon), que armazenam os dados por conta e ordem da Tech Tsu;
        </li>
        <li>
          <strong>Meta/WhatsApp:</strong> quando o contato ocorre por esse canal, o tratamento
          segue também as políticas da Meta;
        </li>
        <li><strong>Autoridades:</strong> quando exigido por lei ou ordem judicial;</li>
        <li><strong>Assessorias profissionais:</strong> contábil e jurídica, quando necessário à operação.</li>
      </ul>

      <h2>7. Projetos de software e operações de disparo</h2>
      <p>
        Nos sistemas desenvolvidos sob medida e nas campanhas de disparo via API Oficial do
        WhatsApp, os dados de clientes finais, leads e contatos pertencem ao Cliente, que atua
        como <strong>controlador</strong>. A Tech Tsu atua como <strong>operadora</strong>,
        tratando esses dados exclusivamente conforme as instruções do Cliente e o contrato do
        projeto, com cláusulas de proteção de dados.
      </p>
      <p>
        Para campanhas de disparo, exigimos que o Cliente garanta a origem lícita da base e o
        consentimento (opt-in) dos destinatários, e implementamos mecanismos de opt-out
        conforme as políticas da Meta.
      </p>

      <h2>8. Por quanto tempo guardamos</h2>
      <ul>
        <li><strong>Contatos comerciais e leads:</strong> enquanto durar a tratativa e por até 2 anos após o último contato, salvo pedido de exclusão;</li>
        <li><strong>Dados contratuais e fiscais:</strong> pelos prazos legais de guarda e prescrição (em regra, 5 anos ou mais);</li>
        <li><strong>Registros de acesso:</strong> mínimo de 6 meses, conforme o Marco Civil da Internet.</li>
      </ul>

      <h2>9. Como protegemos</h2>
      <p>
        Adotamos medidas técnicas e organizacionais como criptografia em trânsito (TLS),
        controle de acesso com credenciais individuais, princípio do menor privilégio e
        monitoramento de infraestrutura. Nenhum sistema é infalível; em caso de incidente de
        segurança relevante, comunicaremos os titulares e a ANPD conforme a LGPD.
      </p>

      <h2>10. Seus direitos</h2>
      <p>Como titular de dados, você pode solicitar, a qualquer momento:</p>
      <ul>
        <li>Confirmação da existência de tratamento e acesso aos dados;</li>
        <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
        <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
        <li>Portabilidade dos dados;</li>
        <li>Informação sobre compartilhamentos realizados;</li>
        <li>Revogação do consentimento e eliminação dos dados tratados com base nele;</li>
        <li>Oposição a tratamentos realizados com base em legítimo interesse;</li>
        <li>Reclamação à Autoridade Nacional de Proteção de Dados (ANPD).</li>
      </ul>
      <p>
        As solicitações devem ser enviadas para{" "}
        <a href="mailto:contato@techtsu.com.br">contato@techtsu.com.br</a> e serão respondidas
        nos prazos da LGPD.
      </p>

      <h2>11. Cookies</h2>
      <p>O site utiliza as seguintes categorias:</p>
      <ul>
        <li>
          <strong>Essenciais:</strong> armazenamento técnico necessário ao funcionamento e à
          segurança do site, incluindo o registro da sua própria preferência de cookies.
          Dispensam consentimento (art. 7º, II e IX da LGPD);
        </li>
        <li>
          <strong>Estatísticas e marketing:</strong> medição de audiência e personalização de
          campanhas. Só são ativados com o seu consentimento, informado no banner exibido no
          primeiro acesso.
        </li>
      </ul>
      <p>
        Você pode revisar ou revogar suas escolhas a qualquer momento pelo link{" "}
        <strong>Gerenciar cookies</strong>, no rodapé do site. Recusar as categorias opcionais
        não compromete o funcionamento básico do site.
      </p>

      <h2>12. Transferência internacional</h2>
      <p>
        Nossos provedores de infraestrutura (Vercel e Neon) podem armazenar dados em servidores
        localizados fora do Brasil, especialmente nos Estados Unidos. Essas transferências
        observam o art. 33 da LGPD e contam com salvaguardas contratuais adequadas dos
        provedores.
      </p>

      <h2>13. Encarregado pelo tratamento de dados</h2>
      <p>
        O canal do encarregado pelo tratamento de dados pessoais (art. 41 da LGPD) é o e-mail{" "}
        <a href="mailto:contato@techtsu.com.br">contato@techtsu.com.br</a>.
      </p>

      <h2>14. Alterações deste aviso</h2>
      <p>
        Este aviso pode ser atualizado para refletir mudanças operacionais ou legais. A versão
        vigente estará sempre disponível nesta página, com a data de atualização indicada no
        topo. Alterações relevantes serão comunicadas pelos nossos canais.
      </p>
    </LegalPage>
  )
}
