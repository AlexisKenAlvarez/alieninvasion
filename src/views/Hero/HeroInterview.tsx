import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroInterview = () => {

    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.5 })

    return (
        <section className="w-full h-screen bg-black text-white font-orbit px-10 relative z-10 flex items-center" ref={ref}>

            <motion.h1 initial={{ x: -250, opacity: 0 }} animate={inView ? { x: 0, opacity: 1 } : {}} transition={{ duration: 1.5 }} className="font-alien text-white/5 text-[14rem] absolute left-0 top-10 select-none z-10">ALIENINVASION</motion.h1>

            <div className="flex items-center mx-auto max-w-[1500px] w-full">
                <div className="w-full flex items-center justify-center">
                    <LazyLoadComponent>
                        <div className="w-[30rem] h-[50rem] relative z-10">
                            <iframe
                                width="473"
                                height="841"
                                src="https://www.youtube.com/embed/KhafMlH7-Dc?autoplay=1"
                                title="“The Most Extraordinary Footage of all” - UNKNOWN UFO IN CALIFORNIA | Ancient Aliens | #Shorts"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </LazyLoadComponent>

                </div>

                <div className="font-orbit w-full">
                    <h2 className="text-[2rem]">The Most Extraordinary Footage of all</h2>
                    <p className="font-orbit text-white/70">The age of believing is over! We are in the age of knowing!</p>
                </div>

                <img src="/interviewalien.webp" alt="Side Alien" className="absolute z-0 bottom-0 right-0 opacity-20 h-full" />
            </div>


        </section>
    )
}

export default HeroInterview