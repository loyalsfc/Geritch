import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addSaves, removeSaves } from '../app/savesSlice'
import Loader from '../components/Loader'
import Toast from '../components/Toast'
import RemoveSave from '../components/RemoveSave'

function MealPage() {
    const dispatch = useDispatch()
    const {saves} = useSelector(state => state.saves)
    const {mealId} = useParams()
    const {isLoading, error, data} = useQuery(['getmeal', mealId], () => 
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
    )
    const ingredientList = [1,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    const [displayToast, setDisplayToast] = useState(false)

    useEffect(()=>{
        const intevalId = setInterval(() => {
            setDisplayToast(false)
        }, 10000); 

        ()=> clearInterval(intevalId)
    }, [displayToast])

    const handleSaveMeal = () => {
        dispatch(addSaves(data?.meals?.[0]))
        setDisplayToast(true)
    }
    
    if(isLoading){
        return <Loader />
    }

    return (
        <main className='pb-16 relative'>
            {displayToast && <Toast text="Meal Saved Successfully" handleClick={()=>setDisplayToast(false)}/>}
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto">
                    <article className='mb-16'>
                        <h3 className='meal-title'>MEAL DETAILS</h3>
                        <div className="flex gap-8">
                            <div className="w-1/3 shrink-0">
                                <img src={data?.meals?.[0].strMealThumb} alt="" />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h2 className='text-4xl mb-2 text-primary font-bold font-comorant'>{data?.meals?.[0].strMeal}</h2>
                                <p className='text-sm'>Category: {data?.meals?.[0].strCategory}</p>
                                <div className='my-4 flex gap-4'>
                                    { 
                                        data?.meals?.[0].strTags?.split(',').map((tag, index) => {
                                            return <span key={index} className='bg-primary py-2 px-4 rounded-full text-black font-semibold cursor-pointer hover:opacity-80'>{tag}</span>
                                        })
                                    }
                                </div>
                                {saves.some(item => item.idMeal == mealId) ?(
                                        <button 
                                            onClick={()=>dispatch(removeSaves(mealId))} 
                                            className='meal-page-btn'
                                        >
                                            Remove Meal
                                        </button>
                                    ):(
                                        <button 
                                            onClick={handleSaveMeal} 
                                            className='meal-page-btn'
                                        >
                                            Save Meal
                                        </button>
                                    )
                                }
                            </div>
                        </div>
                    </article>
                    <article className='mb-16'>
                        <h3 className="meal-title">INGREDIENTS</h3>
                        <table className='w-full border'>
                            <tbody>
                                {
                                    ingredientList.map(item => {
                                        if(data?.meals?.[0][`strIngredient${item}`] !== "" && data?.meals?.[0][`strIngredient${item}`] !== null){
                                            return(
                                                <tr key={`meal${item}`} className='border'>
                                                    <td className='px-4 py-0.5'>{data?.meals?.[0][`strIngredient${item}`]}</td>
                                                    <td className='px-4 py-0.5'>{data?.meals?.[0][`strMeasure${item}`]}</td>
                                                </tr>
                                            )
                                        }
                                    })
                                }
                            </tbody>
                        </table>
                    </article>
                    <article>
                        <h3 className="meal-title">INSTRUCTIONS</h3>
                        <ol className='leading-8'>
                            {
                                data?.meals?.[0].strInstructions?.split('.').map((item, index) =>{
                                    if(item !== "") return <li key={index}>{item}.</li>
                                })
                            }
                        </ol>
                    </article>
                </div>
            </div>
        </main>
    )
}

export default MealPage
