import React, { useState } from 'react'
import removeIcon from '../assets/confirm.png'
import { useDispatch } from 'react-redux'
import { removeSaves } from '../app/savesSlice'

function RemoveSave({id, dismiss}) {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(removeSaves(id))
        dismiss(false)
    }

    return (
        <div className='fixed h-screen w-full bg-black/40 grid place-content-center top-0 z-10'>
            <article className="bg-white text-black min-w-[400px]">
                <div className=" shadow-md font-bold p-2">Confirm Remove</div>
                <div className='flex items-center gap-1 font-semibold pl-2 py-4 pr-10'>
                    <img src={removeIcon} alt="" />
                    <p>Are you sure to remove?</p>
                </div>
                <div className='flex justify-end gap-4 px-3 pb-4'>
                    <button onClick={handleClick} className='bg-green-600 border-2 border-green-600 text-white font-bold py-1 px-3'>Yes</button>
                    <button onClick={()=>dismiss(false)} className='border-2 border-green-600 text-green-600 font-bold py-1 px-3'>No</button>
                </div>
            </article>
        </div>
    )
}

export default RemoveSave
