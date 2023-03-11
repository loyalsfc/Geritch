import React from 'react'
import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'
import MealCard from '../components/MealCard'
import SearchBox from '../components/SearchBox';


function Search() {
    const [searchParams, SetSearchParams] = useSearchParams();
    const param = searchParams.get('q')
    const {isLoading, error, data} = useQuery(['search', param], () =>
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${param}`)
        .then(res => res.json())
    )

    return (
        <main>
            <div className="container mx-auto pb-16">
                <SearchBox />
                {isLoading ? (
                    <h3 className='mt-16'>"Loading...."</h3>
                    ) : (
                    <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 px-4 gap-8 mt-16'>
                        {data.meals ? (data.meals?.map(meal => {
                            return(
                                <MealCard 
                                    key={meal?.idMeal}
                                    id={meal?.idMeal}
                                    img={meal?.strMealThumb}
                                    title={meal?.strMeal}
                                />
                            )
                        })):(
                            <h2>No Item Found</h2>
                        )}
                    </div>
                )}
            </div>
        </main>
    )
}

export default Search
