import React from 'react'
import { useQuery } from 'react-query'
import MealCard from './MealCard'

function FetchMeals({category}) {
    
    const {isLoading, error, data} = useQuery(['meals', category], () =>
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then(res => res.json())
    )
    console.log(data)

    if(isLoading) return 'Loading...'

    return (
        <div className='grid grid-cols-5 px-4 gap-4'>
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
