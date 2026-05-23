import { Topbar }        from "@/components/Topbar"
import { Hero }          from "@/components/Hero"
import { Marquee }       from "@/components/Marquee"
import { Case }          from "@/components/Case"
import { Oferta }        from "@/components/Oferta"
import { Segmentos }     from "@/components/Segmentos"
import { Processo }      from "@/components/Processo"
import { ContatoLeads }  from "@/components/ContatoLeads"
import { Footer }        from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Topbar />
      <main>
        <Hero />
        <Marquee />
        <Case />
        <Oferta />
        <Segmentos />
        <Processo />
        <ContatoLeads />
      </main>
      <Footer />
    </>
  )
}
