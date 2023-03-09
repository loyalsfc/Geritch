import React, { useState } from 'react'
import { useQuery } from 'react-query'
import FetchMeals from '../components/FetchMeals'


function Page() {
    const {isLoading, error, data} = useQuery('cats', () => 
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
    )
    const [currentCategory, setCurrentCategory] = useState(data?.categories[0].strCategory)

    console.log(currentCategory) 
    console.log(data)

    return (
        <main>
            <div className='container mx-auto py-8'>
                <div className='flex items-stretch max-w-lg mx-auto'>
                    <input type="search" className='focus:outline-0 flex-1 px-4 py-4'/>
                    <button className="btn-pry">Search</button>
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
