import React from 'react'
import { motion } from 'framer-motion'

const TodaySpecial = ({title, children}) => {
    return (
        <motion.div 
            className='px-8'
            whileInView={{
                scale: [1, 2, 1, 1],
                rotate: [0, 270, 270, 0],
                borderRadius: ["20%", "50%", "50%", "20%"],
            }}
            viewport={{once: true}}
        >
            <h4 className='text-white text-center mb-6 sm:mb-12 font-comorant text-[45px] leading-[130%] tracking-[0.04em]'>{title}</h4>
            <div className='flex flex-col gap-10'>
                {children}
            </div>
        </motion.div>
    )
}

const MenuItem = ({name, price, note}) => {
    return(<article>
        <div className="flex items-center justify-between">
            <p className='text-primary font-comorant text-xl md:text-2xl'>{name}</p>
            <div className='ml-auto mr-8 h-px w-24 bg-white'></div>
            <span>${price}</span>
        </div>
        <p className='leading-[175%] text-sm'>{note}</p>
    </article>)
}

export {MenuItem}
export default TodaySpecial
