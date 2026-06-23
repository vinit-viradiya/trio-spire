import React from 'react'
import Button from '../../components/Button'
import pro1 from '@/public/images/pro_1.webp'
import pro2 from '@/public/images/pro_2.webp'
import pro3 from '@/public/images/pro_3.webp'
import Image from 'next/image'

const images = [{ src: pro1, alt: 'Project 1' }, { src: pro2, alt: 'Project 2' }, { src: pro3, alt: 'Project 3' },]

const Hero = () => {
  return (
    <section className="py-100 relative overflow-hidden z-1">
      <div className="container mb-40 xl:mb-80">
        <h1 className='text-100 font-nimbus mb-12 xl:mb-24'>
          <b className='text-primary'><i>Designing and Building</i></b> Digital Products
        </h1>
        <p className='max-w-590 mb-24 xl:mb-48'>
          Helping startups and growing companies turn ideas into scalable websites, apps, and SaaS products designed with clarity, built for performance.
        </p>
        <Button props={{ href: "/" }}>Start a Project</Button>
      </div>
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
          {
            images.map((item, index) => {
              return (
                <div key={index} className="relative aspect-[1.63/1]">
                  <Image src={item.src} alt={item.alt} className='absolute inset-0 size-full rounded-xl xl:rounded-3xl' />
                </div>
              )
            })
          }
          <div className='grid place-items-center'>
            <a href='#about' aria-label='Go to about section' className='bg-primary p-13.5 rounded-full'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 19V5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.001 13.999L12 19L6.99902 13.999" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute size-555 top-1/2 -translate-y-1/2 -translate-x-1/2 left-0 rounded-full blur-2xl opacity-8 -z-1" style={{ background: "var(--gradient-1)" }}></div>
    </section>
  )
}

export default Hero