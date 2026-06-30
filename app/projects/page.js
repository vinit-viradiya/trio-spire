import React from 'react'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Tools from '../components/Tools'
import WhyChoose from '../components/WhyChoose'
import Hero from '../sections/projects/Hero'
import ProjectCards from '../sections/projects/ProjectCards'

const services = () => {
  return (
    <main>
      <Hero />
      <ProjectCards />
      <Tools />
      <WhyChoose />
      <Testimonials />
      <CTA />
    </main>
  )
}

export default services