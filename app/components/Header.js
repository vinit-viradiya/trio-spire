'use client'

import Link from 'next/link'
import React, { useRef, useState } from 'react'
import Logo from '@/public/images/logo.svg'
import Image from 'next/image'
import Button from './Button'
import { usePathname } from 'next/navigation'


const Header = () => {

    const links = [{ href: '/', text: 'Home' }, { href: '/', text: 'Services' }, { href: '/', text: 'Projects' }]
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    return (
        <header className='sticky py-15 sm:py-24 z-9999999'>
            <div className="container">
                <div className="flex items-center justify-between">
                    <Link href="/" className='not-sm:max-w-180'>
                        <Image src={Logo} loading="eager" alt='Triospire' />
                    </Link>
                    <div className="flex gap-24 items-center">
                        <nav className='main_navigation text-primary not-lg:hidden'>
                            <ul className='flex gap-40'>
                                {
                                    links.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <Link href={item.href} className={`hover:text-secondary ${pathname === item.href ? 'active' : ''}`}>{item.text}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                        <div className='not-sm:hidden'>
                            <Button props={{ href: "/" }}>
                                Contact Us</Button>
                        </div>
                        <button onClick={() => setIsOpen(true)} aria-label='Open primary menu'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3.99512" y="3.995" width="24.01" height="24.01" rx="5" stroke="#323232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12.6654 11.9983C12.6654 11.63 12.3668 11.3314 11.9985 11.3314C11.6301 11.3314 11.3315 11.63 11.3315 11.9983C11.3315 12.3667 11.6301 12.6653 11.9985 12.6653C12.3668 12.6653 12.6654 12.3667 12.6654 11.9983" stroke="#323232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20.6686 11.9983C20.6686 11.63 20.37 11.3314 20.0017 11.3314C19.6333 11.3314 19.3347 11.63 19.3347 11.9983C19.3347 12.3667 19.6333 12.6653 20.0017 12.6653C20.37 12.6653 20.6686 12.3667 20.6686 11.9983" stroke="#323232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12.6654 20.0017C12.6654 19.6333 12.3668 19.3347 11.9985 19.3347C11.6301 19.3347 11.3315 19.6333 11.3315 20.0017C11.3315 20.37 11.6301 20.6686 11.9985 20.6686C12.3668 20.6686 12.6654 20.37 12.6654 20.0017" stroke="#323232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20.6686 20.0017C20.6686 19.6333 20.37 19.3347 20.0017 19.3347C19.6333 19.3347 19.3347 19.6333 19.3347 20.0017C19.3347 20.37 19.6333 20.6686 20.0017 20.6686C20.37 20.6686 20.6686 20.37 20.6686 20.0017" stroke="#323232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <div onClick={() => setIsOpen(false)} className={`fixed inset-0 bg-black/5 transition_ctm ${isOpen ? "translate-x-0" : "translate-x-full"}`}></div>

                        {/* Menu */}
                        <aside
                            ref={menuRef}
                            className={`fixed top-0 right-0 h-full lg:h-fit w-screen max-w-515 bg-white transition_ctm p-24 rounded-bl-3xl flex flex-col gap-64 text-primary justify-between
                                ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                        >
                            <div className="flex items-center justify-between">
                                Surat, Gujarat 12:30 PM
                                <button onClick={() => setIsOpen(false)} aria-label='Close primary menu'>
                                    <svg width="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.7732 12.2267L12.2266 19.7734" stroke="#323232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M19.7732 19.7734L12.2266 12.2267" stroke="#323232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M16 28V28C9.372 28 4 22.628 4 16V16C4 9.372 9.372 4 16 4V4C22.628 4 28 9.372 28 16V16C28 22.628 22.628 28 16 28Z" stroke="#323232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <ul className='flex flex-col gap-24 text-72 font-nimbus'>
                                <li className='lg:hidden'><Link className='hover:text-secondary transition_ctm' href="/">Home</Link></li>
                                <li className='lg:hidden'><Link className='hover:text-secondary transition_ctm' href="/">Services</Link></li>
                                <li className='lg:hidden'><Link className='hover:text-secondary transition_ctm' href="/">Projects</Link></li>
                                <li><Link className='hover:text-secondary transition_ctm' href="/">About Us</Link></li>
                                <li><Link className='hover:text-secondary transition_ctm' href="/">Career</Link></li>
                            </ul>
                            <div className="flex justify-between items-end gap-32">
                                <Link href="mailto:business@trio-spire.com">business@trio-spire.com</Link>
                                <ul className='flex flex-col gap-12'>
                                    <li>
                                        <Link href="https://www.linkedin.com/" target='_blank' className='flex gap-16'>
                                            <span>LinkedIn</span>
                                            <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.9498 7.04999L7.0498 16.95" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M10 7L16.95 7.049L17 14" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.instagram.com/" target='_blank' className='flex gap-16'>
                                            <span>Instagram</span>
                                            <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.9498 7.04999L7.0498 16.95" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M10 7L16.95 7.049L17 14" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.behance.com/" target='_blank' className='flex gap-16'>
                                            <span>Behance</span>
                                            <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.9498 7.04999L7.0498 16.95" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M10 7L16.95 7.049L17 14" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.dribble.com/" target='_blank' className='flex gap-16'>
                                            <span>Dribbble</span>
                                            <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.9498 7.04999L7.0498 16.95" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M10 7L16.95 7.049L17 14" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.x.com/" target='_blank' className='flex gap-16'>
                                            <span>Twitter</span>
                                            <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.9498 7.04999L7.0498 16.95" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M10 7L16.95 7.049L17 14" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header