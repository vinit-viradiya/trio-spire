'use client'

import React, { useEffect, useRef, useState } from 'react'

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [heights, setHeights] = useState([]);
    const contentRefs = useRef([]);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        setHeights(
            contentRefs.current.map((el) => el?.scrollHeight || 0)
        );
    }, []);

    const cat = ['General', 'Services', 'Process', 'Support']

    const data = [
        [
            {
                title: 'What types of services do you offer?',
                text: 'We offer end-to-end digital services including UX/UI design, web and app development, eCommerce, and long-term product support. Our work spans strategy, design, build, and post-launch improvement.'
            },
            {
                title: 'Who are your services best suited for?',
                text: 'We offer end-to-end digital services including UX/UI design, web and app development, eCommerce, and long-term product support. Our work spans strategy, design, build, and post-launch improvement.'
            }
        ],
        [
            {
                title: 'Do you work on new products as well as existing ones?',
                text: 'We offer end-to-end digital services including UX/UI design, web and app development, eCommerce, and long-term product support. Our work spans strategy, design, build, and post-launch improvement.'
            }
        ],
        [
            {
                title: 'How do projects typically start?',
                text: 'We offer end-to-end digital services including UX/UI design, web and app development, eCommerce, and long-term product support. Our work spans strategy, design, build, and post-launch improvement.'
            },
            {
                title: 'Can we hire you for a single service or ongoing support?',
                text: 'We offer end-to-end digital services including UX/UI design, web and app development, eCommerce, and long-term product support. Our work spans strategy, design, build, and post-launch improvement.'
            }
        ],
        [
            {
                title: 'How do you estimate timelines and costs?',
                text: 'We offer end-to-end digital services including UX/UI design, web and app development, eCommerce, and long-term product support. Our work spans strategy, design, build, and post-launch improvement.'
            }
        ]
    ]

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section className="py-100">
            <div className="container flex flex-col gap-40 xl:gap-80">
                <h2 className="text-72 font-nimbus text-center text-primary">
                    Frequently <b><i>Asked </i></b>Question
                </h2>

                <div className="overflow-x-auto mask-(--mask-1) pr-30 scrollbar-none">
                    <div className="flex text-base justify-center gap-12 xl:gap-24 min-w-max">
                        {cat.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`py-7 px-24 border rounded-full transition_ctm ${activeTab === index ? 'border-secondary bg-secondary text-white' : 'border-primary-2'}`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                <ul className="max-w-900 mx-auto flex flex-col gap-24 xl:gap-48">
                    {data[activeTab]?.map((item, index) => {
                        const isOpen = activeIndex === index

                        return (
                            <li
                                key={index}
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="flex justify-between items-center w-full gap-20 text-left text-primary-2 font-medium text-lg"
                                >
                                    <span>{item.title}</span>

                                    <svg
                                        className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-180'
                                            }`}
                                        width="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M17.7961 16.8843C18.1369 17.1998 18.6631 17.1998 19.0039 16.8843L19.2956 16.6143C19.6755 16.2624 19.6755 15.6616 19.2956 15.3098L12.6039 9.11387C12.2631 8.79833 11.7369 8.79833 11.3961 9.11387L4.70441 15.3099C4.32445 15.6617 4.32445 16.2625 4.70442 16.6144L4.99607 16.8844C5.33686 17.1999 5.86312 17.1999 6.2039 16.8844L12 11.5177L17.7961 16.8843Z"
                                            fill="#989898"
                                        />
                                    </svg>
                                </button>

                                <div
                                    className="overflow-hidden transition-all duration-500 ease-in-out"
                                    style={{
                                        height: isOpen ? `${heights[index]}px` : "0px",
                                    }}
                                >
                                    <div
                                        ref={(el) => {
                                            contentRefs.current[index] = el;
                                        }}
                                    >
                                        <p className="pt-15 xl:pt-30">{item.text}</p>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default FAQ