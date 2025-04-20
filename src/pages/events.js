import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import event1 from '../../public/images/events/event1.jpeg'
import event2 from '../../public/images/events/event2.jpeg'
import event3 from '../../public/images/events/event3.jpeg'
import event4 from '../../public/images/events/event4.jpeg'
import event5 from '../../public/images/events/event5.jpg'
import event6 from '../../public/images/events/event6.jpg'
import event7 from '../../public/images/events/event7.jpg'

const FramerImage = motion(Image)

const EventCard = ({ img, eventName, hostedBy, eventDate, skills }) => {
    return (
        <li className='relative col-span-1 w-full p-4 bg-light dark:bg-dark dark:border-light dark:text-light border border-solid border-dark rounded-2xl'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl' />

            <div className='w-full relative overflow-hidden rounded-lg aspect-[16/9]'>
                <FramerImage
                    priority={true}
                    src={img}
                    alt={eventName}
                    className='w-full h-full object-cover rounded-lg shadow-lg shadow-dark'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
                />
            </div>

            <h2 className='capitalize text-2xl font-bold my-2 xs:text-lg'>{eventName}</h2>
            <p className='mb-2 flex items-center gap-1 font-semibold'>
                Hosted by: <span className='font-bold text-primary dark:text-primaryDark'>{hostedBy}</span>
            </p>
            <span className='font-semibold flex items-center gap-1'>
                Date: <span className='font-bold text-primary dark:text-primaryDark'>{eventDate}</span>
            </span>
            <div className='mt-4'>
                <h3 className='text-lg font-semibold'>Skills Acquired:</h3>
                <ul className='flex flex-wrap gap-2 mt-2'>
                    {skills.map((skill, index) => (
                        <li key={index} className='px-3 py-1 font-semibold bg-primary text-light dark:bg-primaryDark dark:text-dark rounded-md text-sm'>{skill}</li>
                    ))}
                </ul>
            </div>
        </li>
    )
}

const Events = () => {
    return (
        <>
            <Head>
                <title>Dharun Kumar S H | Events</title>
                <meta name='description' content='A collection of events I have participated in from my college' />
                <link rel='icon' href='/events.svg' />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
                <Layout className='pt-16'>
                    <AnimatedText text="Showcasing My Event Participation!" className='mb-16 lg:!text-6xl sm:mb-8 sm:!text-5xl xs:!text-3xl' />
                    <ul className='grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8'>
                        <EventCard
                            eventName="Hackintym'24 - A 30 hour hackathon"
                            hostedBy="MSEC - MSIIC"
                            eventDate="August 2024"
                            img={event1}
                            skills={["Problem Solving", "Team Collaboration", "Competitive Programming", "Project Management"]}
                        />
                        <EventCard
                            eventName="Flutter Workshop"
                            hostedBy="MSEC - DevDyansty Club"
                            eventDate="October 2024"
                            img={event2}
                            skills={["Flutter", "Authentication", "App Development", "Database Connection"]}
                        />
                        <EventCard
                            eventName="Game Fest"
                            hostedBy="MSEC - DevDynasty Club"
                            eventDate="November 2024"
                            img={event3}
                            skills={["Game Development", "Multiplayer Systems", "UI/UX Design", "Cloud Integration"]}
                        />
                        <EventCard
                            eventName="Bolt Hack"
                            hostedBy="MSEC - DevDynasty Club"
                            eventDate="February 2025"
                            img={event4}
                            skills={["AI Prompting", "Problem Solving", "UI/UX Design", "Team Work"]}
                        />
                        <EventCard
                            eventName="Hackintym'25 - A 30 hour hackathon"
                            hostedBy="MSEC - DevDynasty Club, Adyant Coding Club, AI Epoch Club"
                            eventDate="April 2025"
                            img={event5}
                            skills={["Problem Solving", "Team Collaboration", "Competitive Programming", "Project Management"]}
                        />
                        <EventCard
                            eventName="Paper Presentation"
                            hostedBy="Madras Institute of Technology, Anna University"
                            eventDate="April 2025"
                            img={event6}
                            skills={["Research", "Technical Writing", "Presentation Skills", "Domain Knowledge"]}
                        />
                        <EventCard
                            eventName="Code Quest"
                            hostedBy="Madras Institute of Technology, Anna University"
                            eventDate="April 2025"
                            img={event7}
                            skills={["Problem Solving", "Logical Reasoning", "Guessing with Clues", "Time Management", "Competitive Programming"]}
                        />


                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default Events
