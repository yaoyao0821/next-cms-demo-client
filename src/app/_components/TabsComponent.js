'use client';
import { useState, useEffect, useRef } from 'react';

const TabsComponent = ({ items }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    // const firstBtnRef = useRef();

    // useEffect(() => {
    //     firstBtnRef.current.focus();
    // }, []);


    // className="z-10 rounded-lg bg-no-repeat   sm:top-16 md:top-12 top-15
    // border-white border bg-white-transparent-r // bg-white/20


    return (
        <div className='center w-[80%] md:w-[80%] sm:w-[85%] lg:w-[75%] mt-8
            justify-center flex
            '>
            <div className='flex flex-col 
                gap-y-3 w-full
                 ' 
            >
                <div className='bg-blue-800/[80%] p-1  rounded-[50px] flex justify-between items-center gap-x-2 font-bold text-white'>
                {items.map((item, index) => (
                    <button
                        // ref={index === 0 ? firstBtnRef : null}
                        key={index}
                        onClick={() => setSelectedTab(index)}
                        className={`outline-none w-full p-2 hover:bg-blue-400 rounded-[50px] text-center focus:ring-2 focus:bg-white focus:text-blue-600 ${
                            selectedTab === index ? 'ring-2 bg-white text-blue-600' : ''
                        } `}
                    >
                        {item.title}
                    </button>
                ))}
                </div>

                <div className='bg-white p-3 rounded-xl mt-6 '>
                    {items.map((item, index) => (
                        <div key={index} className={`${selectedTab === index ? '' : 'hidden'}`}>
                            {item.content}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TabsComponent;