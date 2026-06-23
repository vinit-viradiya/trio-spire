'use client'
import 'swiper/css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';
import work1 from '@/public/images/work1.webp'
import work2 from '@/public/images/work2.webp'
import work3 from '@/public/images/work3.webp'
import Link from 'next/link';

const Work = () => {

    const data = [
        {
            image: work1,
            title: 'Ellitee SkinCare',
            text: 'A science-led skincare website focused on trust, education, and elegant product storytelling.'
        },
        {
            image: work2,
            title: 'Ellitee SkinCare',
            text: 'A science-led skincare website focused on trust, education, and elegant product storytelling.'
        },
        {
            image: work3,
            title: 'Ellitee SkinCare',
            text: 'A science-led skincare website focused on trust, education, and elegant product storytelling.'
        },
        {
            image: work1,
            title: 'Ellitee SkinCare',
            text: 'A science-led skincare website focused on trust, education, and elegant product storytelling.'
        },
        {
            image: work2,
            title: 'Ellitee SkinCare',
            text: 'A science-led skincare website focused on trust, education, and elegant product storytelling.'
        },
        {
            image: work3,
            title: 'Ellitee SkinCare',
            text: 'A science-led skincare website focused on trust, education, and elegant product storytelling.'
        },
    ]

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className='py-100'>
            <div className="container mb-40 xl:mb-80">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className='text-72 font-nimbus mb-12 3xl:mb-24 text-primary'>
                            Selected <b><i>Work</i></b>
                        </h2>
                        <p className='max-w-590'>
                            A glimpse into how we’ve helped businesses solve real problems through design and technology.
                        </p>
                    </div>
                    <div className="flex gap-24">
                        <button ref={prevRef} aria-label='Go to previous slide'>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.33337 20.0001H31.6667" stroke="#172A3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16.6667 11.6667L8.33337 20.0001" stroke="#172A3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16.6667 28.3333L8.33337 20" stroke="#172A3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button ref={nextRef} aria-label='Go to next slide'>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.6667 20.0001H8.33337" stroke="#172A3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M23.3334 28.3333L31.6667 20" stroke="#172A3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M23.3334 11.6667L31.6667 20.0001" stroke="#172A3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="work_slider_wrapper">
                <Swiper
                    slidesPerView={1.2}
                    centeredSlides={true}
                    loop={true}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 1.8,
                        },
                        992: {
                            slidesPerView: 2.2,
                        },
                        1200: {
                            slidesPerView: 2.5,
                        },
                    }}
                    modules={[Navigation]}
                    className="work_swiper"
                >
                    {
                        data.map((item, index) => {
                            return (
                                <SwiperSlide key={index} className='h-auto! group'>
                                    <div className="flex flex-col 3xl:gap-16 h-full justify-center transition_ctm">
                                        <div className="aspect-[1.59/1] relative mb-16 rounded-xl xl:rounded-3xl overflow-hidden">
                                            <Image src={item.image} className='absolute size-full inset-0 object-cover' alt={item.title} />
                                            <Link href='/ellitee' className="opacity-0 group-hover:opacity-100 transition_ctm absolute inset-0 grid place-items-center bg-black/30">
                                                <div className="absolute size-120 rounded-full border-2 border-white grid place-items-center text-white">View</div>
                                            </Link>
                                        </div>
                                        <h3 className='text-32 font-medium'>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Work