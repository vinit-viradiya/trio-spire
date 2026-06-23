'use client'
import React, { useRef } from 'react'
import avatar from '@/public/images/avatar.png'
import 'swiper/css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const Testimonials = () => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const data = [
        {
            text: '“TrioSpire brought clarity to our product from the very beginning. Their design thinking, attention to detail, and structured development process helped us move faster without sacrificing quality. The final product was stable, intuitive, and ready to scale.”',
            image: avatar,
            auther: 'Harvey Spector',
            designation: 'Senior Partner, Pearson Hardman',
        },
        {
            text: '“TrioSpire brought clarity to our product from the very beginning. Their design thinking, attention to detail, and structured development process helped us move faster without sacrificing quality. The final product was stable, intuitive, and ready to scale.”',
            image: avatar,
            auther: 'Harvey Spector',
            designation: 'Senior Partner, Pearson Hardman',
        },
    ]

    return (
        <section className="py-100 bg-brand-100">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-40 xl:gap-80">
                    <div className='lg:col-span-4 xl:col-span-5 2xl:col-span-6'>
                        <h2 className='text-72 font-nimbus mb-12 3xl:mb-24 text-primary'>
                            From <b><i>Our Clients</i></b>
                        </h2>
                        <p className='max-w-590 mb-12 3xl:mb-24'>
                            Here’s what teams have shared after working with TrioSpire on their digital products.
                        </p>
                        <div className="flex gap-24">
                            <button ref={prevRef} aria-label='Go to previous slide' >
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.33337 20.0001H31.6667" stroke="#172A3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16.6667 11.6667L8.33337 20.0001" stroke="#172A3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16.6667 28.3333L8.33337 20" stroke="#172A3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button ref={nextRef} aria-label='Go to next slide' >
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M31.6667 20.0001H8.33337" stroke="#172A3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M23.3334 28.3333L31.6667 20" stroke="#172A3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M23.3334 11.6667L31.6667 20.0001" stroke="#172A3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="lg:col-span-8 xl:col-span-7 2xl:col-span-6 testi_slider_wrapper text-primary">
                        <Swiper
                            slidesPerView={1}
                            loop={true}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }}
                            modules={[Navigation]}
                            className="testi_swiper"
                        >
                            {
                                data.map((item, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div>
                                                <p className='text-28 xl:text-32 font-medium mb-32 xl:mb-64'>{item.text}</p>
                                                <div className="flex gap-24">
                                                    <div className="size-80 relative shrink-0">
                                                        <Image src={item.image} alt={item.auther} className='absolute inset-0 size-full object-cover rounded-full' />
                                                    </div>
                                                    <div className='flex flex-col justify-center'>
                                                        <span className='text-24 font-medium'>{item.auther}</span>
                                                        <span>{item.designation}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials