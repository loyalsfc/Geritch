import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
    const {user} = useSelector(state => state.user)
    
    return (
        <div className="container mx-auto mb-8">
            <header className='text-white py-4'>
                <div className='container px-4 md:px-0 mx-auto flex justify-between lg:grid grid-cols-3 items-center place-item-center'>
                    <Link to="/"><h2 className='font-bold font-comorant text-[44px] tracking-[0.04em] '>GERICHT</h2></Link>
                    <nav className='hidden lg:block'>
                        <ul className='tracking-[0.04em] flex gap-8 text-center'>
                            <li className='cursor-pointer'><Link to='/'>Home</Link></li>
                            <li className='cursor-pointer'><Link to='/page'>Pages</Link></li>
                            <li className='cursor-pointer'>Contact Us</li>
                            <li className='cursor-pointer'>Blog</li>
                            <li className='cursor-pointer'>Landing</li>
                        </ul>
                    </nav>
                    <ul className='hidden lg:flex items-center gap-6 place-self-end'>
                        <li className='cursor-pointer'>
                            {user ? <Link to="/saves">Saves</Link> : <Link to="/login">Registration / Login</Link>

                            }
                        </li>   
                        <li className='cursor-pointer'>
                            <svg width="2" height="57" viewBox="0 0 2 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 0V57" stroke="url(#paint0_radial_0_364)"/>
                                <defs>
                                    <radialGradient id="paint0_radial_0_364" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.5 28.5) rotate(90) scale(28.5 0.5)">
                                        <stop offset="0.588542" stopColor="white"/>
                                        <stop offset="1" stopColor="white" stopOpacity="0"/>
                                    </radialGradient>
                                </defs>
                            </svg>
                        </li>
                        <li>Book Table</li>
                    </ul>
                    <svg className='lg:hidden' viewBox="0 0 100 80" width="40" height="40">
                        <rect className="fill-white stroke-white"width="100" height="10" rx="10"></rect>
                        <rect className="fill-white stroke-white"y="30" width="100" height="10" rx="10"></rect>
                        <rect className="fill-white stroke-white"y="60" width="100" height="10" rx="10"></rect>
                    </svg>
                </div>
            </header>
        </div>
    )
}

export default Header
