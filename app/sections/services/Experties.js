import Image from 'next/image'
import React from 'react'

const Experties = () => {

    const data = [
        {
            title: 'WordPress - WooCommerce',
            text: 'Your Vision, Our Expertise – Together, we bring ideas to life with tailored solutions that deliver real results. Let’s build something amazing.',
            img: '/images/service3.png'
        },
        {
            title: 'Shopify Development',
            text: 'Your Vision, Our Expertise – Together, we bring ideas to life with tailored solutions that deliver real results. Let’s build something amazing.',
            img: '/images/service2.png'
        },
        {
            title: 'Web Design',
            text: 'Your Vision, Our Expertise – Together, we bring ideas to life with tailored solutions that deliver real results. Let’s build something amazing.',
            img: '/images/service1.png'
        },
        {
            title: 'UI/UX Design',
            text: 'Your Vision, Our Expertise – Together, we bring ideas to life with tailored solutions that deliver real results. Let’s build something amazing.',
            img: '/images/service3.png'
        },
        {
            title: 'Web Development',
            text: 'Your Vision, Our Expertise – Together, we bring ideas to life with tailored solutions that deliver real results. Let’s build something amazing.',
            img: '/images/service2.png'
        },
        {
            title: 'App Design',
            text: 'Your Vision, Our Expertise – Together, we bring ideas to life with tailored solutions that deliver real results. Let’s build something amazing.',
            img: '/images/service1.png'
        },
    ]

    return (
        <section className='py-100'>
            <div className="container mb-40 xl:mb-80">
                <h2 className='text-72 font-nimbus mb-12 3xl:mb-24 text-primary'>
                    Your Needs,  <b><i>Our Expertise</i></b>
                </h2>
                <p className='max-w-590'>
                    Your Vision, Our Expertise – Together, we bring ideas to life with tailored solutions that deliver real results. Let’s build something amazing.
                </p>
            </div>
            <div className="container max-w-1380">
                <div className="flex flex-col gap-20 md:gap-40 xl:gap-80">
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index} className='group pb-32 border-b border-disable-200 relative'>
                                    <h3 className='text-40 font-medium text-primary mb-12 xl:mb-24 group-hover:text-secondary transition_ctm'>{item.title}</h3>
                                    <p className='max-w-610 not-lg:mb-24'>{item.text}</p>
                                    <div className="relative lg:absolute w-365 aspect-[1.38/1] top-1/2 lg:-translate-y-1/2 right-0 lg:rotate-8 lg:opacity-0 transition_ctm group-hover:opacity-100">
                                        <Image src={item.img} alt={item.title} className='absolute size-full object-cover inset-0 rounded-3xl' width={370} height={270} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Experties