import React from 'react'
import { NavLink, Link  } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {    
    return (
        <div className="container mx-auto mb-8">
            <div className='fixed top-0 left-0 w-full h-screen bg-black z-50 flex flex-col items-center justify-center gap-8 hidden'>
                <Navigation />
                <Menu />
            </div>
            <header className='text-white py-4'>
                <div className='container px-4 md:px-0 mx-auto flex justify-between lg:grid grid-cols-3 items-center place-item-center'>
                    <Link to="/"><h2 className='font-bold font-comorant text-3xl sm:text-[44px] tracking-[0.04em] '>GERICHT</h2></Link>
                    <nav className='hidden lg:block'>
                        <Navigation />
                    </nav>
                    <div className='hidden lg:block place-self-end'>
                        <Menu />
                    </div>
                    <svg className='lg:hidden' viewBox="0 0 100 80" width="30" height="30">
                        <rect className="fill-white stroke-white"width="100" height="10" rx="10"></rect>
                        <rect className="fill-white stroke-white"y="30" width="100" height="10" rx="10"></rect>
                        <rect className="fill-white stroke-white"y="60" width="100" height="10" rx="10"></rect>
                    </svg>
                </div>
            </header>
        </div>
    )
}

function Navigation(){
    return (
        <ul className='tracking-[0.04em] flex gap-8 flex-col lg:flex-row text-center'>
                            <li className='cursor-pointer'>
                                <NavLink 
                                    to='/'
                                    className={({isActive, isPending}) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className='cursor-pointer'>
                                <NavLink 
                                    to='/page'
                                    className={({isPending, isActive}) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }    
                                >
                                    Pages
                                </NavLink>
                            </li>
                            <li className='cursor-pointer'>Contact Us</li>
                            <li className='cursor-pointer'>Blog</li>
                            <li className='cursor-pointer'>Landing</li>
        </ul>
    )
}

function Menu(){
    const {user} = useSelector(state => state.user)
    return (
        <ul className='flex items-center flex-col lg:flex-row gap-6'>
            <li className='cursor-pointer'>
                    {user ? 
                        <NavLink 
                            to="/saves"
                            className={({isPending, isActive}) =>
                                isPending ? 'pending' : isActive ? "active" : ""
                            }
                        >
                            Saves
                        </NavLink>
                        : 
                        <NavLink 
                            to="/login"
                            className={({isPending, isActive}) =>
                                isPending ? 'pending' : isActive ? "active" : ""
                            }
                        >
                            Registration / Login
                        </NavLink>

                    }
            </li>   
            <li className='cursor-pointer hidden lg:block'>
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
    )
}

export default Header
