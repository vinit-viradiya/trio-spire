import Image from 'next/image'
import React from 'react'
import Button from './Button'

const CTA = () => {
  return (
    <section className="py-100 3xl:py-120 relative z-1">
      <div className="container text-center flex flex-col items-center">
        <h2 className='text-72 font-nimbus mb-12 3xl:mb-24 text-primary'>
          <b><i> Let’s Build</i></b><br />Something Meaningful Together
        </h2>
        <p className='mb-32 3xl:mb-64'>
          Tell us about your idea or project, and we’ll help you shape it into a reliable, scalable digital product.
        </p>
        <Button props={{href: '/'}}>Request a Proposal</Button>
      </div>
      <div className="absolute -z-1 inset-0">
        <Image src="/images/cta-bg.webp" fill alt="CTA background" />
      </div>
    </section>
  )
}

export default CTA