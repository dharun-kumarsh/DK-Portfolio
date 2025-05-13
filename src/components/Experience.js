import React, { useRef } from 'react'
import { useScroll } from 'framer-motion'
import { motion } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col'>
        <LiIcon reference={ref} />
        <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 4.5, type: 'spring' }}>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink} target='_blank' className='text-primary dark:text-primaryDark capitalize'>@ {company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm '>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>{work}</p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );
    return (
        <div className='my-64'>
            <h2 className='font-bold text-7xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Experience</h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        position={"App Development Intern"}
                        company={"Skill Vertex"}
                        companyLink={"https://www.skillvertex.com/"}
                        time={"05 Sep 2024 - 05 Oct 2024"}
                        address={"14th Cross Rd, HSR Layout, Bengaluru"}
                        work={"Contributed to the development of new features for a mobile application, enhancing user experience and functionality. Focused on improving app performance, UI/UX design, and implementing data visualization tools to provide insightful analytics."}
                    />

                    <Details
                        position={"8 Hour Hackathon"}
                        company={"SA Engineering College"}
                        companyLink={"https://www.saec.ac.in/"}
                        time={"18ᵗʰ October 2024"}
                        address={"Avadi Main Road , Thiruverkadu"}
                        work={"Participated in an 8-hour hackathon at SA Engineering College, focusing on rapid prototyping and problem-solving. Collaborated within a team to conceptualize, design, and develop a functional prototype within the given timeframe. Focused on [Specify the area of focus if available, e.g., mobile app development, web application, data analysis, etc.], demonstrating proficiency in [Mention specific skills or technologies used, e.g., UI/UX design, Python, React, etc.]."}
                    />

                    <Details
                        position={"SIH by Government of India"}
                        company={"Government of India"}
                        companyLink={"https://www.sih.gov.in/"}
                        time={"June 2024"}
                        address={"Varies according to the problem statement chosen."}
                        work={"Participated in the Smart India Hackathon (SIH) 2024, a national-level hackathon organized by the Government of India. Collaborated within a team to develop an innovative solution for a problem statement provided by [Specify the problem statement's domain, e.g., healthcare, agriculture, education, etc.]."}
                    />

                    <Details
                        position={"30 Hour Hackathon"}
                        company={"Meenakshi Sundararajan Engineering College"}
                        companyLink={"https://msec.edu.in/"}
                        time={"08 Aug 2024 - 09 Aug 2024"}
                        address={"Kodambakkam, Chennai - 24"}
                        work={"Participated in a 30-hour hackathon, collaborating with a team to develop an innovative solution. Focused on implementing new features, optimizing performance, and enhancing user experience within the given challenge constraints."}
                    />
                </ul>
            </div>

        </div>
    )
}

export default Experience