import React from 'react'
import dashboard from '@/public/images/dashboard.webp'
import Image from 'next/image'

const Industries = () => {

    const data = [
        {
            title: 'Fintech',
            text: 'Lorem ipsum netus iaculis tempus vel eget arcu purus arcu a mauris quam ullamcorper sit maecenas rhoncus bibendum integer '
        },
        {
            title: 'Edtech',
            text: 'Lorem ipsum netus iaculis tempus vel eget arcu purus arcu a mauris quam ullamcorper sit maecenas rhoncus bibendum integer '
        },
        {
            title: 'Real Estate',
            text: 'Lorem ipsum netus iaculis tempus vel eget arcu purus arcu a mauris quam ullamcorper sit maecenas rhoncus bibendum integer '
        },
        {
            title: 'E-commerce',
            text: 'Lorem ipsum netus iaculis tempus vel eget arcu purus arcu a mauris quam ullamcorper sit maecenas rhoncus bibendum integer '
        },
        {
            title: 'Healthcare',
            text: 'Lorem ipsum netus iaculis tempus vel eget arcu purus arcu a mauris quam ullamcorper sit maecenas rhoncus bibendum integer '
        },
        {
            title: 'Enterprise',
            text: 'Lorem ipsum netus iaculis tempus vel eget arcu purus arcu a mauris quam ullamcorper sit maecenas rhoncus bibendum integer '
        },
        {
            title: 'Food, Travel & Leisure',
            text: 'Lorem ipsum netus iaculis tempus vel eget arcu purus arcu a mauris quam ullamcorper sit maecenas rhoncus bibendum integer '
        },
        {
            title: 'IT/Consulting',
            text: 'Lorem ipsum netus iaculis tempus vel eget arcu purus arcu a mauris quam ullamcorper sit maecenas rhoncus bibendum integer '
        },
    ]

    return (
        <section className="py-100">
            <div className="container">
                <div className="grid md:grid-cols-2 items-start gap-y-30">
                    <div className='md:sticky top-80'>
                        <h2 className='text-72 font-nimbus mb-12 3xl:mb-24 text-primary'>
                            Industries
                        </h2>
                        <p className='max-w-570 mb-40 xl:mb-80'>
                            We've worked with a wide array of industries and always eager to explore and innovate in new business domains.
                        </p>
                        <div className="aspect-[1.68/1] relative">
                            <Image src={dashboard} alt="dashboard" className="absolute inset-0 size-full object-cover rounded-xl xl:rounded-3xl" />
                        </div>
                    </div>
                    <div className="md:pl-30 xl:pl-60 3xl:pl-120 flex flex-col gap-100">
                        {
                            data.map((item, index) => {
                                return (
                                    <div key={index} className="flex flex-col gap-7 sm:gap-14 xl:gap-28">
                                        <h3 className='font-medium text-40 text-primary'>{item.title}</h3>
                                        <p className='line-clamp-4'>{item.text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Industries