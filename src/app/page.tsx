import { Topbar }        from "@/components/Topbar"
import { Hero }          from "@/components/Hero"
import { Marquee }       from "@/components/Marquee"
import { Clientes }      from "@/components/Clientes"
import { Case }          from "@/components/Case"
import { Oferta }        from "@/components/Oferta"
import { Solucoes }      from "@/components/Solucoes"
import { Segmentos }     from "@/components/Segmentos"
import { Comparativo }   from "@/components/Comparativo"
import { Processo }      from "@/components/Processo"
import { Vitrine }       from "@/components/Vitrine"
import { Ferramentas }   from "@/components/Ferramentas"
import { Empresa }       from "@/components/Empresa"
import { Disparos }      from "@/components/Disparos"
import { Seguranca }     from "@/components/Seguranca"
import { ContatoLeads }  from "@/components/ContatoLeads"
import { Footer }        from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Topbar />
      <main>
        <Hero />
        <Marquee />
        <Clientes />
        <Oferta />
        <Solucoes />
        <Segmentos />
        <Comparativo />
        <Processo />
        <Vitrine />
        <Empresa />
        <Case />
        <Disparos />
        <Ferramentas />
        <Seguranca />
        <ContatoLeads />
      </main>
      <Footer />
    </>
  )
}
