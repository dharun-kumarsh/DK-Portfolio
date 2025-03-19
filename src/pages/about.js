import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from '../../public/images/profile/developer-pic-2.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 7000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);

    return <span ref={ref}></span>;
};

const About = () => {
    return (
        <>
            <Head>
                <title>Dharun Kumar S H | About</title>
                <meta name="description" content="About Dharun Kumar S H – Frontend Developer & Designer." />
                <link rel="icon" href="/about.svg" />
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Passion Fuels Purpose!" className="mb-16 lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8" />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Biography</h2>
                            <p className="my-4 font-medium">
                                Hi, I&apos;m Dharun Kumar S H, a dedicated and versatile Front-End Developer and UI/UX designer with a passion for creating beautiful,
                                functional, and user-centered digital experiences. With 4 months of professional experience, I have worked with a variety of technologies,
                                including HTML, CSS, React, Vue.js, Node.js, MySQL, and MongoDB.
                            </p>

                            <p className="my-4 font-medium">
                                I believe that design is more than just aesthetics—it&apos;s about solving problems and crafting intuitive,
                                seamless, and enjoyable experiences for users.
                            </p>

                            <p className="my-4 font-medium">
                                Whether I&apos;m working on a website or mobile app, my focus goes beyond aesthetics. I strive to solve problems and create intuitive,
                                seamless, and enjoyable user experiences. I bring a strong commitment to design excellence and user-centered thinking to every project and
                                look forward to contributing my skills and passion.
                            </p>
                        </div>

                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:border-light dark:bg-dark p-8 xl:col-span-4 md:order-1 md:col-span-8">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                            <Image priority={true} src={profilePic} alt="Dharun Kumar S H" className="w-full h-auto rounded-2xl"
                                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw" />
                        </div>

                        <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            <div className="flex flex-col items-end justify-center xl:items-center sm:text-center md:text-center xs:text-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={10} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    satisfied clients
                                </h2>
                            </div>

                            <div className="flex flex-col items-end justify-center xl:text-center sm:text-center md:text-center xs:text-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={5} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    projects completed
                                </h2>
                            </div>

                            <div className="flex flex-col items-end justify-center xl:text-center sm:text-center md:text-center xs:text-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={2} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    years of experience
                                </h2>
                            </div>
                        </div>
                    </div>

                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    );
};

export default About;
