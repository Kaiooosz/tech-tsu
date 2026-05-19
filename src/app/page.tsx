import { Topbar }    from "@/components/Topbar"
import { Hero }       from "@/components/Hero"
import { ProofStrip } from "@/components/ProofStrip"
import { Oferta }     from "@/components/Oferta"
import { Case }       from "@/components/Case"
import { Processo }   from "@/components/Processo"
import { Contato }    from "@/components/Contato"
import { Footer }     from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Topbar />
      <main>
        <Hero />
        <ProofStrip />
        <Oferta />
        <Case />
        <Processo />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
