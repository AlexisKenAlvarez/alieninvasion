import Loader from "./Loader";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Start from '../../videos/Start.mp4'

const VideoPlayer = () => {

    // const [showVideo, setShow] = useState(false)
    const [loading, setLoading] = useState(true);
    const [trueLoading, setTrueLoading] = useState(true)
    const [start, setStart] = useState(false)

    const [ended, setEnded] = useState(false)

    const handleVideoLoaded = () => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    useEffect(() => {
        handleVideoLoaded()
    }, [])


    const handleTrue = () => {
        setTrueLoading(false)
    }

    const handleStart = () => {
        setStart(true)
    }

    const handleEnd = () => {
        console.log("VIDEO ENDED")
        setEnded(true)
    }



    if (start === false) {
        return (
            <div className="w-full h-screen cursor-pointer flex items-center justify-center bg-black" onClick={handleStart}>
                <motion.h1 animate={{ opacity: [0, 1] }} transition={{ repeat: Infinity, duration: 1, repeatType: "reverse", ease: "linear" }} className="font-orbit text-white">Click to Enter</motion.h1>
            </div>
        )
    }

    return (
        <section className="bg-black w-full h-screen">
            <AnimatePresence mode="wait">
                {
                    trueLoading ? <Loader key="LOADER1" /> : null
                }
            </AnimatePresence>

            {loading ?
                <Loader /> :
                <video
                    autoPlay
                    src={Start}
                    preload={'auto'}
                    onLoadedData={handleTrue}
                    onEnded={handleEnd}
                    className="w-full h-screen object-cover"
                />}

        </section>
    );
}

export default VideoPlayer;