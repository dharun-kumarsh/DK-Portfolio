import Layout from '../components/Layout'
import Image from 'next/image'
import AnimatedText from '../components/AnimatedText'
import Link from 'next/link'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import LinkArrow from '../../public/images/svgs/external-link.svg'
import HireMe from '@/components/HireMe'
import LightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
    <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt='Dharun Kumar S H' className='w-full h-auto lg:hidden md:inline-block md:w-full'
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw
              '
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
              <p className='my-4 text-base font-medium md:text-md sm:text-xs'>
                As a skilled PERN-Stack Developer, I am dedicated to turning ideas into innovative Web Applications. Explore my latest projects and articles, showcasing my expertise in React.js and Web Development.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link
                  className='group flex items-center bg-dark dark:bg-light dark:text-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:border-light hover:dark:bg-dark hover:dark:text-light md:p-2 md:px-4 md:text-base'
                  href="/DK Resume.pdf"
                  target='_blank'
                >
                  Resume
                  <Image
                    src={LinkArrow}
                    alt="Arrow"
                    className="w-6 ml-2 invert dark:invert-0 group-hover:invert-0 dark:group-hover:invert md:text-base"
                    width={24}
                    height={24}
                  />

                </Link>
                <Link className='ml-4 text-lg font-medium capitalize text-dark hover:underline underline-offset-2 dark:text-light' href="mailto:iam.dharunkumarsh@gmail.com" target='_blank'>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={LightBulb} alt='Dharun Kumar S H' className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
