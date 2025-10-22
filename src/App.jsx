
import { useEffect, useState, useRef } from 'react'
import './App.css'
import Hero from './components/Hero'
import ProjectSection from './components/ProjectSection'
import Footer from './components/Footer'

function App() {


    const [opacity, setOpacity] = useState(1)




    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY

            const fadeStart = 300
            const fadeEnd = 700

            let progress = (scrollY - fadeStart) / (fadeEnd - fadeStart)

            setOpacity(1 - progress);

        }

        handleScroll()

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])




    return (
        <section className='flex flex-col items-center w-full box-border bg-radial from-gray-300 to-[#fcfcfc] bg-fixed overflow-x-hidden overflow-y-auto'>
            <Hero />
            <ProjectSection />
            <Footer />
        </section>
    )
}

export default App
