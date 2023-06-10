import spinning from '../../../videos/spinning.mp4'
import { SiTwitter } from 'react-icons/si'
import { FaTelegramPlane, FaFacebookF } from 'react-icons/fa'
import Nav from '../../components/Nav';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const HeroIndex = () => {

    const [pos, setPos] = useState("absolute")

    useEffect(() => {
        setTimeout(() => {
            setPos("relative")
        }, 1500);
    }, [])


    return (
        <section className={`text-white w-full h-screen px-10 overflow-hidden origin-center mx-auto ${pos} top-0 left-0`} key="HeroIndex">


            <motion.div initial={{ maxWidth: "50%" }} animate={{ maxWidth: "0%" }} transition={{ transformOrigin: "left", duration: 1.5, delay: 1, ease: [0.16, 0.77, 0.47, .97] }} className="z-[50] bg-black pointer-events-none absolute w-[50vw] h-screen left-0 top-0 origin-left"></motion.div>

            <motion.div initial={{ maxWidth: "50%" }} animate={{ maxWidth: "0%" }} transition={{ transformOrigin: "right", duration: 1.5, delay: 1, ease: [0.16, 0.77, 0.47, .97] }} className="z-[50] bg-black pointer-events-none absolute  w-[50vw] h-screen right-0 top-0 origin-right"></motion.div>


            <video
                autoPlay
                muted
                loop
                src={spinning}
                preload={'auto'}
                className="w-full h-screen object-cover z-0 absolute top-0 left-0"
            />

            <div className="w-full h-full bg-black/70 z-10 absolute top-0 left-0"></div>
            <Nav />

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="w-fit h-fit -rotate-90 absolute right-0 -mr-24 bottom-0 z-10 top-0 my-auto items-center gap-x-4 sm:flex hidden">
                <h1 className="font-orbit tracking-widest text-sm">INVASION HAS BEGUN</h1>
                <div className="w-20 h-[1px] bg-white z-10 bottom-5 right-5"></div>
            </motion.div>


            <div className="relative max-w-[1500px] mx-auto h-screen z-20 overflow-hidden flex flex-col">
                <h3 className="font-orbit text-sm tracking-[1.5rem] absolute bottom-10 z-10 left-5 sm:block hidden">ALIEN</h3>

                <div className="flex text-xl gap-x-6 absolute bottom-10 right-5 items-center">
                    <h2 className="font-orbit text-sm">FOLLOW</h2>
                    <FaFacebookF className="cursor-pointer hover:scale-[1.1]" />
                    <SiTwitter className="cursor-pointer" />
                    <FaTelegramPlane className="cursor-pointer" />
                </div>

                <div className="font-orbit sm:text-7xl text-5xl mt-20 flex-shrink-0">
                    <h1 className="tracking-widest">ALIEN INVASION</h1>
                    <p className="font-orbit sm:text-sm text-white/60 tracking-wider mt-2 text-[12px] leading-4 sm:leading-0">Across the vast expanse of space, an armada of extraterrestrial ships descended upon Earth, their ominous presence casting a dark shroud over the planet, while humanity stood united, determined to defend their home against the impending alien invasion.</p>
                </div>

                <div className="flex items-end gap-x-4 px-10 sm:mt-16 mt-10 sm:flex-row flex-col-reverse gap-y-3 flex-shrink-0">
                    <div className="flex items-center gap-x-2">
                        <h1 className="w-5 h-5 flex items-center justify-center font-orbit">01</h1>
                        <div className="w-20 h-[1px] bg-white/70"></div>
                        <div className="flex font-orbit gap-x-3">
                            <h2 className="cursor-pointer">&lt;</h2>
                            <h2 className="cursor-pointer">&gt;</h2>
                        </div>
                    </div>
                    <div className="flex gap-x-3 w-full">
                        <div className="w-full sm:h-[25rem] h-[20rem] sm:block hidden">
                            <img src="/sighting4.webp" alt="Sighting 4" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full sm:h-[25rem] h-[12rem]">
                            <img src="/sighting3.webp" alt="Sighting 1" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

            </div>


        </section >
    );
}

export default HeroIndex;