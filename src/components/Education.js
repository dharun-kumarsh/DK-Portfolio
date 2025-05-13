import React, { useRef } from 'react'
import { useScroll } from 'framer-motion'
import { motion } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref} />
        <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 4.5, type: 'spring' }}>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg dark:text-primaryDark'>{type}</h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'>{info}</p>
        </motion.div>
    </li>
}

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );
    return (
        <div className='my-64'>
            <h2 className='font-bold text-7xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Education</h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        type={"B . Tech In Information Technology"}
                        place={"Meenakshi Sundararajan Engineering College"}
                        time={"2023 - 2027"}
                        info={"I am currently pursuing a Bachelor of Technology in Information Technology at Meenakshi Sundararajan Engineering College. I have studied Python, C, and Java, along with Web Development, React.js, Node.js, and MongoDB. This diverse skill set has given me a strong foundation in both programming and Frontend development."}
                    />

                    <Details
                        type={"Web Development Internship"}
                        place={"Adaovi"}
                        time={"08 January 2024 - 08 February 2024"}
                        info={"I am currently doing an internship at Adaovi where I am working on a Full Stack Web Development project. I am using Next.js for the frontend and Node.js for the backend. I am also learning about RESTful APIs and how to use them to fetch data from the backend."}
                    />

                    <Details
                        type={"Full Stack Web Development Internship"}
                        place={"Micro IT"}
                        time={"10 May 2025 - 15 June 2025"}
                        info={"Having gained experience in Full Stack Web Development at Adaovi, where I worked with React.js for the frontend and Node.js for the backend, and learned about Supabase, I am now pursuing a Full Stack Web Development internship at Micro IT from 10 May 2025 to 15 June 2025."}
                    />

                    <Details
                        type={"App Developement Internship"}
                        place={"Skill Vertex"}
                        time={"05 September 2024 - 05 October 2024"}
                        info={"I chose to do an internship in Flutter and Web Development. I worked on a project that involved creating a responsive website for a company called Skill Vertex. I also worked on a project that involved creating a responsive mobile application for a company called Skill Vertex."}
                    />

                    <Details
                        type={"High School Student"}
                        place={"Anita Methodist Matriculation Higher Secondary School"}
                        time={"2014 - 2023"}
                        info={"I completed my high school education at Anita Methodist Matriculation Higher Secondary School. I have studied Python, HTML, CSS, and MySQL, which helped me build a foundational understanding of programming and web development."}
                    />

                    <Details
                        type={"Primary School Student"}
                        place={"Doveton Boys Matriculation Higher Secondary School"}
                        time={"2011 - 2014"}
                        info={"I completed my primary education at Doveton Boys Matriculation Higher Secondary School.During my time there, I have learned Spoken English, Painting, Drawing, and Handwriting, which helped develop my creativity and communication skills."}
                    />

                </ul>
            </div>

        </div>
    )
}

export default Education