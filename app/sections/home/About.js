
import React from 'react'
import avatar from '@/public/images/avatar.png'
import Button from '../../components/Button'
import Image from 'next/image'

const About = () => {
    return (
        <section className='py-100'>
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-40 3xl:gap-80 items-center mb-40">
                    <div className="relative aspect-video lg:aspect-[.94/1]">
                        <Image
                            src="/images/about-img.webp"
                            alt="A Thoughtful Partner for Digital Growth"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="rounded-xl xl:rounded-3xl object-cover"
                        />
                    </div>
                    <div className="not-lg:order-first flex flex-col gap-40 3xl:gap-80">
                        <div>
                            <h2 className='text-72 font-nimbus mb-12 3xl:mb-24 text-primary'>
                                <b><i>A Thoughtful Partner </i></b>for Digital Growth
                            </h2>
                            <p className='mb-24 3xl:mb-48'>
                                TrioSpire is a design-driven IT company that helps businesses turn ideas into reliable digital products. We work at the intersection of strategy, design, and technology—focusing not just on how things look, but how they work, scale, and deliver value over time.
                            </p>
                            <Button props={{ href: "/" }}>More About Us</Button>
                        </div>
                        <div className='not-xl:hidden'>
                            <blockquote className='font-medium text-primary italic mb-24'>
                                “Working with TrioSpire felt like working with an in-house team. They took the time to understand our product, challenged assumptions when needed, and delivered a solution that was both well-designed and technically solid.”
                            </blockquote>
                            <div className="flex items-center gap-12 3xl:gap-24">
                                <div className="size-60 3xl:size-80 relative">
                                    <Image src={avatar} alt='Jessica Pearson' className='absolute inset-0 size-full rounded-full' />
                                </div>
                                <div>
                                    <p className='font-medium'>Jessica Pearson</p>
                                    <p className='text-sm sm:text-base'>Managing Partner, Pearson Hardman</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='xl:hidden'>
                    <p className='font-medium text-primary italic mb-24'>
                        “Working with TrioSpire felt like working with an in-house team. They took the time to understand our product, challenged assumptions when needed, and delivered a solution that was both well-designed and technically solid.”
                    </p>
                    <div className="flex items-center gap-12 2xl:gap-24">
                        <div className="size-60 2xl:size-80 relative">
                            <Image src={avatar} alt='Jessica Pearson' className='absolute inset-0 size-full rounded-full' />
                        </div>
                        <div>
                            <p className='font-medium'>Jessica Pearson</p>
                            <p className='text-sm sm:text-base'>Managing Partner, Pearson Hardman</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About