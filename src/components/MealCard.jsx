import React from 'react'
import { Link } from 'react-router-dom'

    function MealCard({img, title, id}) {
    return (
        <Link to={`/meal/${id}`}>
            <div className='border border-primary p-2 text-center hover:shadow-md shadow-white'>
                <img src={img} alt="" className='w-full'/>
                <p className='truncate mt-2'>{title}</p>
            </div>
        </Link>
    )
}

export default MealCard
