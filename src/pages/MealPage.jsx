import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

function MealPage() {
    const {mealId} = useParams()
    const {isLoading, error, data} = useQuery(['getmeal', mealId], () => 
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${52772}`)
        .then(res => res.json())
    )

    return (
        <main className='mt-8'>
            <div className="container mx-auto">
                <h3 className='font-comorant font-bold text-3xl text-center mb-4 text-primary'>MEAL DETAILS</h3>
                <article>
                    <div className="flex gap-8">
                        <div className="w-1/3">
                            <img src={data?.meals?.[0].strMealThumb} alt="" />
                        </div>
                        <div>
                            <h2 className='text-4xl mb-2 text-primary font-bold font-comorant'>{data?.meals?.[0].strMeal}</h2>
                            <p className='text-sm'>Category: {data?.meals?.[0].strCategory}</p>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    )
}

export default MealPage
