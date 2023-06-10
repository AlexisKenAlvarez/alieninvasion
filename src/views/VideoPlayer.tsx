import Loader from "./Loader";
import { motion } from "framer-motion";
import { useState } from "react";
import Start from '../../videos/Start.mp4'

const VideoPlayer = () => {

    const [showVideo, setShow] = useState(false)
    const [loading, setLoading] = useState(true);
    const [start, setStart] = useState(false)

    const handleVideoLoaded = () => {
        setLoading(false);
    };

    const handleStart = () => {
        setStart(true)
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
            {loading ?
                <Loader /> :
                null}

            <video
                autoPlay
                src={Start}
                preload={'auto'}
                onLoadedData={handleVideoLoaded}
            />
        </section>
    );
}

export default VideoPlayer;