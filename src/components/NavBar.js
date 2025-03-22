import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';
import { SunDim, MoonStars } from "@phosphor-icons/react";

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[2.5px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300
                ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            router.prefetch(href);
        }
    }, [router, href]);

    const handleClick = () => {
        toggle();
        router.push(href, undefined, { shallow: true });
    };

    return (
        <button className={`${className} relative group text-light dark:text-dark`} onClick={handleClick}>
            {title}
            <span className={`h-[2.5px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300
                ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </button>
    );
};

const NavBar = React.memo(() => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>
            <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav>
                    <CustomLink href="/" title="Home" className='mx-4' />
                    <CustomLink href="/about" title="About" className='mx-4' />
                    <CustomLink href="/projects" title="Projects" className='mx-4' />
                    <CustomLink href="/events" title="Events" className='mx-4' />
                    <CustomLink href="/certifications" title="Certifications" className='mx-4' />

                </nav>
                <nav className='flex items-center justify-center flex-wrap'>
                    {[
                        { href: "https://x.com/DharunSH0302006", src: "/images/svgs/twitter.svg", alt: "Twitter" },
                        { href: "https://github.com/dharun-kumarsh", src: "/images/svgs/logo-github.svg", alt: "Github", className: "dark:invert" },
                        { href: "https://www.linkedin.com/in/dharun-kumar-s-h-0362702a2/", src: "/images/svgs/linkedin.svg", alt: "Linkedin" },
                        { href: "https://in.pinterest.com/techpro03dharun/", src: "/images/svgs/pinterest.svg", alt: "Pinterest", className: "dark:bg-light rounded-full" },
                        { href: "https://dribbble.com/iam_dharun", src: "/images/svgs/dribbble-icon.svg", alt: "Dribbble" },
                    ].map(({ href, src, alt, className = "" }, index) => (
                        <motion.a key={index} className='w-6 mx-3' whileTap={{ scale: 0.9 }} whileHover={{ y: -3 }} href={href} target="_blank">
                            <Image src={src} width={24} height={24} alt={alt} className={className} />
                        </motion.a>
                    ))}

                    <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className="ml-3 flex items-center justify-center rounded-full p-1">
                        <span className="w-6 h-6">
                            {mode === "dark" ? <SunDim size={24} weight="fill" /> : <MoonStars size={24} weight="fill" />}
                        </span>
                    </button>
                </nav>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                    animate={{ scale: 1, opacity: 1 }}
                    className='min-w-[70vw] flex flex-col gap-4 justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/90 rounded-lg backdrop-blur-sm py-32'
                >
                    <nav className='flex items-center flex-col gap-4 justify-center'>
                        <CustomMobileLink href="/" title="Home" toggle={handleClick} />
                        <CustomMobileLink href="/about" title="About" toggle={handleClick} />
                        <CustomMobileLink href="/projects" title="Projects" toggle={handleClick} />
                        <CustomMobileLink href="/events" title="Events" toggle={handleClick} />
                        <CustomMobileLink href="/certifications" title="Certifications" toggle={handleClick} />
                    </nav>
                    <nav className='flex items-center justify-center flex-wrap'>
                        {[
                            { href: "https://x.com/DharunSH0302006", src: "/images/svgs/twitter.svg", alt: "Twitter" },
                            { href: "https://github.com/dharun-kumarsh", src: "/images/svgs/logo-github.svg", alt: "Github", className: "dark:invert-0 invert" },
                            { href: "https://www.linkedin.com/in/dharun-kumar-s-h-0362702a2/", src: "/images/svgs/linkedin.svg", alt: "Linkedin" },
                            { href: "https://in.pinterest.com/techpro03dharun/", src: "/images/svgs/pinterest.svg", alt: "Pinterest", className:"dark:bg-light rounded-full"},
                            { href: "https://dribbble.com/iam_dharun", src: "/images/svgs/dribbble-icon.svg", alt: "Dribbble" },
                        ].map(({ href, src, alt, className = "" }, index) => (
                            <motion.a key={index} className='w-6 mx-3' whileTap={{ scale: 0.9 }} whileHover={{ y: -3 }} href={href} target="_blank">
                                <Image src={src} width={24} height={24} alt={alt} className={className} />
                            </motion.a>
                        ))}

                        <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className="ml-3 flex items-center justify-center rounded-full p-1">
                            <span className="w-6 h-6 transition-all duration-300">
                                {mode === "dark" ? <SunDim size={24} weight="fill" className='dark:invert invert-0' /> : <MoonStars size={24} weight="fill" />}
                            </span>
                        </button>
                    </nav>
                </motion.div>
            )}

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    );
});

NavBar.displayName = "NavBar";

export default NavBar;
