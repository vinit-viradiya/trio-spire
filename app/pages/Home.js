import React from 'react'
import Hero from '../sections/home/Hero'
import About from '../sections/home/About'
import Facts from '../sections/home/Facts'
import Services from '../sections/home/Services'
import Work from '../sections/home/Work'
import Industries from '../sections/home/Industries'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <>
      <Hero />
      <div id="about">
        <About />
      </div>
      <Facts />
      <Services />
      <Work />
      <Industries />
      <Testimonials/>
      <FAQ/>
      <CTA/>
    </>
  )
}

export default Home