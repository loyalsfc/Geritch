import React from 'react'
import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'
import Loader from '../components/Loader';
import MealCard from '../components/MealCard'
import SearchBox from '../components/SearchBox';
import { Link } from 'react-router-dom';


function Search() {
    const [searchParams, SetSearchParams] = useSearchParams();
    //Get the search parameter in the url
    const param = searchParams.get('q')
    //fetch data with the parameter value
    //Use param as a dependencies array to make the api call again once parameeter changes 
    const {isLoading, error, data} = useQuery(['search', param], () =>
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${param}`)
        .then(res => res.json())
    )

    return (
        <main>
            <div className="container mx-auto pb-16 px-4">
                <SearchBox />
                {   //Show a loader when api is still loading 
                    isLoading ? (
                    <Loader />
                    ) : (
                    <>
                        {//Check if meals contain valid items from the search result
                            //If yes, display the results
                            data.meals ? (
                            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 sm:px-4 gap-4 sm:gap-8 mt-16'>
                                {data.meals?.map(meal => {
                                    return(
                                        <MealCard 
                                            key={meal?.idMeal}
                                            id={meal?.idMeal}
                                            img={meal?.strMealThumb}
                                            title={meal?.strMeal}
                                        />
                                    )
                                })}
                            </div>
                        ):(
                            //Otherwise display the no result texts
                            <article className='text-center py-16'>
                                <h4 className='font-bold font-xl'>There are no results for “{param}”.</h4>
                                <ul className='mt-4'>
                                    <li>- Check your spelling for typing errors</li>
                                    <li>- Try searching with short and simple keywords</li>
                                    <li>- Try searching more general terms </li>
                                </ul>
                                <Link to="/page"><button className='btn-pry mt-8'>Return Back</button></Link>
                            </article>
                        )}
                    </>
                )}
            </div>
        </main>
    )
}

export default Search
