import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import FetchMeals from '../components/FetchMeals'
import Loader from '../components/Loader'
import SearchBox from '../components/SearchBox'
import { supabase } from '../supabaseClient'


function Page() {
    
    const {isLoading, error, data} = useQuery('cats', () => 
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
    )
    const [currentCategory, setCurrentCategory] = useState('')

    useEffect(()=>{
        setCurrentCategory(data?.categories[0].strCategory)
    }, [data])

    useEffect(()=>{
        async function getUser(){
            const { data, error } = await supabase.auth.getSession()
            // const { data: { user } } = await supabase.auth.getUser()
            console.log(data)
        }

        getUser()
    },[])

    if(isLoading){
        return <Loader />
    }

    return (
        <main>
            <div className='container mx-auto pb-8'>
                <div>
                    <SearchBox />
                    <p className='text-center mt-2'>Search Meals or Select Categories From Below</p>
                </div>
                <div className='grid grid-cols-6 gap-4 p-8'>
                    {
                        data?.categories.map(category => {
                            return(
                                <button 
                                    key={category?.idCategory} 
                                    className={`py-2 px-4 font-bold ${currentCategory === category?.strCategory ? "bg-[#d8b63a]" : "bg-primary"} text-black hover:opacity-80`}
                                    onClick={()=>setCurrentCategory(category?.strCategory)}
                                >
                                    {category?.strCategory}
                                </button>
                            )
                        })
                    }
                </div>
                <div>
                    {currentCategory && <FetchMeals category={currentCategory}/>}
                </div>
            </div>
        </main>
    )
}


export default Page
