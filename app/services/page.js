import React from 'react'
import FAQ from '../components/FAQ'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Hero from '../sections/services/Hero'
import Img from '../sections/services/Img'
import Experties from '../sections/services/Experties'
import Tools from '../components/Tools'
import WhyChoose from '../components/WhyChoose'

const services = () => {
  return (
    <main>
      <Hero />
      <Img />
      <Experties />
      <Tools />
      <WhyChoose />
      <FAQ />
      <Testimonials />
      <CTA />
    </main>
  )
}

export default services