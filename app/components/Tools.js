import React from 'react'

const Tools = () => {

    const data = [
        {
            icon: '/icons/next-js-icon.svg',
            title: 'Next.js'
        },
        {
            icon: '/icons/wordpress-icon.svg',
            title: 'WordPress'
        },
        {
            icon: '/icons/shopify-icon.svg',
            title: 'Shopify'
        },
        {
            icon: '/icons/react-icon.svg',
            title: 'React.js'
        },
        {
            icon: '/icons/figma-icon.svg',
            title: 'Figma'
        },
        {
            icon: '/icons/tailwind-icon.svg',
            title: 'Tailwind CSS'
        },
        {
            icon: '/icons/payload-icon.svg',
            title: 'Payload'
        },
    ]

    return (
        <section className='py-100 text-center'>
            <div className="container mb-40 xl:mb-80">
                <h2 className='text-72 font-nimbus mb-12 3xl:mb-24 text-primary'>
                    Tools We Use to <b><i>Build Great Products</i></b>
                </h2>
                <p className='max-w-800 mx-auto'>
                    We use modern, reliable technologies to craft fast, user-friendly digital experiences. Our stack is built for performance, scalability, and smooth development.
                </p>
            </div>
            <div className="container">
                <div className="flex gap-16 xl:gap-32 justify-center flex-wrap mx-auto max-w-992">
                    {
                        data.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="not-md:grow rounded-xl not-md:py-20 not-md:px-30 md:size-165 lg:size-210 bg-brand-100 border border-brand-400 flex flex-col justify-center items-center gap-8 md:rounded-full"
                                >
                                    <img src={item.icon} alt={item.title} className='size-32 lg:size-40' />
                                    <span>{item.title}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Tools