import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="container mx-auto mb-8">
            <header className='text-white py-4'>
                <div className='container mx-auto grid grid-cols-3 items-center place-item-center'>
                    <Link to="/"><h2 className='font-bold font-comorant text-[44px] tracking-[0.04em] '>GERICHT</h2></Link>
                    <nav>
                        <ul className='tracking-[0.04em] flex gap-8'>
                            <li className='cursor-pointer'><Link to='/'>Home</Link></li>
                            <li className='cursor-pointer'><Link to='/page'>Pages</Link></li>
                            <li className='cursor-pointer'>Contact Us</li>
                            <li className='cursor-pointer'>Blog</li>
                            <li className='cursor-pointer'>Landing</li>
                        </ul>
                    </nav>
                    <ul className='flex items-center gap-8 place-self-end'>
                        <li className='cursor-pointer'><Link to="/saves">Saves</Link></li>
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
                </div>
            </header>
        </div>
    )
}

export default Header
