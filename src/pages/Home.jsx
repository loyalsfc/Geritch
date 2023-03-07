import hero from '../assets/hero-image.png';
import knife from '../assets/knife.png'

function Home() {
    return (
        <>
            <section className='py-8 mb-24'>
                <div className="container mx-auto flex items-center px-28 gap-14 relative">
                    <article className=' w-1/2 flex flex-col gap-2 shrink-0 pr-6'>
                        <h3 className='font-comorant font-bold text-2xl tracking-[0.04em] text-white'>Chase the new Flavour</h3>
                        <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_0_37)">
                                <path d="M33.5014 9.5C37.0847 9.5 39.9998 7.48129 39.9998 4.99995C39.9998 2.51861 37.0847 0.5 33.5014 0.5C30.112 0.5 27.3219 2.30637 27.0298 4.6018H22.3527V3.6552L-0.000213623 3.6552V6.34446L22.3528 6.34446V5.39798H27.0299C27.3221 7.69352 30.112 9.5 33.5014 9.5ZM21.4896 5.54839L0.863079 5.54839V4.45161H21.4896V5.54839ZM27.866 4.99995C27.866 2.95778 30.3942 1.2964 33.5015 1.2964C36.6088 1.2964 39.137 2.95778 39.137 4.99995C39.137 7.04222 36.6088 8.7037 33.5015 8.7037C30.3942 8.7037 27.866 7.04222 27.866 4.99995Z" fill="#DCCA87"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_0_37">
                                    <rect width="40" height="9" fill="white" transform="translate(-0.000213623 0.5)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <h1 className='font-comorant font-bold leading-[120%] text-[90px] text-primary tracking-[0.04em]'>The key to Fine dining</h1>
                        <p className='leading-[175%] tracking-[0.04em] '>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                        <button className='btn-pry'>Explore Menu</button>
                    </article>
                    <div className='relative p-6'>
                        <div className='w-[287px] h-[287px] absolute top-0 right-0 bg-primary -z-10'/>
                        <img src={hero} alt="" className='z-10'/>
                        <div className='w-[287px] h-[287px] absolute bottom-0 left-0 bg-primary -z-10'/>
                    </div>
                    <div className='flex flex-col items-center absolute bottom-0 right-0'>
                        <svg width="1" height="61" viewBox="0 0 1 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.499878 61L0.499884 0" stroke="url(#paint0_linear_0_54)"/>
                            <defs>
                                <linearGradient id="paint0_linear_0_54" x1="29.0041" y1="-11.8571" x2="29.0041" y2="78.2931" gradientUnits="userSpaceOnUse">
                                    <stop Color="#DCCA87"/>
                                    <stop offset="0.430036" stopColor="#DCCA87"/>
                                    <stop offset="0.927083" stopColor="#DCCA87" stopOpacity="0.24"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <span className='text-primary text-comorant'>SCROLL</span>
                    </div>
                </div>
            </section>
            <main>
                <section className='bg-about'>
                    <div className="py-32 flex justify-center items-center gap-12 relative">
                        <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[391px] font-comorant font-bold text-[#272727]'>G</p>
                        <article className='flex flex-col items-end max-w-lg gap-4 z-10'>
                            <h3 className='text-primary font-comorant tracking-[0.03em] text-6xl '>About Us</h3>
                            <svg width="40" height="9" viewBox="0 0 40 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_0_248)">
                                    <path d="M6.49841 0C2.91507 0 0 2.01871 0 4.50005C0 6.98139 2.91507 9 6.49841 9C9.8878 9 12.6779 7.19363 12.97 4.8982H17.6471V5.8448L40 5.8448V3.15554L17.647 3.15554V4.10202H12.9699C12.6777 1.80648 9.8878 0 6.49841 0ZM18.5102 3.95161L39.1367 3.95161V5.04839H18.5102V3.95161ZM12.1338 4.50005C12.1338 6.54222 9.60563 8.2036 6.49829 8.2036C3.39095 8.2036 0.862811 6.54222 0.862811 4.50005C0.862811 2.45778 3.39095 0.796295 6.49829 0.796295C9.60563 0.796295 12.1338 2.45778 12.1338 4.50005Z" fill="#DCCA87"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_248">
                                        <rect width="40" height="9" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className='leading-9 tracking-[0.04em] text-right'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                            <button className='btn-pry'>Know More</button>
                        </article>
                        <img src={knife} alt="" className='h-[400px] z-10' />
                        <article className='flex flex-col items-start max-w-lg gap-4 z-10'>
                            <h3 className='text-primary font-comorant tracking-[0.03em] text-6xl '>Our History</h3>
                            <svg width="40" height="9" viewBox="0 0 40 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_0_257)">
                                    <path d="M33.5016 9C37.0849 9 40 6.98129 40 4.49995C40 2.01861 37.0849 0 33.5016 0C30.1122 0 27.3221 1.80637 27.03 4.1018H22.3529V3.1552L0 3.1552V5.84446L22.353 5.84446V4.89798H27.0301C27.3223 7.19352 30.1122 9 33.5016 9ZM21.4898 5.04839L0.863293 5.04839V3.95161L21.4898 3.95161V5.04839ZM27.8662 4.49995C27.8662 2.45778 30.3944 0.796403 33.5017 0.796403C36.6091 0.796403 39.1372 2.45778 39.1372 4.49995C39.1372 6.54222 36.6091 8.2037 33.5017 8.2037C30.3944 8.2037 27.8662 6.54222 27.8662 4.49995Z" fill="#DCCA87"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_257">
                                        <rect width="40" height="9" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className='leading-9 tracking-[0.04em]'>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
                            <button className='btn-pry'>Know More</button>
                        </article>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home
