import React from 'react'


export const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About me</p>
                    <h2 className='py-4'>Who am I</h2>
                    <p className='py-2 text-gray-600'>Not a developer like the others!</p>
                    <p className='py-2 text-gray-600'>I am a dynamic and passionate student, who is actively looking for an internship in computer science. I have a solid knowledge of the main programming languages ​​as well as an advanced understanding of computer systems and networks.</p>
                    <p className='py-2 text-gray-600'>I am very committed to learning new technologies and finding innovative solutions to IT problems. My attention to detail and my ability to quickly learn and apply new technologies make me the ideal candidate for an IT internship position.</p>
                    <p className='py-2 text-gray-600'>I have an analytical mind and a good sense of organization and task management. I am highly motivated and willing to work hard to achieve company goals. I am also able to work in a team and I know how to adapt quickly to changing work environments.</p>
                    <p className='py-2 text-gray-600'>I look forward to putting my skills and experience in IT at the service of a company and contributing to its success. </p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-200'>
                    <image className='rounded-xl' src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt='/'></image>
                </div>
            </div>
        </div>
    )
}

export default About