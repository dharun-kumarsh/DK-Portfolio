import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import certificate1 from '../../public/images/certificates/certificate1.jpeg'
import certificate2 from '../../public/images/certificates/certificate2.jpeg'
import certificate3 from '../../public/images/certificates/certificate3.jpeg'
import certificate4 from '../../public/images/certificates/certificate4.jpeg'

const FramerImage = motion(Image)

const CertificateCard = ({ img, certificateName, issuedBy, issueDate, onView }) => {
    return (
        <li className='relative col-span-1 w-full p-4 bg-light dark:bg-dark dark:border-light dark:text-light border border-solid border-dark rounded-2xl'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl' />

            <div className='w-full relative rounded-lg aspect-[16/9]'>
                <FramerImage
                    priority={true}
                    src={img}
                    alt={certificateName}
                    className='w-full h-full object-cover rounded-lg shadow-lg shadow-dark overflow-scroll'
                />
            </div>

            <h2 className='capitalize text-2xl font-bold my-2 xs:text-lg'>{certificateName}</h2>
            <p className='text-sm mb-2 font-semibold flex items-center gap-1'>
                Issued by: <span className='font-bold text-lg dark:text-primaryDark'>{issuedBy}</span>
            </p>
            <span className='font-semibold flex items-center gap-1'>
                Issued on: <span className='font-bold text-base text-primary dark:text-primaryDark'>{issueDate}</span>
            </span>
            <button
                onClick={() => onView(img, certificateName)}
                className='mt-4 w-full text-center bg-primary text-light dark:bg-primaryDark dark:text-dark px-4 py-2 rounded-lg font-semibold hover:bg-opacity-80'
            >
                View Certificate
            </button>
        </li>
    )
}

const CertificateModal = ({ isOpen, onClose, img, certificateName }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className='fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className='bg-white dark:bg-dark p-6 rounded-lg shadow-lg relative w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto'
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                    >
                        <h2 className='text-xl font-bold mb-4 text-center text-dark dark:text-light'>{certificateName}</h2>

                        <div className='w-full max-h-[70vh] overflow-y-auto rounded-lg'>
                            <Image
                                src={img}
                                alt={certificateName}
                                className='w-full h-auto rounded-lg'
                            />
                        </div>

                        <button
                            onClick={onClose}
                            className='absolute top-3 right-3 text-xl font-bold bg-red-500 text-white rounded-xl px-3 py-1 transition-all duration-300 hover:bg-red-600'
                        >
                            ✕
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}


const Certifications = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)

    const openModal = (img, certificateName) => {
        setSelectedCertificate({ img, certificateName })
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
        setSelectedCertificate(null)
    }

    return (
        <>
            <Head>
                <title>Dharun Kumar S H | Certifications</title>
                <meta name='description' content='A collection of my Certifications!' />
                <link rel='icon' href='/certifications.svg'/>
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
                <Layout className='pt-16'>
                    <AnimatedText text="Showcasing My Achievements!" className='mb-16 lg:!text-6xl sm:mb-8 sm:!text-5xl xs:!text-3xl' />

                    <ul className='grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8'>
                        <CertificateCard
                            certificateName="Gnanatamizh Course Certification"
                            issuedBy="MSEC"
                            issueDate="May 2024"
                            img={certificate1}
                            onView={openModal}
                        />
                        <CertificateCard
                            certificateName="Training Completion Certificate"
                            issuedBy="Skill Vertex"
                            issueDate="September 2024"
                            img={certificate2}
                            onView={openModal}
                        />
                        <CertificateCard
                            certificateName="Internship Completion Certificate"
                            issuedBy="Skill Vertex"
                            issueDate="October 2024"
                            img={certificate3}
                            onView={openModal}
                        />
                        <CertificateCard
                            certificateName="Flutter Workshop Certificate"
                            issuedBy="DevDynasty Club - MSEC"
                            issueDate="October 2024"
                            img={certificate4}
                            onView={openModal}
                        />
                    </ul>
                </Layout>
            </main>

            <CertificateModal
                isOpen={modalOpen}
                onClose={closeModal}
                img={selectedCertificate?.img}
                certificateName={selectedCertificate?.certificateName}
            />
        </>
    )
}

export default Certifications
