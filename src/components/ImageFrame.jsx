import React from 'react'

function ImageFrame({image}) {
    return (
        <div className='relative p-6 z-10'>
            <div className='w-[287px] h-[287px] absolute top-0 right-0 bg-primary -z-10'/>
            <img src={image} alt="" className='z-10'/>
            <div className='w-[287px] h-[287px] absolute bottom-0 left-0 bg-primary -z-10'/>
        </div>
    )
}

export default ImageFrame
