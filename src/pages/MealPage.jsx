import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addSaves, removeSaves } from '../app/savesSlice'
import { motion } from 'framer-motion'
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
        //Hide notification toast after 10 seconds
        const intevalId = setInterval(() => {
            setDisplayToast(false)
        }, 10000); 

        ()=> clearInterval(intevalId)
    }, [displayToast])

    useEffect(()=>{
        //Get the meal id and set te id for delete
        const meal = saves.find(meal => meal?.item?.idMeal == mealId)
        setDeleteId(meal?.id)
    }, [])

    const handleSaveMeal = async (e) => {
        //Get the save meal button 
        const btn = e.currentTarget
        //Check if user is signed in
        if(user){
            //Set the btn text to a loader
            btn.innerHTML = "<div class='h-5 w-5 rounded-full border-4 mx-auto border-r-white animate-spin'></div>"
            // Change the notification text to success
            setToastText("Meal Saved Successfully")
            //Save the meal to the database
            const {data: savedMeal} = await supabase.from('saves')
                .insert({user_id: user?.id, item: data?.meals?.[0]})
                .select()
            //On success, add the result to the saved meal
            dispatch(addSaves(savedMeal[0]))
            //Update the deleteId state with the saved Id
            setDeleteId(savedMeal[0].id)
            //Show toast 
            setDisplayToast(true)
            //Restore button text to default
            btn.innerHTML = "Save Meal"
        } else {
            //If user is not signed in, show the toast 
            //Indicating the user that they are not signed in 
            setToastText('You are not sign in')
            setDisplayToast(true)
        }
    }

    const handleDelete = (id) => {
        setShowRemoveModal(true)
    }

    //If api is still loading, display the loader
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
                            <motion.div 
                                initial={{scale: 1.5}}
                                animate={{scale: 1}}
                                transition={{duration: 0.7}}
                                className="lg:w-1/3 shrink-0"
                            >
                                <img src={data?.meals?.[0].strMealThumb} height="500" width="500" className='w-full h-80 object-cover' loading='lazy' alt={data?.meals?.[0].strMeal} />
                            </motion.div>
                            <div className='flex flex-col gap-4'>
                                <motion.h2 
                                    initial={{opacity: 0}}
                                    whileInView={{opacity: 1}}
                                    transition={{duration: 0.4}}
                                    viewport={{once: true}}
                                    className='text-4xl mb-2 text-primary font-bold font-comorant'
                                >
                                    {data?.meals?.[0].strMeal}
                                </motion.h2>
                                <motion.p
                                    initial={{opacity: 0}}
                                    whileInView={{opacity: 1}}
                                    transition={{duration: 0.4, delay: 0.4}}
                                    viewport={{once: true}}
                                    className='text-sm'
                                >
                                    Category: {data?.meals?.[0].strCategory}
                                </motion.p>
                                <motion.div
                                    initial={{opacity: 0}}
                                    whileInView={{opacity: 1}}
                                    transition={{duration: 0.4, delay: 0.8}}
                                    viewport={{once: true}} 
                                    className='my-4 flex flex-wrap gap-4'
                                >
                                    { 
                                        data?.meals?.[0].strTags?.split(',').map((tag, index) => {
                                            return <span key={index} className='bg-primary py-2 px-4 rounded-full text-black font-semibold cursor-pointer hover:opacity-80'>{tag}</span>
                                        })
                                    }
                                </motion.div>
                                {saves.some(meal => meal?.item?.idMeal == mealId) ?(
                                        <motion.button
                                            initial={{translateY: '50%'}}
                                            whileInView={{translateY: 0}}
                                            whileTap={{scale: 0.7}}
                                            transition={{duration: 0.4}}
                                            viewport={{once: true}}
                                            onClick={handleDelete} 
                                            className='meal-page-btn'
                                        >
                                            Remove Meal
                                        </motion.button>
                                    ):(
                                        <motion.button
                                            initial={{translateY: '50%'}}
                                            whileInView={{translateY: 0}}
                                            whileTap={{scale: 0.7}}
                                            transition={{duration: 0.6}}
                                            viewport={{once: true}}
                                            onClick={handleSaveMeal} 
                                            className='meal-page-btn'
                                        >
                                            Save Meal
                                        </motion.button>
                                    )
                                }
                            </div>
                        </div>
                    </article>
                    <motion.article
                        initial={{scale: 0.8}}
                        whileInView={{scale: 1}}
                        transition={{duration: 0.6}}
                        viewport={{once: true}} 
                        className='mb-16'
                    >
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
                    </motion.article>
                    <motion.article
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 0.4, delay: 0.4}}
                        viewport={{once: true}} 
                        className='mb-16'
                    >
                        <h3 className="meal-title">INSTRUCTIONS</h3>
                        <ol className='leading-8'>
                            {
                                data?.meals?.[0].strInstructions?.split('.').map((item, index) =>{
                                    if(item !== "") return <li key={index}>{item}.</li>
                                })
                            }
                        </ol>
                    </motion.article>
                    <Footer />
                </div>
            </div>
        </main>
    )
}

export default MealPage
