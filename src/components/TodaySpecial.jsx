import React from 'react'

const TodaySpecial = ({title, children}) => {
    return (
        <div className='px-8'>
            <h4 className='text-white text-center mb-12 font-comorant text-[45px] leading-[130%] tracking-[0.04em]'>{title}</h4>
            <div className='flex flex-col gap-10'>
                {children}
            </div>
        </div>
    )
}

const MenuItem = ({name, price, note}) => {
    return(<article>
        <div className="flex items-center justify-between">
            <p className='text-primary font-comorant text-2xl'>{name}</p>
            <div className='ml-auto mr-8 h-px w-24 bg-white'></div>
            <span>${price}</span>
        </div>
        <p className='leading-[175%] text-sm'>{note}</p>
    </article>)
}

export {MenuItem}
export default TodaySpecial
