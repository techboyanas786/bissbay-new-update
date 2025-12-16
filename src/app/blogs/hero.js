import Image from 'next/image'
import React from 'react'

function hero() {
    return (
        <div className='flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-8'>
            <div className='w-full md:flex-1 flex items-center justify-center order-1 md:order-none' data-aos="fade-right">
                <div className='p-0 md:p-6'>
                    <h1 className='pb-4 md:pb-6'>Bissbay Blog</h1>
                    <h4 className='!text-[#5C6371] leading-relaxed'>Bringing you the latest trends and strategies for accelerating growth and strengthening B2B marketing.</h4>
                </div>
            </div>
            <div className='w-full md:h-[400px] md:flex-1 flex items-center justify-center order-2 md:order-none' data-aos="fade-left">
                <Image unoptimized src="/images/BlogHero.png" width={400} height={400} alt="hero" className="w-full h-full object-contain" />
            </div>
        </div>
    )
}

export default hero