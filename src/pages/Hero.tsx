import { AnimatePresence } from "framer-motion";
import VideoPlayer from "../views/VideoPlayer";
import { useState } from 'react'

import HeroIndex from "../views/Hero/HeroIndex";
import HeroAbout from "../views/Hero/HeroAbout";

const Hero = () => {

    const [ended, setEnded] = useState(false)

    const handleEnded = () => {
        setEnded(true)
    }

    return (
        <section className="">
            <AnimatePresence>
                {ended ?
                    <>
                        <HeroIndex key="HeroIndex1" />
                        <HeroAbout />

                    </>
                    : <VideoPlayer key="VIDEOENDED" handleEnded={handleEnded} />}
            </AnimatePresence>



        </section>
    );
}

export default Hero;