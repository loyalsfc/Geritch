import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import RemoveSave from '../components/RemoveSave'
import Toast from '../components/Toast'

function SavedMeal() {
    const [showRemoveModal, setShowRemoveModal] = useState(false)
    const [displayToast, setDisplayToast] = useState(false)
    const [deleteId, setDeleteId] = useState(null)
    const {saves} = useSelector(state => state.saves)

    const handleClick = (id) => {
        setShowRemoveModal(true)
        setDeleteId(id)
    }

    return (
        <main className='mt-8'>
            {showRemoveModal && <RemoveSave id={deleteId} dismiss={setShowRemoveModal} />}
            {displayToast && <Toast text="Meal Removed Successfully" handleClick={()=>setDisplayToast(false)}/>}
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto">
                    <h3 className="meal-title">SAVED MEALS</h3>
                    {saves.length ? (
                        <ul>
                            {
                                saves.map(save => {
                                    return (
                                        <li key={save.idMeal} className="my-8 flex gap-4 bg-white/5 p-4 shadow-md">
                                                <div className='w-fit shrink-0'>
                                                    <Link to={`/meal/${save?.idMeal}`} className="">
                                                        <img src={save?.strMealThumb} alt={save?.strMeal} className="w-32"/>
                                                    </Link>
                                                </div>
                                                <article className='flex-1 flex flex-col'>
                                                    <h3 className='overflow-hidden whitespace-nowrap text-ellipsis text-primary font-comorant font-bold text-3xl max-w-lg w-full'>{save?.strMeal}</h3>
                                                    <p>Category: {save?.strCategory}</p>
                                                    <button onClick={()=>handleClick(save?.idMeal)} className='bg-primary font-bold text-black py-1.5 px-4 w-fit mt-auto' >REMOVE</button>
                                                </article>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    ):(
                        <p className='text-center mt-8 italic text-primary'><i>You have no meals saved yet</i></p>
                    )}
                </div>
            </div>
        </main>
    )
}

export default SavedMeal
