import React, { useState } from 'react'
import "../stylesheet/TextCursor.css"
import { Link } from 'react-scroll'


function NewLine({ lineNumber, line, indent }) {


    const [showTooltip, setShowTooltip] = useState(false)
    const [tooltipText, setTooltipText] = useState('Copy email')



    const handleCopied = (newString) => {
        navigator.clipboard.writeText(newString)
        setTooltipText('Copied!')
    }

    const handleTooltip = () => {
        setShowTooltip(true)
    }

    const handleTooltipLeave = () => {
        setShowTooltip(false)
        setTooltipText('Copy email')
    }

    const char = line.split(/(\s+|[{}[\](),;:]|"[^"]*")/g)

    /*                  hover:border-[rgb(61,75,95)] 
                        group-focus-within:bg-slate-900 
                        group-focus-within:border-[rgb(61,75,95)] */

    return (
        <>
            <div className='bg-[#5a5d7a] flex items-center group group-focus-within:relative outline-0  whitespace-nowrap' tabIndex={0}>
                <div className='min-w-14 max-w-14 text-right px-4 py-1 border-r-1 border-slate-700 text-white group-focus-within:text-white '>{lineNumber}</div>
                <div className={`pl-4 py-1 w-full border-transparent`} style={{ textIndent: `${2 * indent}rem` }}>
                    {line ?
                        <div className={`w-fit relative `}>
                            {
                                char.map((string, index) => {
                                    let color = "text-gray-100 dark:text-gray-300"

                                    // copy email
                                    if (/^"?(justinjoags@gmail.com)"?$/.test(string)) {
                                        color = "text-cyan-200 hover:text-cyan-400"
                                        const newString = string.replaceAll(`"`, '')
                                        return <span key={index} className='relative '>
                                            <span className='indent-0 absolute copyPositioning '>
                                                <span className={`bg-[#ededed] font-medium inline-block opacity-0 ${showTooltip ? 'copyTooltip' : ''}`}>{tooltipText}</span>
                                            </span>
                                            <span className=''>
                                                <span className='text-amber-200'>"</span>
                                                <span className={`${color} cursor-pointer`}
                                                    onMouseEnter={handleTooltip}
                                                    onMouseLeave={handleTooltipLeave}
                                                    onClick={() => handleCopied(newString)}>{newString}</span>
                                                <span className='text-amber-200'>"</span>
                                            </span>
                                        </span>
                                    }
                                    else if (/^"?(github.com\/Justinjovert)"?$/.test(string)) {
                                        color = "text-cyan-200 hover:text-cyan-400"
                                        const newString = string.replaceAll(`"`, '')
                                        return <span key={index}>

                                            <span className='text-amber-200'>"</span>
                                            <a href="https://github.com/justinjovert" target='_blank' className={`${color} cursor-pointer`}>{newString}</a>
                                            <span className='text-amber-200'>"</span>
                                        </span>
                                    }
                                    else if (/^"?(linkedin.com\/in\/justinjovert)"?$/.test(string)) {
                                        color = "text-cyan-200 hover:text-cyan-400"
                                        const newString = string.replaceAll(`"`, '')
                                        return <span key={index}>
                                            <span className='text-amber-200'>"</span>
                                            <a href="https://linkedin.com/in/justinjovert" target='_blank' className={`${color} cursor-pointer`}>{newString}</a>
                                            <span className='text-amber-200'>"</span>
                                        </span>
                                    }
                                    else if (/^\.\.\.$/.test(string)) {
                                        color = "text-cyan-200 hover:text-cyan-400 cursor-pointer  h-fit inline-block indent-0 bg-[#676a88] hover:bg-[#747799] rounded-[4px]"
                            
                                        return <Link key={index} to="projectSectionScroll" smooth={true} duration={500} >
                                            <span className='text-amber-200'>"</span>
                                            <span className={`${color} `}>{string}</span>
                                            <span className='text-amber-200'>"</span>
                                        </Link>
                                    }
                                    else if (/^".*"$/.test(string)) {
                                        color = "text-amber-200 " // strings
                                    }
                                    else if (/[{ }[\]]/.test(string)) {
                                        color = "text-yellow-300 " // brackets
                                    }
                                    else if (/[:,;]/.test(string)) {
                                        color = "text-gray-300 " // punctuation
                                    }
                                    else if (/^(const|let|var)$/.test(string)) {
                                        color = "text-purple-300" // keywords
                                    }
                                    else if (/^(name|location|education|skills|projects|contacts|email|github|linkedin)$/.test(string)) {
                                        color = "text-cyan-300" // keys
                                    }
                                    else if (/^(devProfile)$/.test(string)) {
                                        color = "text-cyan-400" //devProfile
                                    }

                                    return <span key={index} className={`${color}`}>{string}</span>
                                })
                            }
                            <div className='line-selected hidden group-focus-within:block'></div>
                        </div>
                        :
                        <div className={`w-fit relative`}>
                            <span className='-mr-2'>&nbsp;</span>
                            <div className='line-selected hidden group-focus-within:block'></div>
                        </div>
                    }
                </div>
            </div>
        </>


    )
}

export default React.memo(NewLine)


{/* <div className='bg-slate-950 min-h-4 flex'>
    <div className='bg-slate-900 px-4 border-r-1 border-slate-700'>3</div>
        <div className={`ml-4 indent-[2rem]`}>
            <span className='text-red-400'>
                location:
            </span>
            <span className='text-green-400 ml-2'>
                        "sampleLocation"
            </span>
        <span className='text-white'>,</span>
    </div>
</div> */}  