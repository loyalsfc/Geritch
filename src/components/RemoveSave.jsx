import React, { useState } from 'react'
import removeIcon from '../assets/confirm.png'
import gifLoader from '../assets/gif_loader.gif'
import { useDispatch } from 'react-redux'
import { supabase } from '../supabaseClient'
import { removeSaves } from '../app/savesSlice'

function RemoveSave({id, dismiss}) {
    const dispatch = useDispatch()
    const [showLoader, setShowLoader] = useState(false)

    const handleClick = async() => {
        setShowLoader(true)
        const suppa = await supabase
            .from('saves')
            .delete()
            .eq('id', id)
        dispatch(removeSaves(id))
        dismiss(false)
        setShowLoader(false)
    }

    return (
        <div className='fixed h-screen w-full bg-black/40 flex items-center justify-center top-0 z-10'>
            <article className="bg-white text-black w-[90%] mx-2 max-w-[400px]">
                <div className=" shadow-md font-bold p-2">Remove Meal</div>
                <div className='min min-h-[128px]'>{showLoader ? (
                    <img src={gifLoader} className='h-28 my-2 mx-auto' />
                    ):(<>
                            <div className='flex items-center gap-1 font-semibold pl-2 py-4 pr-10'>
                                <img src={removeIcon} alt="" />
                                <p>Are you sure to remove meal?</p>
                            </div>
                            <div className='flex justify-end gap-4 px-3 pb-4'>
                                <button onClick={handleClick} className='bg-green-600 border-2 border-green-600 text-white font-bold py-1 px-3'>Yes</button>
                                <button onClick={()=>dismiss(false)} className='border-2 border-green-600 text-green-600 font-bold py-1 px-3'>No</button>
                            </div>
                        </>
                    )}
                </div>
            </article>
        </div>
    )
}

export default RemoveSave
