import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { AiFillGitlab } from 'react-icons/ai'
import Link from 'next/link'


export const Main = () => {
    return (
        <div id='main' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600 mt-6'>Lets build something together!</p>

                    <h1  className='py-4 text-gray-700'> Hi, my name is <span className='text-[#5651e5]'>Antoine</span></h1>
                    <h1 className='py-4 text-gray-700'>
                        A futur software engineer
                    </h1>
                    <p className='py-4 text-gray-600'>
                        I am currently a working student looking to improve my skills in web development as an Intern or Junior Web Developer.
                        I am ready to use my skills and
                        my passion for advancing a company's mission.
                        Being a technology expert, I am able to create quality websites and mobile applications.

                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-200'>
                            <Link href='https://www.linkedin.com/in/antoine-godin-53724b23b/'><FaLinkedin /></Link>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-200'>
                            <Link href='https://github.com/Lowcol'><FaGithub /></Link>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-200'>
                            <Link href='https://gitlab.com/lowcol'><AiFillGitlab /></Link>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-200'>
                            <Link href='/#contact'><AiOutlineMail /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main