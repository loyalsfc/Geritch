import React from 'react'
import { motion } from 'framer-motion'

function ImageFrame({image}) {
    return (
        <div className='relative p-6 z-10'>
            <motion.div 
                className='w-[287px] h-[287px] absolute bg-primary -z-10'
                initial={{right: '50%', top: '50%'}}
                whileInView={{right: 0, top: 0}}    
                transition={{duration: 0.5}}
                viewport={{once: true}}
            />
            <motion.img 
                src={image} 
                alt="" 
                className='z-10'
                initial={{scale: 0.5, opacity: 0}}
                whileInView={{scale: 1, opacity: 1}}
                transition={{duration: 1, delay: 0.4}}
                viewport={{ once: true }}
            />
            <motion.div 
                className='w-[287px] h-[287px] absolute bottom-0 left-0 bg-primary -z-10'
                initial={{bottom: '50%', left: '50%'}}
                whileInView={{bottom: 0, left: 0}}
                transition={{duration: 0.5}}
                viewport={{once: true}}
            />
        </div>
    )
}

export default ImageFrame
