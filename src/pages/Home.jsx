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
import award2 from '../assets/award-2.svg'
import award1 from '../assets/award-1.svg'
import award5 from '../assets/award-5.svg'
import award3 from '../assets/award-3.svg'
import tomatoSause from '../assets/tomato-sause.png'

function Home() {
    return (
        <>
            <section className='py-8 mb-24'>
                <div className="container mx-auto flex items-center px-28 gap-14 relative">
                    <article className=' w-1/2 flex flex-col gap-2 shrink-0 pr-6'>
                        <h3 className='font-comorant font-bold text-2xl tracking-[0.04em] text-white'>Chase the new Flavour</h3>
                        <Icon />
                        <h1 className='font-comorant font-bold leading-[120%] text-[90px] text-primary tracking-[0.04em]'>The key to Fine dining</h1>
                        <p className='leading-[175%] tracking-[0.04em] '>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                        <button className='btn-pry'>Explore Menu</button>
                    </article>
                    <ImageFrame image={hero} />
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
                <section>
                    <div className="container mx-auto py-28">
                        <article className='flex flex-col gap-2 items-center mb-16 font-comorant'>
                            <h3 className='text-2xl font-bold leading-[130%] tracking-[0.04em] text-white '>Menu that Fits You Palatte</h3>
                            <Icon />
                            <p className='text-primary tracking-[0.04em] text-6xl font-semibold'>Today's Special</p>
                        </article>
                        <div className='flex items-center mb-16'>
                            <div className='shrink-0 grow-0 w-1/3'>
                                <TodaySpecial title="Wine & Bear">
                                    <MenuItem name="Chapel Hill Shiraz" price="56" note="AU | Bottle" />
                                    <MenuItem name="Catena Malbec" price="59" note="AR | Bottle" />
                                    <MenuItem name="La Vieille Rosé" price="44" note="FR | 750 ml" />
                                    <MenuItem name="Rhino Pale Ale" price="31" note="CA | 750 ml" />
                                    <MenuItem name="Irish Guinness" price="26" note="IE | 750 ml" />
                                </TodaySpecial>
                            </div>
                            <div className="">
                                <img src={cocktail} alt="" />
                            </div>
                            <div className='shrink-0 grow-0 w-1/3'>
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
                <section className='bg-about py-28'>
                    <div className="container mx-auto">
                        <div className="flex flex-row-reverse items-center px-28 gap-14">
                            <div className='w-1/2 flex flex-col gap-10'>
                                <HeadTitle title="Chef's Word" subtitle="What We Believe In"/>
                                <p className='leading-[170%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit . auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
                                <article>
                                    <h4 className='text-3xl text-primary font-comorant'>Kevin Luo</h4>
                                    <p className='leading-[175%]'>Chef & Founder</p>
                                </article>
                                <p className='font-bestermind text-6xl '>Kevin Luo</p>
                            </div>
                            <ImageFrame image={chef} />
                        </div>
                    </div>
                </section>
                <section className='h-screen overflow-hidden relative'>
                    <div className="absolute h-full w-full top-0 left-0 bg-black/[0.4] grid place-content-center">
                        <button className='h-28 w-28 border grid place-content-center border-primary rounded-full'>
                            <svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 14.5L0 29L0 0L24 14.5Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                    <video src={video} poster="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" loop className="h-full w-full object-cover"></video>
                </section>
                <section className='bg-about py-28'>
                    <div className="container mx-auto relative">
                        <img src={rounded} alt="" className='absolute left-0 -top-12 h-24'/>
                        <div className='flex items-center gap-16 px-28 relative'>
                            <article>
                                <HeadTitle title="Awards & Recognition" subtitle="Our Laurels"/>
                                <div className='grid grid-cols-2 gap-y-16 mt-16'>
                                    <Awards logo={award2} title="Bib Gourmond"/>
                                    <Awards logo={award1} title="Rising Star"/>
                                    <Awards logo={award5} title="AA Hospitality"/>
                                    <Awards logo={award3} title="Outstanding Chef"/>
                                </div>
                            </article>
                            <div className='relative'>
                                <p className='absolute top-3/4 -left-12 font-comorant text-[360px] text-[#FAFAFA] opacity-80 font-bold'>G</p>
                                <img src={tomatoSause} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home
