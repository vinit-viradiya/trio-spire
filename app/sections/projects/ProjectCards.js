import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { projects } from '@/lib/projects'

const ProjectCards = () => {

    return (
        <section className='py-100'>
            <div className="container flex flex-col gap-40 xl:gap-80">
                {
                    projects.map((item) => {
                        return (
                            <div key={item.id}
                                className="grid md:grid-cols-2 border border-disable-200 rounded-xl xl:rounded-3xl overflow-hidden xl:gap-40 bg-white sticky top-30">
                                <div className='p-24 xl:p-36'>
                                    <div className="flex flex-col gap-10 xl:gap-40 divide-y divide-disable-200 mb-0 xl:mb-100">
                                        <div className='flex flex-col gap-8 xl:gap-16 pb-14 xl:pb-28'>
                                            <h2 className='text-32 font-medium text-primary-2'>{item.title}</h2>
                                            <p>{item.description}</p>
                                        </div>
                                        {
                                            item.info.map((item, index) => {
                                                return (
                                                    <div key={index} className='flex flex-col lg:gap-8 xl:gap-16 pb-14 xl:pb-28'>
                                                        <h3>{item.title}</h3>
                                                        <h4>{item.text}</h4>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <Link href={item.url} className='flex gap-8 items-center'>
                                        <span>See Project Details</span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 12H5" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M14 17L19 12" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M14 7L19 12" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Link>
                                </div>
                                <div className='relative min-h-300'>
                                    <Image src={item.img} alt='Service 1' width={730} height={730} className='absolute size-full inset-0 object-cover' />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ProjectCards