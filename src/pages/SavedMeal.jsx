import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import Footer from '../components/Footer'
import RemoveSave from '../components/RemoveSave'
import Toast from '../components/Toast'

function SavedMeal() {
    const [showRemoveModal, setShowRemoveModal] = useState(false)
    const [displayToast, setDisplayToast] = useState(false)
    const [deleteId, setDeleteId] = useState(null)
    const {saves} = useSelector(state => state.saves)
    const {user} = useSelector(state => state.user)

    const handleClick = (id) => {
        setShowRemoveModal(true)
        setDeleteId(id)
    }

    if(!user){
        return <Navigate to='/login' />
    }

    return (
        <main className='mt-8 pb-16'>
            {showRemoveModal && <RemoveSave id={deleteId} dismiss={setShowRemoveModal} />}
            {displayToast && <Toast text="Meal Removed Successfully" handleClick={()=>setDisplayToast(false)}/>}
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto px-4">
                    <h3 className="meal-title">SAVED MEALS</h3>
                    {saves.length ? (
                        <ul className='mb-16'>
                            {
                                saves.map(save => {
                                    return (
                                        <li key={save.id} className="my-8 flex flex-col md:flex-row gap-4 bg-white/5 p-4 shadow-md">
                                                <div className='md:w-fit shrink-0'>
                                                    <Link to={`/meal/${save?.item?.idMeal}`} className="w-full block">
                                                        <img src={save?.item?.strMealThumb} alt={save?.item?.strMeal} className="w-full h-48 md:h-fit object-cover md:w-32"/>
                                                    </Link>
                                                </div>
                                                <article className='flex flex-col flex-1 text-center md:text-left'>
                                                    <Link to={`/meal/${save?.item?.idMeal}`}>
                                                        <h3 className=' text-primary font-comorant font-bold text-xl md:text-3xl w-full'>{save?.item?.strMeal}</h3>
                                                    </Link>
                                                    <p>Category: {save?.item?.strCategory}</p>
                                                    <button onClick={()=>handleClick(save?.id)} className='bg-primary font-bold text-black py-1.5 px-4 w-fit mt-8 md:mt-auto mx-auto md:mx-0' >REMOVE</button>
                                                </article>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    ):(
                        <p className='text-center mt-8 italic text-primary mb-40'><i>You have no meals saved yet</i></p>
                    )}
                    <Footer />
                </div>
            </div>
        </main>
    )
}

export default SavedMeal
