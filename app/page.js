import CTA from "./components/CTA"
import FAQ from "./components/FAQ"
import Testimonials from "./components/Testimonials"
import About from "./sections/home/About"
import Facts from "./sections/home/Facts"
import Hero from "./sections/home/Hero"
import Industries from "./sections/home/Industries"
import Services from "./sections/home/Services"
import Work from "./sections/home/Work"

const Home = () => {
  return (
    <main>
      <Hero />
      <div id="about">
        <About />
      </div>
      <Facts />
      <Services />
      <Work />
      <Industries />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  )
}

export default Home