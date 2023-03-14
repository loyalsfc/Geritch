import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

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
        <form className='flex items-stretch max-w-lg mx-auto' onSubmit={handleSubmit}>
            <input type="search" onChange={handleChange} value={search} className='focus:outline-0 flex-1 px-4 py-4'/>
            <button className="btn-pry">Search</button>
        </form>
    )
}

export default SearchBox
