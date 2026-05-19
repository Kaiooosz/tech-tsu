import { CursorGlow } from "@/components/CursorGlow"
import { Topbar }     from "@/components/Topbar"
import { Hero }       from "@/components/Hero"
import { Marquee }    from "@/components/Marquee"
import { Case }       from "@/components/Case"
import { Oferta }     from "@/components/Oferta"
import { Processo }   from "@/components/Processo"
import { Contato }    from "@/components/Contato"
import { Footer }     from "@/components/Footer"

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Topbar />
      <main>
        <Hero />
        <Marquee />
        <Case />
        <Oferta />
        <Processo />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
