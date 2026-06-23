import Image from 'next/image'
import React from 'react'
import Service1 from '@/public/images/pro_3.webp'
import Service2 from '@/public/images/service5.png'
import Service3 from '@/public/images/service4.png'
import Service4 from '@/public/images/service3.png'
import Service5 from '@/public/images/service2.png'
import Service6 from '@/public/images/service1.png'
import Button from '@/app/components/Button'
import Link from 'next/link'

const Services = () => {

    const data = [
        {
            title: 'WordPress - WooCommerce',
            text: 'Helping startups and growing companies turn ideas into scalable websites, apps, and SaaS products—designed with clarity, built for performance.',
            img: Service1,
            btnText: 'Explore our services',
            link: '/'
        },
        {
            title: 'Shopify Store',
            text: 'Helping startups and growing companies turn ideas into scalable websites, apps, and SaaS products—designed with clarity, built for performance.',
            img: Service2,
            btnText: 'Explore our services',
            link: '/'
        },
        {
            title: 'Web Design',
            text: 'Helping startups and growing companies turn ideas into scalable websites, apps, and SaaS products—designed with clarity, built for performance.',
            img: Service3,
            btnText: 'Explore our services',
            link: '/'
        },
        {
            title: 'UI/UX Design',
            text: 'Helping startups and growing companies turn ideas into scalable websites, apps, and SaaS products—designed with clarity, built for performance.',
            img: Service4,
            btnText: 'Explore our services',
            link: '/'
        },
        {
            title: 'Web Development',
            text: 'Helping startups and growing companies turn ideas into scalable websites, apps, and SaaS products—designed with clarity, built for performance.',
            img: Service5,
            btnText: 'Explore our services',
            link: '/'
        },
        {
            title: 'App Design',
            text: 'Helping startups and growing companies turn ideas into scalable websites, apps, and SaaS products—designed with clarity, built for performance.',
            img: Service6,
            btnText: 'Explore our services',
            link: '/'
        },
    ]

    return (
        <section className='py-100'>
            <div className="container mb-40 xl:mb-80">
                <h2 className='text-72 font-nimbus mb-12 3xl:mb-24 text-primary'>
                    What <b><i>We Help </i></b>You Build
                </h2>
                <p className='max-w-590'>
                    From strategy and design to development and launch, we provide end-to-end digital services tailored to your business goals.
                </p>
            </div>
            <div className="container">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16 3xl:gap-32">
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index} className="rounded-xl 3xl:rounded-3xl p-16 3xl:p-32 border border-disable-200 h-450 sm:h-350 md:h-400 xl:h-500 3xl:h-600 relative z-1 overflow-hidden flex flex-col justify-between
                                 hover:bg-secondary hover:border-secondary transition_ctm group">
                                    <h3 className='text-32 font-medium text-primary-2 group-hover:text-white'>
                                        {item.title}
                                    </h3>
                                    <div className="mt-auto flex flex-col gap-32 opacity-0 group-hover:opacity-100 transition_ctm text-white">
                                        <p className='line-clamp-5'>{item.text}</p>
                                        <Button props={{ href: item.link, btnStyle: 'white' }}>{item.btnText}</Button>
                                    </div>
                                    <div className="group-hover:opacity-0 transition_ctm">
                                        <div className="absolute w-full max-w-490 aspect-[1.38/1] rotate-3 -right-15 bottom-0">
                                            <Image
                                                src={item.img}
                                                alt={item.title}
                                                fill
                                                sizes="(max-width: 1024px) 100vw, 50vw"
                                                className='rounded-2xl absolute size-full object-cover'
                                            />
                                        </div>
                                        <div className="-z-1 absolute top-20 -left-20 bg-white size-290 rounded-full shadow-1 blur-[200px]">
                                        </div>
                                        <div className="absolute inset-0 top-[75%] gradient-2"></div>
                                    </div>
                                    <Link href='/' className='absolute inset-0 opacity-0'>Services</Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services