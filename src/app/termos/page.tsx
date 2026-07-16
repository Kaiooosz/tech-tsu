import type { Metadata } from "next"
import { LegalPage } from "@/components/LegalPage"

export const metadata: Metadata = {
  title: "Termos e Condições Gerais de Uso | Tech Tsu",
  description: "Termos e condições gerais de uso dos serviços e do site da Tech Tsu.",
}

export default function Termos() {
  return (
    <LegalPage
      title="Termos e Condições Gerais de Uso"
      subtitle="Diretrizes e políticas"
      updated="15 de julho de 2026"
    >
      <h2>1. Identificação</h2>
      <p>
        Estes Termos e Condições Gerais de Uso (&quot;Termos&quot;) regulam o acesso ao site e a
        contratação dos serviços da <strong>TSUNOKAWA TECH LTDA</strong>, inscrita no CNPJ sob o
        nº 66.720.724/0001-18, com sede em Barueri/SP, doravante denominada
        <strong> Tech Tsu</strong>. Canal de contato: <a href="mailto:contato@techtsu.com.br">contato@techtsu.com.br</a>.
      </p>

      <h2>2. Definições</h2>
      <ul>
        <li><strong>Tech Tsu:</strong> a empresa identificada na cláusula 1, prestadora dos Serviços.</li>
        <li><strong>Site:</strong> o site institucional da Tech Tsu e seus subdomínios.</li>
        <li><strong>Cliente:</strong> pessoa física ou jurídica que contrata qualquer Serviço da Tech Tsu.</li>
        <li><strong>Visitante:</strong> qualquer pessoa que acessa o Site, contratante ou não.</li>
        <li><strong>Serviços:</strong> desenvolvimento de software sob medida, operação de campanhas de mensagens via API Oficial do WhatsApp e demais serviços descritos no Site ou em proposta comercial.</li>
        <li><strong>Proposta Comercial:</strong> documento específico que formaliza escopo, prazos e valores de cada projeto.</li>
        <li><strong>API Oficial:</strong> a WhatsApp Business Platform, operada pela Meta Platforms, Inc.</li>
        <li><strong>Disparos:</strong> campanhas de envio de mensagens em escala via API Oficial, executadas pela Tech Tsu por conta e ordem do Cliente.</li>
      </ul>

      <h2>3. Aceitação e eficácia</h2>
      <p>
        O acesso ao Site, o envio de formulários ou a contratação de qualquer Serviço implica
        aceitação integral destes Termos. A Tech Tsu pode atualizá-los a qualquer momento,
        mediante publicação da nova versão nesta página; o uso continuado do Site ou dos
        Serviços após a publicação representa concordância com a versão vigente.
      </p>
      <p>
        Em caso de conflito entre estes Termos e as condições de uma Proposta Comercial ou
        contrato específico firmado com o Cliente, prevalecem as condições do documento
        específico.
      </p>

      <h2>4. Objeto: os Serviços</h2>
      <p>A Tech Tsu presta, entre outros, os seguintes Serviços:</p>
      <ul>
        <li>
          <strong>Software sob medida:</strong> diagnóstico da operação, desenvolvimento de MVP
          e evolução contínua de sistemas como CRM, ERP, dashboards, automações e integrações,
          conforme escopo definido em Proposta Comercial.
        </li>
        <li>
          <strong>Disparos via API Oficial do WhatsApp:</strong> estruturação da operação de
          campanhas — organização da base, configuração e homologação de conta junto à Meta,
          criação e aprovação de templates, execução dos envios e relatórios de resultados.
        </li>
        <li>
          <strong>Ferramentas próprias:</strong> produtos de software operados pela Tech Tsu,
          com condições de uso próprias quando aplicável.
        </li>
      </ul>
      <p>
        O Site tem caráter institucional e de captação de contatos comerciais. Nenhum conteúdo
        do Site constitui oferta vinculante; toda contratação é formalizada por Proposta
        Comercial ou contrato específico.
      </p>

      <h2>5. Contratação, valores e pagamento</h2>
      <ul>
        <li>Escopo, cronograma, valores e forma de pagamento são definidos em Proposta Comercial específica para cada projeto.</li>
        <li>O diagnóstico inicial oferecido pelo Site é gratuito e não gera obrigação de contratação para nenhuma das partes.</li>
        <li>
          Custos cobrados por terceiros — como tarifas de conversa da Meta/WhatsApp,
          infraestrutura de nuvem, domínios, gateways de pagamento e APIs de terceiros — são de
          responsabilidade do Cliente e serão sempre informados previamente na projeção de custos.
        </li>
        <li>Condições de cancelamento, reembolso e reajuste constam do contrato de cada projeto, observado o Código de Defesa do Consumidor quando aplicável.</li>
      </ul>

      <h2>6. Obrigações do Cliente</h2>
      <ul>
        <li>Fornecer informações verídicas, completas e atualizadas.</li>
        <li>Colaborar com o andamento do projeto, disponibilizando acessos, conteúdos, aprovações e homologações nos prazos combinados.</li>
        <li>Utilizar os sistemas e serviços entregues de forma lícita, em conformidade com a legislação brasileira.</li>
        <li>Manter sigilo sobre credenciais de acesso e responder pelos atos praticados com elas.</li>
        <li>Nas operações de Disparos, responder pela origem, qualidade e legitimidade da base de contatos, conforme a cláusula 7.</li>
      </ul>

      <h2>7. Regras específicas para Disparos via API Oficial</h2>
      <ul>
        <li>
          As campanhas seguem as políticas da WhatsApp Business Platform e demais diretrizes da
          Meta. Templates de mensagem estão sujeitos à aprovação prévia da Meta.
        </li>
        <li>
          O Cliente declara que a base de contatos utilizada foi obtida de forma lícita e que os
          destinatários consentiram em receber comunicações (opt-in), responsabilizando-se
          integralmente por essa garantia.
        </li>
        <li>
          É vedado o uso dos Disparos para conteúdo ilícito, enganoso, discriminatório, ou que
          caracterize spam. A Tech Tsu pode recusar, ajustar ou suspender campanhas que violem
          estas regras ou as políticas da Meta, sem que isso gere direito a indenização.
        </li>
        <li>
          Entregabilidade, leitura e resposta dependem de fatores externos — incluindo a própria
          plataforma da Meta, a qualidade da base e o comportamento dos destinatários. A Tech
          Tsu emprega as melhores práticas de aquecimento e ritmo de envio, mas não garante
          resultados específicos de entrega ou conversão.
        </li>
      </ul>

      <h2>8. Obrigações e limites de responsabilidade da Tech Tsu</h2>
      <ul>
        <li>Executar os Serviços com diligência técnica e boa-fé, conforme o escopo contratado.</li>
        <li>Prestar suporte nos termos e prazos definidos no contrato de cada projeto.</li>
        <li>
          A Tech Tsu não responde por indisponibilidade, alteração ou descontinuidade de
          serviços de terceiros dos quais os Serviços dependam — incluindo Meta/WhatsApp,
          provedores de nuvem, gateways de pagamento e APIs externas.
        </li>
        <li>
          A Tech Tsu não responde por lucros cessantes, perda de chance ou danos indiretos.
          Ressalvadas as hipóteses legais em contrário, a responsabilidade total da Tech Tsu
          limita-se ao valor efetivamente pago pelo Cliente nos 12 (doze) meses anteriores ao
          evento.
        </li>
      </ul>

      <h2>9. Propriedade intelectual</h2>
      <ul>
        <li>
          Marca, identidade visual, conteúdo do Site e ferramentas próprias são de titularidade
          exclusiva da Tech Tsu, sendo vedada a reprodução sem autorização.
        </li>
        <li>
          A titularidade ou licença do software desenvolvido sob medida é definida no contrato
          de cada projeto. Na ausência de disposição específica, o Cliente recebe licença de uso
          do sistema entregue para sua operação, permanecendo bibliotecas, frameworks e
          componentes de uso geral sob suas licenças originais.
        </li>
        <li>Os dados inseridos pelo Cliente nos sistemas — cadastros, contatos, registros operacionais — pertencem ao Cliente.</li>
      </ul>

      <h2>10. Privacidade e proteção de dados</h2>
      <p>
        O tratamento de dados pessoais pela Tech Tsu observa a Lei Geral de Proteção de Dados
        (Lei nº 13.709/2018) e está descrito no <a href="/privacidade">Aviso de Privacidade</a>,
        que integra estes Termos.
      </p>

      <h2>11. Disposições gerais</h2>
      <ul>
        <li>Comunicações entre as partes são válidas quando realizadas pelo e-mail cadastrado ou pelos canais oficiais da Tech Tsu.</li>
        <li>A tolerância quanto ao descumprimento de qualquer condição não constitui renúncia de direito.</li>
        <li>A eventual invalidade de uma cláusula não afeta a validade das demais.</li>
        <li>O Cliente não pode ceder direitos e obrigações decorrentes destes Termos sem anuência prévia da Tech Tsu.</li>
      </ul>

      <h2>12. Legislação aplicável e foro</h2>
      <p>
        Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o
        foro da Comarca de Barueri, Estado de São Paulo, para dirimir quaisquer controvérsias,
        com renúncia expressa a qualquer outro, por mais privilegiado que seja — ressalvado o
        foro do domicílio do consumidor, quando aplicável.
      </p>
    </LegalPage>
  )
}
