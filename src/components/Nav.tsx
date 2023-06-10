import { motion } from "framer-motion";

const Nav = () => {

    const navList = [
        {
            label: 'about',
            slug: '',
        },
        {
            label: 'proofs',
            slug: '',
        },
        {
            label: 'socials',
            slug: '',
        },

    ]

    return (
        <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="z-30 sides absolute font-orbit uppercase left-0 sm:gap-x-20 w-fit h-fit -rotate-90 bottom-0 flex sm:top-0 my-auto sm:-ml-28 mb-36 sm:mb-auto  gap-x-10 -ml-20">
            {navList.map((items, i) => {
                return (
                    <li className="cursor-pointer text-sm group" key={i}>
                        <p className="">{items.label}</p>
                        <div className="bg-white h-[2px] w-0 mx-auto mt-2 origin-center group-hover:w-full transition-all ease-in-out duration-200"></div>
                    </li>
                )
            })}
        </motion.ul>
    );
}

export default Nav;