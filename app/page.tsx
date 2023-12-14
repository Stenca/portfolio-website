import About from '@/components/about'
import Intro from '@/components/intro'
import Projets from '@/components/projets'
import SectionDivider from '@/components/section-divider'

export default function Home() {
  return (
    <main className=" flex flex-col items-center px-4">
      <Intro />
      <SectionDivider  />
      <About />
      <Projets />
    </main>
    
  )
}
