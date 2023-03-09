import React from 'react'

    function MealCard({img, title}) {
    return (
        <div className='border border-primary p-2 text-center hover:shadow-md shadow-white'>
            <img src={img} alt="" className='w-full'/>
            <p className='truncate mt-2'>{title}</p>
        </div>
    )
}

export default MealCard
