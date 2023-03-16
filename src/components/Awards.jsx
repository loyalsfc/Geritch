import React from 'react'

function Awards({logo, title}) {
    return (
        <div className='grid grid-rows-2 grid-flow-col gap-x-4 md:gap-x-8'>
            <img src={logo} alt="" className='h-[79px] row-span-2'/>
            <h4 className='text-primary font-comorant text-2xl font-bold '>{title}</h4>
            <p className='leading-[175%]'>Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
    )
}

export default Awards
