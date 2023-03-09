import React from 'react'
import { useQuery } from 'react-query'

function FetchMeals({category}) {
    const {isLoading, error, data} = useQuery(['meals', category], () =>
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then(res => res.json())
    )
    console.log(data)
    return (
        <div className='grid grid-cols-5 px-4 gap-4'>
            {
                data?.meals.map(meals => {
                    return(
                        <div key={meals?.idMeal} className='border border-primary p-2 text-center hover:shadow-md shadow-white'>
                            <img src={meals?.strMealThumb} alt="" className='w-full'/>
                            <p className='truncate mt-2'>{meals?.strMeal}</p>
                        </div>
                    )
                })
            
            }
        </div>
    )
}

export default FetchMeals
