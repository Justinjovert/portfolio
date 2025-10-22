import React, { useEffect, useRef, useState, forwardRef } from 'react'
import { Element } from 'react-scroll'
import projects from '../data/Projects'
import external from '../assets/external.svg'
import github from '../assets/github.svg'


const ProjectSection = forwardRef((props, ref) => {

    const projectRef = useRef([])


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('swooshIn')
                    observer.unobserve(entry.target)
                }
            })
        }, {
            rootMargin: '-100px',
            threshold: 0.3
        })
        projectRef.current.forEach(ref => {
            if (ref) observer.observe(ref)
        })
    }, [])

    const Techs = ({ techStack }) => (
        techStack.map(tech => <span key={tech} className='inline-block bg-slate-700 font-medium rounded-[8px] box-border px-3 py-2 sm:px-5 sm:py-2  text-white mr-3 mb-2 cursor-default'>{tech}</span>)
    )

    return (
        <Element name={'projectSectionScroll'} ref={ref} className='w-full  p-8  relative z-10 flex items-center justify-center [font-family:var(--font-show)] box-border '>
            <section className='w-full max-w-[1200px]'>
                {
                    projects.map((project, index) => {
                        // alternate between each project
                        // IMG DET
                        // DET IMG
                        // IMG DET
                        return (
                            // Reference each project section for animation
                            <section ref={currentElement => projectRef.current[index] = currentElement} key={index} className={`flex flex-col ${index % 2 == 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} justify-between items-center gap-x-25 gap-y-5 my-40 opacity-0`}>
                                <div className='shadow-2xl overflow-hidden  min-w-[300px] max-w-[550px] min-h-60 max-h-70 aspect-video rounded-[12px] cursor-pointer transition:transform duration-200 ease-in-out hover:translate-y-[-3%]' >
                                    <img alt='Image Demo' src={project.webDemoImg} className='w-full h-full' />
                                </div>
                                <div className=' min-w-[300px] max-w-[550px] '>
                                    <div className='flex flex-col h-full justify-center'>
                                        <div>
                                            <h2 className='font-medium text-2xl sm:text-3xl text-gray-700'>{project.title}</h2>
                                            <div className='flex gap-x-4 gap-y-2 box-border mt-4 text-[15px] sm:text-[16px] '>
                                                <a href={project.liveDemo} target='_blank' className='bg-[#7b5ca9] font-semibold text-[#fcfcfc] w-fit  mt-1.5 px-3 py-2 sm:px-5 sm:py-2 rounded-[8px] flex items-center gap-x-1'>
                                                    Live
                                                    <div className='w-4 h-4 overflow-hidden'>
                                                        <img alt='external' className='w-full h-full ' src={external} />
                                                    </div>
                                                </a>
                                                <a href={project.githubRepo} target='_blank' className='text-white font-semibold w-fit mt-1.5 px-3 py-2 sm:px-5 sm:py-2 rounded-[8px] bg-slate-700 flex items-center gap-x-1 ' style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' }}>
                                                    GitHub
                                                    <div className='w-4 h-4 overflow-hidden'>
                                                        <img alt='external' className='w-full h-full ' src={github} />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <span className='mt-5 mb-6 leading-[1.7] tracking-wide text-left text-[16px] '>{project.description}</span>
                                        <div className='text-[15px] sm:text-[16px]'>
                                            <Techs techStack={project.techStack} />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )

                    })
                }
            </section>
        </Element>
    )
})

export default ProjectSection