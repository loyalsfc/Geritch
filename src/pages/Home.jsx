import hero from '../assets/hero-image.png';
import knife from '../assets/knife.png'
import { Icon } from '../components/Icon';
import TodaySpecial, { MenuItem } from '../components/TodaySpecial';
import cocktail from '../assets/cocktail.png'
import chef from '../assets/chef.png'
import ImageFrame from '../components/ImageFrame';
import video from '../assets/video.mp4'
import rounded from '../assets/rounded.png'
import HeadTitle from '../components/HeadTitle';
import Awards from '../components/Awards';
import award2 from '../assets/awards/award-2.svg'
import award1 from '../assets/awards/award-1.svg'
import award5 from '../assets/awards/award-5.svg'
import award3 from '../assets/awards/award-3.svg'
import tomatoSause from '../assets/tomato-sause.png'
import insta1 from '../assets/insta/insta-1.png'
import insta5 from '../assets/insta/insta-5.png'
import insta4 from '../assets/insta/insta-4.png'
import insta3 from '../assets/insta/insta-3.png'
import insta2 from '../assets/insta/insta-2.png'
import GalleryImage from '../components/GalleryImage';
import findUs from '../assets/find-us.png'
import Footer from '../components/Footer';
import { motion } from "framer-motion"
import { useRef } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const videoPlayer = useRef(null)
    const playBtn = useRef()
    const videoPlayerOverlay = useRef()
    
    const scrollTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    const playVideo = () => {
        console.log('playClicked')
        videoPlayer.current.play()
    }
    
    function videoPlaying(e){
        e.target.controls = true;
        videoPlayerOverlay.current.classList.add('hidden')
    }   

    function videoPaused(e){
        e.target.controls = false
        videoPlayerOverlay.current.classList.remove('hidden')
    }

    return (
        <>
            <svg className='absolute -z-10 -top[649px]' width="1501" height="8595" viewBox="0 0 1501 8595" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.2" d="M1396 -649C963.167 -633.167 43.6 -430.7 -172 252.5C-387.6 935.7 322.833 1673.5 705 1957C1116.17 2228.33 1691.8 3333.5 705 5583.5C-528.5 8396 -362.5 8610.5 705 10042.5L1498.5 11071.5C1231.83 11106.8 724.1 11376.9 826.5 12174.5C928.9 12972.1 -168.167 13896.5 -729.5 14259" stroke="#ABABAB" strokeWidth="2"/>
                </svg>
            <section className='pb-8 md:mb-24'>
                <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center md:justify-between lg:px-28 gap-8 lg:gap-14 relative">
                    <motion.article
                        initial={{ opacity: 0, scale: 0.5}} 
                        whileInView={{opacity: 1, scale: 1}}
                        transition={{duration: 0.5}}
                        viewport={{once: true}}
                        className='md:w-1/2 mt-6 flex flex-col gap-2 shrink-0 lg:pr-6'
                    >
                        <h3 className='font-comorant font-bold text-2xl tracking-[0.04em] text-white'>Chase the new Flavour</h3>
                        <Icon />
                        <h1 className='font-comorant font-bold leading-[120%] text-5xl md:text-7xl lg:text-[90px] text-primary tracking-[0.04em]'>The key to Fine dining</h1>
                        <p className='leading-[175%] tracking-[0.04em] mb-2'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                        <Link to="/meals"><button className='btn-pry'>Explore Menu</button></Link>
                    </motion.article>
                    <ImageFrame image={hero} />
                    <div onClick={()=>
                            window.scrollTo({top: window.innerHeight, left: 0, behavior: 'smooth'})
                        } 
                        className='flex flex-col cursor-pointer items-center absolute bottom-0 right-2 md:right-0'
                    >
                        <svg width="1" height="61" viewBox="0 0 1 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.499878 61L0.499884 0" stroke="url(#paint0_linear_0_54)"/>
                            <defs>
                                <linearGradient id="paint0_linear_0_54" x1="29.0041" y1="-11.8571" x2="29.0041" y2="78.2931" gradientUnits="userSpaceOnUse">
                                    <stop color="#DCCA87"/>
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
                <section className='bg-about bg-cover bg-no-repeat'>
                    <div className="container mx-auto px-4">
                        <div className="py-16 md:py-32 flex flex-col md:flex-row justify-center items-center md:gap-12 relative">
                            <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[391px] font-comorant font-bold text-[#272727]'>G</p>
                            <motion.article 
                                className='flex flex-col items-center md:items-end max-w-lg gap-4 z-10'
                                initial={{transform: "rotate(90deg)"}}
                                whileInView={{transform: "rotate(0)"}}
                                transition={{duration: 0.7}}
                                viewport={{ once: true }}
                            >
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
                                <p className='leading-9 tracking-[0.04em] text-center md:text-right'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                                <button className='btn-pry'>Know More</button>
                            </motion.article>
                            <motion.img
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                transition={{duration: 1}}
                                src={knife} 
                                alt="Image of knife" 
                                className='h-40 md:h-[400px] z-10 rotate-90 md:rotate-0 transition-all' 
                            />
                            <motion.article 
                                className='flex flex-col items-center md:items-start max-w-lg gap-4 z-10'
                                initial={{transform: "rotate(-90deg)"}}
                                whileInView={{transform: "rotate(0)"}}
                                transition={{duration: 0.7}}
                                viewport={{ once: true }}
                            >
                                <h3 className='text-primary font-comorant tracking-[0.03em] text-6xl '>Our History</h3>
                                <svg width="40" height="9" viewBox="0 0 40 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_0_257)">
                                        <path d="M33.5016 9C37.0849 9 40 6.98129 40 4.49995C40 2.01861 37.0849 0 33.5016 0C30.1122 0 27.3221 1.80637 27.03 4.1018H22.3529V3.1552L0 3.1552V5.84446L22.353 5.84446V4.89798H27.0301C27.3223 7.19352 30.1122 9 33.5016 9ZM21.4898 5.04839L0.863293 5.04839V3.95161L21.4898 3.95161V5.04839ZM27.8662 4.49995C27.8662 2.45778 30.3944 0.796403 33.5017 0.796403C36.6091 0.796403 39.1372 2.45778 39.1372 4.49995C39.1372 6.54222 36.6091 8.2037 33.5017 8.2037C30.3944 8.2037 27.8662 6.54222 27.8662 4.49995Z" fill="#DCCA87"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_257">
                                            <rect width="40" height="9" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className='leading-9 text-center md:text-left tracking-[0.04em]'>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
                                <button className='btn-pry'>Know More</button>
                            </motion.article>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container mx-auto py-28 px-0 md:px-0 overflow-hidden">
                        <motion.article
                            initial={{scale: 2}} 
                            whileInView={{scale: 1}}
                            transition={{duration: 0.5}}
                            viewport={{once: true}}
                            className='flex flex-col gap-2 items-center mb-8 md:mb-16 font-comorant'
                        >
                            <h3 className='text-2xl font-bold leading-[130%] tracking-[0.04em] text-white '>Menu that Fits You Palatte</h3>
                            <Icon />
                            <p className='text-primary text-center tracking-[0.04em] text-4xl md:text-6xl font-semibold'>Today's Special</p>
                        </motion.article>
                        <div className='flex flex-col sm:flex-row items-center mb-16 gap-8 sm:gap-0'>
                            <div className='shrink-0 grow-0 w-full sm:w-1/2 md:w-1/3'>
                                <TodaySpecial title="Wine & Bear">
                                    <MenuItem name="Chapel Hill Shiraz" price="56" note="AU | Bottle" />
                                    <MenuItem name="Catena Malbec" price="59" note="AR | Bottle" />
                                    <MenuItem name="La Vieille Rosé" price="44" note="FR | 750 ml" />
                                    <MenuItem name="Rhino Pale Ale" price="31" note="CA | 750 ml" />
                                    <MenuItem name="Irish Guinness" price="26" note="IE | 750 ml" />
                                </TodaySpecial>
                            </div>
                            <motion.div
                                initial={{borderRadius: '20%'}}
                                whileInView={{borderRadius: "0"}}
                                transition={{duration: 0.7}}
                                className="hidden md:block"
                            >
                                <img src={cocktail} alt="" />
                            </motion.div>
                            <div className='shrink-0 grow-0 w-full sm:w-1/2 md:w-1/3'>
                                <TodaySpecial title="Cocktails">
                                    <MenuItem name="Aperol Spritz" price="20" note="Aperol | Villa Marchesi prosecco | soda | 30ml" />
                                    <MenuItem name="Dark 'N' Stormy" price="16" note="Dark rum | Ginger beer | Slice of lime." />
                                    <MenuItem name="Daiquiri" price="10" note="Rum | Citrus juice | Sugar" />
                                    <MenuItem name="Old Fashioned" price="31" note="Bourbon | Brown sugar | Angostura Bitters" />
                                    <MenuItem name="Negroni" price="26" note="Gin | Sweet Vermouth | Campari | Orange garnish" />
                                </TodaySpecial>
                            </div>
                        </div>
                        <button className="btn-pry mx-auto block">View More</button>
                    </div>
                </section>
                <section className='bg-about bg-cover bg-no-repeat py-28'>
                    <div className="container mx-auto px-4 md:px-0 overflow-hidden">
                        <div className="flex flex-col md:flex-row-reverse items-center md:justify-between lg:px-28 gap-14">
                            <div className='md:w-1/2 flex flex-col gap-10'>
                                <HeadTitle title="Chef's Word" subtitle="What We Believe In"/>
                                <motion.p
                                    initial={{opacity: 0}}
                                    whileInView={{opacity: 1}}
                                    variants={{once: true}} 
                                    transition={{duration: 0.70}}
                                    className='leading-[170%]'
                                >
                                    <svg className='inline' width="47" height="41" viewBox="0 0 47 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.9137 23.3571C15.3163 23.3571 17.2183 24.1592 18.6198 25.7632C20.1214 27.2669 20.8722 29.2719 20.8722 31.7782C20.8722 34.485 19.9712 36.6404 18.1693 38.2444C16.4675 39.7481 14.115 40.5 11.1118 40.5C7.60809 40.5 4.85517 39.1466 2.85304 36.4399C0.951012 33.7331 0 29.8734 0 24.8609C0 20.3496 1.00107 16.1892 3.00319 12.3797C5.00533 8.46992 8.00852 4.56015 12.0128 0.650374C12.1129 0.550125 12.263 0.5 12.4633 0.5C12.7636 0.5 13.0138 0.650374 13.2141 0.951122C13.4143 1.25188 13.4143 1.5025 13.2141 1.703C8.30884 6.71553 5.85623 12.6303 5.85623 19.4474C5.85623 22.2544 6.35676 24.3095 7.35783 25.6128C8.25879 24.109 10.1108 23.3571 12.9137 23.3571ZM39.0415 23.3571C41.4441 23.3571 43.3461 24.1592 44.7476 25.7632C46.2492 27.2669 47 29.2719 47 31.7782C47 34.485 46.099 36.6404 44.2971 38.2444C42.5953 39.7481 40.2428 40.5 37.2396 40.5C33.7359 40.5 30.983 39.1466 28.9808 36.4399C27.0788 33.7331 26.1278 29.8734 26.1278 24.8609C26.1278 20.3496 27.1289 16.1892 29.131 12.3797C31.1331 8.46992 34.1363 4.56015 38.1406 0.650374C38.2407 0.550125 38.3908 0.5 38.5911 0.5C38.8914 0.5 39.1416 0.650374 39.3419 0.951122C39.5421 1.25188 39.5421 1.5025 39.3419 1.703C34.4366 6.71553 31.984 12.6303 31.984 19.4474C31.984 22.2544 32.4846 24.3095 33.4856 25.6128C34.3866 24.109 36.2386 23.3571 39.0415 23.3571Z" fill="white"/>
                                    </svg>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit . auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
                                </motion.p>
                                <motion.article
                                    initial={{scale: 0}}
                                    whileInView={{scale: [2,1]}}
                                    viewport={{once: true}}
                                >
                                    <h4 className='text-3xl text-primary font-comorant'>Kevin Luo</h4>
                                    <p className='leading-[175%]'>Chef & Founder</p>
                                </motion.article>
                                <p className='font-bestermind text-6xl '>Kevin Luo</p>
                            </div>
                            <ImageFrame image={chef} />
                        </div>
                    </div>
                </section>
                <section className='md:h-screen overflow-hidden relative'>
                    <div ref={videoPlayerOverlay} className="absolute h-full w-full top-0 left-0 bg-black/[0.4] grid place-content-center z-10">
                        <button onClick={playVideo} ref={playBtn} className='h-28 w-28 border grid place-content-center border-primary rounded-full'>
                            <svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 14.5L0 29L0 0L24 14.5Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                    <video 
                    ref={videoPlayer} 
                    src={video} 
                    onPlay={videoPlaying}
                    onPause={videoPaused}
                    poster="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                    loop 
                    className="h-full w-full object-cover"></video>
                </section>
                <section className='bg-about bg-cover bg-no-repeat py-28 relative'>
                    <div className="container mx-auto overflow-hidden">
                        <img src={rounded} alt="" className='absolute left-0 top-4 md:top-12 h-16 md:h-24'/>
                        <div className='flex items-center md:justify-between gap-8 md:gap-16 px-4 lg:px-28 relative'>
                            <article>
                                <HeadTitle title="Awards & Recognition" subtitle="Our Laurels"/>
                                <div className='grid sm:grid-cols-2 gap-y-16 mt-16'>
                                    <Awards logo={award2} title="Bib Gourmond"/>
                                    <Awards logo={award1} title="Rising Star"/>
                                    <Awards logo={award5} title="AA Hospitality"/>
                                    <Awards logo={award3} title="Outstanding Chef"/>
                                </div>
                            </article>
                            <motion.div
                                initial={{translateX: "50%"}} 
                                whileInView={{translateX: 0}}
                                transition={{duration: 1}}
                                viewport={{once: true}}
                                className='relative border border-primary/20 hidden lg:block'
                            >
                                <p className='absolute top-3/4 -left-12 font-comorant text-[360px] text-[#FAFAFA] opacity-80 font-bold'>G</p>
                                <img src={tomatoSause} alt="" />
                            </motion.div>
                        </div>
                    </div>
                </section>
                <section className='bg-insta bg-cover bg-no-repeat py-11 overflow-hidden'>
                    <div className="container mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center overflow-hidden">
                        <motion.article
                            initial={{opacity: 0, translateY: '50%'}}
                            whileInView={{opacity: 1, translateY: '0'}} 
                            transition={{duration: 0.7}}
                            viewport={{once: true}}
                            className='md:max-w-md mb-8 md:mb-0'
                        >
                            <HeadTitle title="Instagram" subtitle="Photo Gallery" />
                            <p className='mt-6 mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                            <button className="btn-pry">View More</button>
                        </motion.article>
                        <div className='flex flex-nowrap overflow-x-scroll md:px-4 gap-4 w-full md:w-fit'>
                            <GalleryImage img={insta1} />
                            <GalleryImage img={insta2} />
                            <GalleryImage img={insta3} />
                            <GalleryImage img={insta4} />
                            <GalleryImage img={insta5} />
                        </div>
                    </div>
                </section>
                <section className='bg-about bg-cover bg-no-repeat py-28'>
                    <div className="container overflow-hidden mx-auto relative gap-12 md:gap-24 px-4 lg:px-28 flex flex-col md:flex-row items-center md:justify-between">
                        <motion.article
                            initial={{translateX: '-50%'}} 
                            whileInView={{translateX: 0}}
                            transition={{duration: 0.8}}
                            viewport={{once: true}}
                            className='flex flex-col gap-4 md:gap-8 lg:gap-16'
                        >
                            <HeadTitle title="Contact" subtitle="Find Us" />
                            <article>
                                <p className='leading-[175%] mb-8'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
                                <h4 className='text-primary font-comorant font-bold text-2xl mb-4'>Opening Hours</h4>
                                <p className='text-white leading-[175%]'>Mon - Fri: 10:00 am - 02:00 am <br /> Sat - Sun: 10:00 am - 03:00 am</p>
                            </article>
                            <button className="btn-pry">Visit Us</button>
                        </motion.article>
                        <ImageFrame image={findUs} />
                    </div>
                </section>
            </main>
            <section className='bg-about bg-cover bg-no-repeat relative pb-16 md:pb-32'>
                <div className='h-[150px] w-screen bg-primaryBlack absolute top-0 right-0'/>
                <div className="container mx-auto px-4 z-30 relative">
                    <div className="max-w-4xl mb-28 bg-[#0C0C0C] mx-auto text-center shadow-newsletter border  border-primary/20 py-8 sm:py-16 px-4 sm:px-8 md:px-28">
                        <article className='flex flex-col items-center mb-8 sm:mb-16'>
                            <h4 className='text-white font-comorant text-2xl font-bold'>Newsletter</h4>
                            <Icon />
                            <h3 className='text-3xl md:text-5xl font-comorant text-primary mb-4 sm:mb-6'>Subscribe To Our Newsletter</h3>
                            <p>And never miss latest updates</p>
                        </article>
                        <div className='flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8'>
                            <input type="text" className='border border-[#F5EFDB] sm:flex-1 w-full px-4 py-5 bg-transparent text-white' placeholder='Email Address'/>
                            <button className="btn-pry">Subscribe</button>
                        </div>
                    </div>
                    <Footer />
                    <div onClick={scrollTop} className="flex flex-col items-center w-fit bottom-0 cursor-pointer lg:bottom-1/2 absolute right-4 lg:right-10">
                        <svg width="2" height="61" viewBox="0 0 2 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 61L1.00001 9.53674e-07" stroke="url(#paint0_linear_0_353)"/>
                            <defs>
                                <linearGradient id="paint0_linear_0_353" x1="29.5042" y1="-11.8571" x2="29.5042" y2="78.2931" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#DCCA87"/>
                                    <stop offset="0.430036" stopColor="#DCCA87"/>
                                    <stop offset="0.927083" stopColor="#DCCA87" stopOpacity="0.24"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <span className='text-primary font-comorant uppercase'>Top</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
