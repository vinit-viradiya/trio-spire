import Image from 'next/image'
import React from 'react'

const Img = () => {
  return (
    <section className='py-100'>
      <div className="container">
        <div className="aspect-2/1 relative">
          <Image src='/images/service-img.webp' className='absolute inset-0 size-full object-cover rounded-xl xl:rounded-3xl' width={1920} height={900} alt='Service image' />
        </div>
      </div>
    </section>
  )
}

export default Img