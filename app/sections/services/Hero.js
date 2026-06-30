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
        <div className="grid md:grid-cols-2 gap-32 xl:gap-64 items-center">
          <div>
            <h1 className='text-100 font-nimbus mb-12 xl:mb-24'>
              Creative<b className='text-primary'><i> Solutions</i></b>
            </h1>
            <p className='max-w-700 mb-24 xl:mb-48'>
              We deliver innovative, tailor-made strategies that solve problems, spark ideas, and bring your vision to life—efficiently and effectively.
            </p>
            <Button props={{ href: "/" }}>Start a Project</Button>
          </div>
          <div className='flex justify-center'>
            <div className="w-full max-w-535 aspect-square relative">
              <Image src='/images/service-hero2.webp' width={530} height={530} alt='Services banner img' className='absolute size-full object-contain inset-0 drop-shadow-2' />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 opacity-12 -z-1 -rotate-140 blur-[150px]">
        <div className="size-460 bg-yellow-400 rounded-full"></div>
        <div className="size-460 bg-secondary rounded-full"></div>
      </div>
    </section>
  )
}

export default Hero