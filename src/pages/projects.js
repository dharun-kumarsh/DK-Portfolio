import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import GithubIcon from '../../public/images/svgs/logo-github.svg'
import project1 from '../../public/images/projects/project1.png'
import project2 from '../../public/images/projects/project2.png'
import project3 from '../../public/images/projects/project3.png'
import project4 from '../../public/images/projects/project4.png'
import project5 from '../../public/images/projects/project5.png'
import project6 from '../../public/images/projects/project6.png'
import project7 from '../../public/images/projects/project7.png'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">

            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg shadow-dark shadow-lg'>
                <FramerImage
                    priority={true}
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>
            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
                    {type}
                </span>

                <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light sm:text-sm">
                    {title}
                </h2>

                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
                    {summary}
                </p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank">
                        <FramerImage
                            priority={true}
                            src={GithubIcon}
                            alt="Github"
                            className="w-10 dark:invert"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        />
                    </Link>
                    <Link
                        href={link}
                        target="_blank"
                        className="ml-4 rounded-lg bg-dark text-light p-2.5 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base">
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>

    )
}

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative shadow-2xl dark:bg-dark xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w[101%] sm:h-[102%] xs:rounded-[1.5rem]' />
            <FramerImage priority={true} src={img} alt='title' className='w-full h-auto rounded-lg shadow-lg shadow-dark' whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}
                sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw
                '
            />

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                <div className=' w-full mt-2 flex justify-between items-center'>
                    <Link href={link} target='_blank' className='rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold md:text-base dark:bg-light dark:text-dark '>Visit</Link>
                    <Link href={github} target='_blank'>
                        <Image priority={true} src={GithubIcon} alt='Github' className='w-10 dark:invert md:w-8' />
                    </Link>

                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Dharun Kumar S H | Projects</title>
                <meta name='description' content='Explore projects by Dharun Kumar S H' />
                <link rel='icon' href='/projects.svg' />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16 lg:!text-6xl sm:mb-8 sm:!text-5xl xs:!text-3xl' />

                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title={"AI Content Generator Application"}
                                img={project1}
                                summary={"Revolutionize our content creation with our AI-Powered app, delivering engaging and high-quality text in seconds."}
                                link={"https://ai-content-gen-freebird.vercel.app/"}
                                github={"https://github.com/dharun-kumarsh/ai-content-generator"}
                                type={"Full Stack Web Application"}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title={"Image Search Engine"}
                                img={project2}
                                link={"https://snap-seek-freebird.vercel.app/"}
                                github={"https://github.com/dharun-kumarsh/Image-Search-Engine"}
                                type={"Simple Web Application"}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title={"Kollywood Quiz App"}
                                img={project3}
                                link={"https://quiz-raja.netlify.app/"}
                                github={"#"}
                                type={"Simple Web Application"}
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title={"AI Resume Screening Application"}
                                img={project4}
                                summary={"Streamline your hiring process with our AI-powered resume screener that analyzes skills, matches job descriptions, and identifies top candidates instantly."}
                                link={"https://jobfit-resume-screener.onrender.com/"}
                                github={"https://github.com/dharun-kumarsh/IT-Warriorz"}
                                type={"Full Stack Web Application"}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title={"Amaran - Official Fan Website"}
                                img={project5}
                                link={"https://amaran-fan-hub.vercel.app/"}
                                github={"https://github.com/dharun-kumarsh/AmaranFanHub"}
                                type={"Web Application"}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title={"BMI Calculator App"}
                                img={project7}
                                link={"https://bmi-calculator-intern.netlify.app/"}
                                github={"https://github.com/dharun-kumarsh/bmi-calculator"}
                                type={"Web Application"}
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title={"E-Book Sharing Platform"}
                                img={project6}
                                summary={"Share and discover your favorite e-books with ease on our intuitive platform, connecting readers and fostering a vibrant literary community."}
                                link={"https://e-book-arena.vercel.app/"}
                                github={"https://github.com/dharun-kumarsh/Book-Arena"}
                                type={"Full Stack Web Application"}
                            />
                        </div>

                    </div>
                </Layout>
            </main>

        </>
    )
}

export default projects