import React from 'react'

const Facts = () => {

    const data = [
        { text: 'Projects delivered', number: '50', suffix: '+' },
        { text: 'Years of experience', number: '08', suffix: '+' },
        { text: 'Industries served', number: '07', suffix: '+' },
        { text: 'Client retention', number: '90', suffix: '%' },
    ]

    return (
        <section className='bg-brand-100 py-100'>
            <div className="container">
                <div className='text-160 text-primary font-bold font-nimbus italic sm:ml-[20%]'>
                    We are <span className='sm:hidden'>TrioSpire</span>
                </div>
                <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-20 2xl:gap-32 -my-10 sm:-my-20 4xl:-my-37">
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index} className="bg-white p-16 2xl:p-24 rounded-xl xl:rounded-3xl flex flex-col relative xl:aspect-[.79/1]">
                                    <span className='text-180 font-bold font-nimbus text-gray-100 leading-[.8]'>{index + 1}</span>
                                    <div className="p-8 mt-auto flex flex-col gap-12">
                                        <h3 className='text-primary text-24'>{item.text}</h3>
                                        <span className='text-72 font-nimbus italic font-bold text-secondary'>{item.number}{item.suffix}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='text-160 text-primary font-bold font-nimbus italic mr-[20%] w-fit ml-auto not-sm:hidden'>
                    TrioSpire
                </div>
            </div>
        </section>
    )
}

export default Facts