import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import FetchMeals from '../components/FetchMeals'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import SearchBox from '../components/SearchBox'

function Page() {
    
    const {isLoading, error, data} = useQuery('cats', () => 
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
    )
    const [currentCategory, setCurrentCategory] = useState('')

    useEffect(()=>{
        setCurrentCategory(data?.categories[0].strCategory)
    }, [data])

    if(isLoading){
        return <Loader />
    }

    return (
        <main>
            <div className='container mx-auto pb-8 px-4'>
                <div>
                    <SearchBox />
                    <p className='text-center mt-2'>Search Meals or Select Categories From Below</p>
                </div>
                <div className='flex items-center justify-center flex-wrap gap-4 py-8 sm:px-8'>
                    {
                        data?.categories.map(category => {
                            return(
                                <button 
                                    key={category?.idCategory} 
                                    className={`py-2 font-bold w-32 ${currentCategory === category?.strCategory ? "bg-[#d8b63a]" : "bg-primary"} text-black hover:opacity-80`}
                                    onClick={()=>setCurrentCategory(category?.strCategory)}
                                >
                                    {category?.strCategory}
                                </button>
                            )
                        })
                    }
                </div>
                <div className='mb-16'>
                    {currentCategory && <FetchMeals category={currentCategory}/>}
                </div>
                <Footer />
            </div>
        </main>
    )
}


export default Page
