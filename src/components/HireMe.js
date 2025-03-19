import React from 'react'
import CircularText from "../../public/images/svgs/CircularText.svg"
import Image from 'next/image'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0'>
        <div className='w-48 md:w-24 h-auto items-center justify-center relative'>
            <Image 
              src={CircularText} 
              alt="Text" 
              width={192} 
              height={192} 
              className="dark:invert animate-spin-slow"
            />

            <Link 
              href="mailto:iam.dharunkumarsh@gmail.com" 
              className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light border border-solid border-dark w-20 h-20 rounded-full shadow-lg shadow-light font-semibold hover:bg-light hover:text-dark
              dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:w-12 md:h-12 md:text-[10px]'
            >
              Hire Me
            </Link>
        </div>
    </div>
  )
}

export default HireMe
