import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import {motion} from 'framer-motion'

function SearchBox() {
    const [searchParams] = useSearchParams()
    const param = searchParams.get('q')
    const [search, setSearch] = useState(param ? param : "")
    const navigate = useNavigate()

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        if(search !== '') {
            navigate(`/search?q=${search}`)
        }
    }

    return (
        <form className='flex items-stretch max-w-lg mx-auto ' onSubmit={handleSubmit}>
            <input type="search" onChange={handleChange} value={search} className='focus:outline-0 sm:flex-1 px-4 w-full py-4'/>
            <motion.button whileTap={{scale: 0.5}} className="btn-pry">Search</motion.button>
        </form>
    )
}

export default SearchBox
