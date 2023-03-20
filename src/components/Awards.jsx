import React from 'react'
import { motion } from 'framer-motion'

function Awards({logo, title}) {
    return (
        <motion.div
            initial={{scale: 2}}
            whileInView={{scale: 1}}
            transition={{duration: 0.7}}
            viewport={{once: true}} 
            className='grid grid-rows-2 grid-flow-col gap-x-4 md:gap-x-8'
        >
            <img src={logo} alt="" className='h-[79px] row-span-2'/>
            <h4 className='text-primary font-comorant text-2xl font-bold '>{title}</h4>
            <p className='leading-[175%]'>Lorem ipsum dolor sit amet, consectetur.</p>
        </motion.div>
    )
}

export default Awards
