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
      <div className="container">
        <div className="grid md:grid-cols-12 gap-32 xl:gap-64 items-center">
          <div className='md:col-span-6 lg:col-span-7'>
            <Image src="/images/clients-count.png" width={336} height={44} alt="Clients count" className='mb-24 xl:mb-48' />
            <h1 className='text-100 font-nimbus mb-12 xl:mb-24'>
              Explore our <b className='text-primary'><i>portfolio</i></b>
            </h1>
            <p className='max-w-700 mb-24 xl:mb-48'>
              Selected projects showcasing scalable, performance-driven digital solutions.
            </p>
            <Button props={{ href: "/" }}>Hire a Developer</Button>
          </div>
          <div className='md:col-span-6 lg:col-span-5'>
            <div className="w-full max-w-555 aspect-square relative ml-auto">
              <Image
                src='/images/graphic1.svg' width={530} height={530} alt='Services banner img' loading="eager"
                className='absolute size-full object-contain inset-0 rounded-3xl drop-shadow-2' />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-[55%] opacity-12 -z-1 rotate-90 blur-[150px]">
        <div className="size-460 bg-yellow-400 rounded-full"></div>
        <div className="size-460 bg-secondary rounded-full"></div>
      </div>
    </section>
  )
}

export default Hero