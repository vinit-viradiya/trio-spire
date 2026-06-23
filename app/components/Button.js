import Link from 'next/link'
import React from 'react'

const Button = ({ props, children }) => {
    return (
        <Link href={props.href} className={`flex gap-8  rounded-full py-11 px-24 w-fit text-lg font-medium items-center
         ${props.btnStyle == 'white' ? 'bg-white text-secondary' : 'bg-secondary text-white'}`}>
            <span>{children}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 17L19 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 7L19 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </Link>
    )
}

export default Button