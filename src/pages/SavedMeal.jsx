import React from 'react'
import { useSelector } from 'react-redux'

function SavedMeal() {
    const {saves} = useSelector(state => state.saves)
    console.log(saves)

    return (
        <main className='mb-8'>
            <div className="container mx-auto">
                <h3 className="meal-title">SAVED MEALS</h3>
                {saves.length ? "" : "You have no meals saved yet"}
            </div>
        </main>
    )
}

export default SavedMeal
