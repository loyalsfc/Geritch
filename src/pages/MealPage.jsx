import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addSaves, removeSaves } from '../app/savesSlice'
import Loader from '../components/Loader'
import Toast from '../components/Toast'
import RemoveSave from '../components/RemoveSave'
import { supabase } from '../supabaseClient'
import Footer from '../components/Footer'
function MealPage() {
    const dispatch = useDispatch()
    const {saves} = useSelector(state => state.saves)
    const {user} = useSelector(state => state.user)
    const {mealId} = useParams()
    const {isLoading, error, data} = useQuery(['getmeal', mealId], () => 
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
    )
    const ingredientList = [1,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    const [displayToast, setDisplayToast] = useState(false)
    const [showRemoveModal, setShowRemoveModal] = useState(false)
    const [deleteId, setDeleteId] = useState(null)
    const [toastText, setToastText] = useState("Meal Saved Successfully")

    useEffect(()=>{
        const intevalId = setInterval(() => {
            setDisplayToast(false)
        }, 10000); 

        ()=> clearInterval(intevalId)
    }, [displayToast])

    useEffect(()=>{
        const meal = saves.find(meal => meal?.item?.idMeal == mealId)
        setDeleteId(meal?.id)
    }, [])

    const handleSaveMeal = async (e) => {
        const btn = e.currentTarget
        if(user){
            btn.innerHTML = "<div class='h-5 w-5 rounded-full border-4 mx-auto border-r-white animate-spin'></div>"
            setToastText("Meal Saved Successfully")
            const {data: savedMeal} = await supabase.from('saves')
                .insert({user_id: user?.id, item: data?.meals?.[0]})
                .select()
            dispatch(addSaves(savedMeal[0]))
            setDeleteId(savedMeal[0].id)
            setDisplayToast(true)
            btn.innerHTML = "Save Meal"
        } else {
            setToastText('You are not sign in')
            setDisplayToast(true)
        }
    }

    const handleDelete = (id) => {
        setShowRemoveModal(true)
    }

    
    if(isLoading){
        return <Loader />
    }

    return (
        <main className='pb-16 relative px-4'>
            {displayToast && <Toast text={toastText} handleClick={()=>setDisplayToast(false)}/>}
            {showRemoveModal && <RemoveSave id={deleteId} dismiss={setShowRemoveModal} />}
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto">
                    <article className='mb-16'>
                        <h3 className='meal-title'>MEAL DETAILS</h3>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="lg:w-1/3 shrink-0">
                                <img src={data?.meals?.[0].strMealThumb} height="500" width="500" className='w-full h-80 object-cover' loading='lazy' alt={data?.meals?.[0].strMeal} />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h2 className='text-4xl mb-2 text-primary font-bold font-comorant'>{data?.meals?.[0].strMeal}</h2>
                                <p className='text-sm'>Category: {data?.meals?.[0].strCategory}</p>
                                <div className='my-4 flex flex-wrap gap-4'>
                                    { 
                                        data?.meals?.[0].strTags?.split(',').map((tag, index) => {
                                            return <span key={index} className='bg-primary py-2 px-4 rounded-full text-black font-semibold cursor-pointer hover:opacity-80'>{tag}</span>
                                        })
                                    }
                                </div>
                                {saves.some(meal => meal?.item?.idMeal == mealId) ?(
                                        <button 
                                            onClick={handleDelete} 
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
                    <article className='mb-16'>
                        <h3 className="meal-title">INSTRUCTIONS</h3>
                        <ol className='leading-8'>
                            {
                                data?.meals?.[0].strInstructions?.split('.').map((item, index) =>{
                                    if(item !== "") return <li key={index}>{item}.</li>
                                })
                            }
                        </ol>
                    </article>
                    <Footer />
                </div>
            </div>
        </main>
    )
}

export default MealPage
