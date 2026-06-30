import Image from 'next/image'
import React from 'react'

const WhyChoose = () => {

    const data = [
        {
            title: 'Fast & Reliable Delivery',
            text: 'We prioritize timely execution while maintaining the highest standards of quality and performance.'
        },
        {
            title: 'Tailored to Your Needs',
            text: 'Every solution is carefully designed to align with your specific business goals and operational requirements.'
        },
        {
            title: 'Scalable & Future-Ready Solutions',
            text: 'We build systems that grow with your business, ensuring flexibility, maintainability, and long-term value.'
        },
    ]

    return (
        <section className="py-100 bg-brand-100">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-40 xl:gap-80 items-center">
                    <div className="relative aspect-square md:aspect-[.84/1]">
                        <Image src='/images/why-choose.webp' alt='Why Choose Our Services' className='absolute inset-0 size-full object-cover rounded-xl xl:rounded-3xl' width={800} height={950} />
                    </div>
                    <div>
                        <div className="mb-40 2xl:mb-80">
                            <h2 className='text-72 font-nimbus mb-12 3xl:mb-24 text-primary max-w-530'>
                                Why Choose Our <b className='text-secondary'><i>Services</i></b>
                            </h2>
                            <p className='max-w-800 mx-auto'>
                                Get high-quality results, faster delivery, and tailored solutions that grow with your business. We focus on value, efficiency, and long-term success for every project.
                            </p>
                        </div>
                        <div className="flex flex-col gap-32 md:gap-8 2xl:gap-32 4xl:gap-64">
                            {
                                data.map((item, index) => {
                                    return (
                                        <div key={index} className="flex flex-col gap-16">
                                            <div className="flex gap-8 2xl:gap-16 items-start">
                                                <img src="/icons/badge.svg" alt="" className='shrink-0 mt-1 2xl:mt-10'/>
                                                <h3 className='2xl:text-32 font-medium text-primary-2'>{item.title}</h3>
                                            </div>
                                            <p className='md:hidden 2xl:block'>{item.text}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChoose