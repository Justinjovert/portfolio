import React, {  useState } from 'react'
import NewLine from './NewLine'

import download from '../assets/download.svg'

function Hero() {

    const linesArray = [
        ['', 0],
        ['const devProfile = {', 0],
        ['name: "Justin Jovert Aguillon",', 1],
        ['location: "Cagayan de Oro City, Misamis Oriental. Philippines",', 1],
        ['education: "BS Computer Science, Xavier University",', 1],
        ['skills: [', 1],
        ['"JavaScript",', 2],
        ['"ReactJs",', 2],
        ['"TailwindCSS"', 2],
        ['],', 1],
        ['projects: [', 1],
        ['"GitHubAPI",', 2],
        ['"CountryPage",', 2],
        ['...', 2],
        ['],', 1],
        ['contacts: {', 1],
        ['email: "justinjoags@gmail.com", ', 2],
        ['github: "github.com/Justinjovert",', 2],
        ['linkedin: "linkedin.com/in/justinjovert"', 2],
        ['}', 1],
        ['}', 0],
        ['', 0],
        ['', 0],
    ]


    const [showTooltip, setShowTooltip] = useState(false)
    const [curPos, setCurPos] = useState({ x: 0, y: 0 })

    const enterMouse = (e) => {
        setCurPos({
            x: e.clientX - 12,
            y: e.clientY
        })
        setShowTooltip(true)

    }



    return (
        <section className='box-border w-full  '>
            <section className='min-h-dvh flex items-center justify-center w-full flex-col p-8'>
                <div className='relative w-full max-w-[1024px] xl:max-w-[1200px]'>
                    <div className=' h-fit font-medium [font-family:var(--font-typeWriter)] text-2xl sm:text-4xl md:text-6xl'>
                        <span className='typeWriter w-auto text-[#7b5ca9] '>&gt;</span>
                        <span className='typeWriter w-fit firstTyping text-[#7b5ca9] '>Hi,</span>
                        <span className='typeWriter secondTyping text-[#7b5ca9] '>I'm Justin</span>
                    </div>
                </div>
                <div className='relative w-full font-medium text-slate-600 my-0 sm:my-2  xl:max-w-[1200px] max-w-[1024px] text-[10px] sm:text-[12px] md:text-[16px]'>
                    <span className=' pl-5 box-border sm:pl-6 md:pl-10   [font-family:var(--font-show)] flex'>
                        <div className='w-fit'>
                            <span className='firstStrip typeWriter border-r-9 border-transparent'>Still learning,</span>
                        </div>
                        <div className='w-fit'>
                            <span className='secondStrip typeWriter border-r-9 border-transparent'>still building,</span>
                        </div>
                        <div className='w-fit'>
                            <span className='thirdStrip typeWriter border-r-9 border-transparent'>one line at a time.</span>
                        </div>
                    </span>
                </div>
            </section>
            <section name="exampleScroll" className='-mt-0  flex justify-center  w-full items-center p-8 box-border [font-family:var(--font-code)] '>
                <div className='shadow-2xl w-full max-w-[1200px] max-h-[720px] bg-[#5a5d7a] dark:bg-blue-950 text-black dark:text-white flex flex-1 flex-col rounded-[14px] '>
                    <div className='text-[14px] sm:text-[14px] md:text-[16px] w-full h-12 bg-[#dbdbdb] p-4 rounded-tl-[12px] rounded-tr-[12px] flex justify-between items-center text-gray-700'>
                        <div className='flex items-center'>
                            <div className='rounded-[50%] bg-red-400 w-3 h-3 mr-2 box-border'></div>
                            <div className='rounded-[50%] bg-yellow-400 w-3 h-3 mr-2 box-border'></div>
                            <div className='rounded-[50%] bg-green-400 w-3 h-3 mr-4 box-border'></div>
                            <span>portfolio.js</span>
                        </div>
                        <div className='mx-4 border-l-2 border-[#c5c5c5] px-4 box-border cursor-pointer relative inline-block group'
                            onMouseEnter={enterMouse}
                            onMouseLeave={() => setShowTooltip(false)}>
                            <a href='https://drive.usercontent.google.com/u/1/uc?id=19CRCHVt0Skvj-CXpnA4TRaYpmSfzHbtI&export=download' className='font-medium hidden sm:block' download >Resume.pdf</a>
                            <a href='https://drive.usercontent.google.com/u/1/uc?id=19CRCHVt0Skvj-CXpnA4TRaYpmSfzHbtI&export=download' className='font-medium block sm:hidden w-4 h-4 overflow-hidden' download >
                            
                                <img alt='resume.pdf' className='w-full h-full' src={download} />
                            </a>
                            {
                                showTooltip &&
                                <span className='hoverResume hidden sm:block bg-[#ededed] group-hover:opacity-100 transitionOpacity '
                                    style={{
                                        position: "fixed",
                                        top: curPos.y,
                                        left: curPos.x,
                                        pointerEvents: "none",
                                    }}>
                                    Download my Resume
                                </span>
                            }

                        </div>
                    </div>
                    <div className='text-[0.9rem]/5 hover:cursor-text rounded-[10px] overflow-x-auto '>
                        {
                            linesArray.map((line, index) => {
                                return <NewLine key={index + 1} lineNumber={index + 1} line={line[0]} indent={line[1]} />
                            })
                        }
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Hero