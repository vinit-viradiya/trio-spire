import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '@/public/images/logo.svg'
import Instagram from '@/public/icons/instagram.svg'
import Facebook from '@/public/icons/facebook.svg'

const Footer = () => {
  return (
    <footer className='border-t border-gray-300 py-64'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex justify-between gap-100">
          <div className='flex flex-col justify-between'>
            <Link href="/">
              <Image src={Logo} alt='Triospire' />
            </Link>
            <p className='font-nimbus text-28 italic font-bold'>
              Built with intention, <br /> Designed to last.
            </p>
          </div>
          <nav>
            <ul className='flex flex-col gap-16 3xl:gap-32 text-primary'>
              <li><Link href="/">Services</Link></li>
              <li><Link href="/">Projects</Link></li>
              <li><Link href="/">About us</Link></li>
              <li><Link href="/">Contact us</Link></li>
              <li><Link href="/">Career</Link></li>
            </ul>
          </nav>
          <div className='flex flex-col justify-between'>
            <p>
              SH-403 Shiven Shoppers, <br /> Adajan DN, Surat - 395009, <br /> Gujarat, India
            </p>
            <Link href="mailto:business@trio-spire.com" className='text-secondary underline'>
              business@trio-spire.com
            </Link>
          </div>
          <div className='flex flex-row-reverse sm:flex-col md:flex-row md:items-end lg:flex-col justify-between'>
            <a href='#' className="flex items-center gap-12 xl:gap-24 font-medium">
              <span>Back to Top</span>
              <div className="bg-primary p-8 xl:p-13 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.99902 10L12 4.99902L17.001 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
            <div className="flex gap-8 xl:gap-16">
              <Link href="mailto:business@trio-spire.com" className='text-secondary underline'>
                <Image src={Instagram} alt='Instagram account' />
              </Link>
              <Link href="mailto:business@trio-spire.com" className='text-secondary underline'>
                <Image src={Facebook} alt='Facebook account' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer