import React from 'react'
import { useQuery } from 'react-query'
import Loader from './Loader'
import MealCard from './MealCard'

function FetchMeals({category}) {
    
    const {isLoading, error, data} = useQuery(['meals', category], () =>
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then(res => res.json())
    )

    if(isLoading) return <Loader />

    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 px-4 gap-4 sm:gap-8'>
            {
                data?.meals.map(meals => {
                    return(
                        <MealCard 
                            key={meals?.idMeal}
                            id={meals?.idMeal}
                            img={meals?.strMealThumb}
                            title={meals?.strMeal}
                        />
                    )   
                })
            
            }
        </div>
    )
}

export default FetchMeals
