import React from 'react'
import { Icon } from './Icon'

function HeadTitle({title, subtitle}) {
    return (
        <article className='font-comorant'>
            <h4 className='text-white font-2xl font-bold'>{title}</h4>
            <Icon />
            <h3 className='text-primary text-5xl tracking-[0.03em] font-semibold'>{subtitle}</h3>
        </article>
  )
}

export default HeadTitle
