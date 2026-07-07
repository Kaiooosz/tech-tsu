import { Topbar }        from "@/components/Topbar"
import { Hero }          from "@/components/Hero"
import { Marquee }       from "@/components/Marquee"
import { Clientes }      from "@/components/Clientes"
import { Case }          from "@/components/Case"
import { Oferta }        from "@/components/Oferta"
import { Segmentos }     from "@/components/Segmentos"
import { Processo }      from "@/components/Processo"
import { Ferramentas }   from "@/components/Ferramentas"
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
        <Case />
        <Oferta />
        <Segmentos />
        <Processo />
        <Ferramentas />
        <ContatoLeads />
      </main>
      <Footer />
    </>
  )
}
