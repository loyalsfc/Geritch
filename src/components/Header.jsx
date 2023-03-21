import React, { useRef } from 'react'
import { NavLink, Link  } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {motion} from 'framer-motion'

function Header() {
    const closeNav = useRef()    
    const handleCloseNav = () => {
        closeNav.current.classList.replace('w-full', 'w-0')
    }
    const handleOpenNav = () => {
        closeNav.current.classList.replace('w-0', 'w-full')
    }

    return (
        <div className="container mx-auto mb-8">
            <div ref={closeNav} className='transition-all fixed top-0 left-0 w-0 h-screen bg-black z-50 flex flex-col items-center justify-center gap-8 lg:hidden overflow-hidden'>
                <svg
                    onClick={handleCloseNav}
                    className='absolute top-4 right-4'
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <motion.path
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        whileTap={{scale: 0.7}}
                        d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                        fill="white"
                    />
                </svg>
                <Navigation handleClick={handleCloseNav} />
                <Menu handleClick={handleCloseNav} />
            </div>
            <header className='text-white py-8 lg:py-4'>
                <div className='container px-4 md:px-0 mx-auto flex justify-between lg:grid grid-cols-3 items-center place-item-center'>
                    <Link to="/"><h2 className='font-bold font-comorant text-3xl sm:text-[44px] tracking-[0.04em] '>GERICHT</h2></Link>
                    <nav className='hidden lg:block'>
                        <Navigation />
                    </nav>
                    <div className='hidden lg:block place-self-end'>
                        <Menu />
                    </div>
                    <motion.svg 
                        onClick={handleOpenNav} 
                        className='lg:hidden' 
                        viewBox="0 0 100 80" 
                        width="30" 
                        height="30"
                    >
                        <motion.rect 
                            initial={{rotate: 45}} 
                            animate={{rotate: 0}}
                            transition={{duration: 0.7}}
                            className="fill-white stroke-white" width="100" height="10" rx="10"/>
                        <motion.rect 
                            initial={{opacity: 0}} 
                            animate={{opacity: 1}}
                            transition={{duration: 0.4, delay: 0.3}}
                            className="fill-white stroke-white" y="30" width="100" height="10" rx="10"/>
                        <motion.rect 
                            initial={{rotate: 135}} 
                            animate={{rotate: 0}}
                            transition={{duration: 0.7}}
                            className="fill-white stroke-white" y="60" width="100" height="10" rx="10"/>
                    </motion.svg>
                </div>
            </header>
        </div>
    )
}

function Navigation({handleClick}){
    return (
        <ul className='tracking-[0.04em] flex gap-8 flex-col lg:flex-row text-center'>
                            <li className='cursor-pointer' onClick={handleClick}>
                                <NavLink 
                                    to='/'
                                    className={({isActive, isPending}) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className='cursor-pointer' onClick={handleClick}>
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

function Menu({handleClick}){
    const {user} = useSelector(state => state.user)
    return (
        <ul className='flex items-center flex-col lg:flex-row gap-8 lg:gap-6'>
            <li className='cursor-pointer' onClick={handleClick}>
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
