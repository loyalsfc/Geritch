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
import { supabase } from '../supabaseClient';


function Home() {  

    return (
        <>
            <section className='pb-8 mb-24'>
                <div className="container mx-auto flex items-center px-28 gap-14 relative">
                    <article className=' w-1/2 flex flex-col gap-2 shrink-0 pr-6'>
                        <h3 className='font-comorant font-bold text-2xl tracking-[0.04em] text-white'>Chase the new Flavour</h3>
                        <Icon />
                        <h1 className='font-comorant font-bold leading-[120%] text-[90px] text-primary tracking-[0.04em]'>The key to Fine dining</h1>
                        <p className='leading-[175%] tracking-[0.04em] mb-2'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                        <button className='btn-pry'>Explore Menu</button>
                    </article>
                    <ImageFrame image={hero} />
                    <div className='flex flex-col items-center absolute bottom-0 right-0'>
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
                                <g clipPath="url(#clip0_0_257)">
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
                                <p className='leading-[170%]'>
                                    <svg className='inline' width="47" height="41" viewBox="0 0 47 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.9137 23.3571C15.3163 23.3571 17.2183 24.1592 18.6198 25.7632C20.1214 27.2669 20.8722 29.2719 20.8722 31.7782C20.8722 34.485 19.9712 36.6404 18.1693 38.2444C16.4675 39.7481 14.115 40.5 11.1118 40.5C7.60809 40.5 4.85517 39.1466 2.85304 36.4399C0.951012 33.7331 0 29.8734 0 24.8609C0 20.3496 1.00107 16.1892 3.00319 12.3797C5.00533 8.46992 8.00852 4.56015 12.0128 0.650374C12.1129 0.550125 12.263 0.5 12.4633 0.5C12.7636 0.5 13.0138 0.650374 13.2141 0.951122C13.4143 1.25188 13.4143 1.5025 13.2141 1.703C8.30884 6.71553 5.85623 12.6303 5.85623 19.4474C5.85623 22.2544 6.35676 24.3095 7.35783 25.6128C8.25879 24.109 10.1108 23.3571 12.9137 23.3571ZM39.0415 23.3571C41.4441 23.3571 43.3461 24.1592 44.7476 25.7632C46.2492 27.2669 47 29.2719 47 31.7782C47 34.485 46.099 36.6404 44.2971 38.2444C42.5953 39.7481 40.2428 40.5 37.2396 40.5C33.7359 40.5 30.983 39.1466 28.9808 36.4399C27.0788 33.7331 26.1278 29.8734 26.1278 24.8609C26.1278 20.3496 27.1289 16.1892 29.131 12.3797C31.1331 8.46992 34.1363 4.56015 38.1406 0.650374C38.2407 0.550125 38.3908 0.5 38.5911 0.5C38.8914 0.5 39.1416 0.650374 39.3419 0.951122C39.5421 1.25188 39.5421 1.5025 39.3419 1.703C34.4366 6.71553 31.984 12.6303 31.984 19.4474C31.984 22.2544 32.4846 24.3095 33.4856 25.6128C34.3866 24.109 36.2386 23.3571 39.0415 23.3571Z" fill="white"/>
                                    </svg>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit . auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
                                </p>
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
                <section className='bg-insta py-11'>
                    <div className="container mx-auto flex items-center">
                        <article className='max-w-md'>
                            <HeadTitle title="Instagram" subtitle="Photo Gallery" />
                            <p className='mt-6 mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                            <button className="btn-pry">View More</button>
                        </article>
                        <div className='flex flex-nowrap overflow-x-scroll gap-4'>
                            <GalleryImage img={insta1} />
                            <GalleryImage img={insta2} />
                            <GalleryImage img={insta3} />
                            <GalleryImage img={insta4} />
                            <GalleryImage img={insta5} />
                        </div>
                    </div>
                </section>
                <section className='bg-about py-28'>
                    <div className="container mx-auto relative gap-24 px-28 flex items-center">
                        <article className='flex flex-col gap-16'>
                            <HeadTitle title="Contact" subtitle="Find Us" />
                            <article>
                                <p className='leading-[175%] mb-8'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
                                <h4 className='text-primary font-comorant font-bold text-2xl mb-4'>Opening Hours</h4>
                                <p className='text-white leading-[175%]'>Mon - Fri: 10:00 am - 02:00 am <br /> Sat - Sun: 10:00 am - 03:00 am</p>
                            </article>
                            <button className="btn-pry">Visit Us</button>
                        </article>
                        <ImageFrame image={findUs} />
                    </div>
                </section>
            </main>
            <footer className='bg-about relative pb-32'>
                <div className='h-[150px] w-screen bg-primaryBlack absolute top-0 right-0'/>
                <div className="container mx-auto  z-30 relative">
                    <div className="max-w-4xl mb-28 bg-[#0C0C0C] mx-auto text-center shadow-newsletter border  border-primary/20 py-16 px-28">
                        <article className='flex flex-col items-center mb-16'>
                            <h4 className='text-white font-comorant text-2xl font-bold'>Newsletter</h4>
                            <Icon />
                            <h3 className='text-5xl font-comorant text-primary mb-6'>Subscribe To Our Newsletter</h3>
                            <p>And never miss latest updates</p>
                        </article>
                        <div className='flex items-center justify-between gap-8'>
                            <input type="text" className='border border-[#F5EFDB] flex-1 px-4 py-5 bg-transparent text-white' placeholder='Email Address'/>
                            <button className="btn-pry">Subscribe</button>
                        </div>
                    </div>
                    <div className='max-w-4xl mx-auto grid grid-cols-3 gap-20 place-content-center text-center'>
                        <article>
                            <h4 className='text-3xl color-[#F5EFDB] font-comorant mb-6'>Contact Us</h4>
                            <p className='leading-[175%]'>
                                <span className='block mb-4'>9 W 53rd St, New York, NY 10019, USA </span>
                                +1 212-344-1230 <br />
                                +1 212-555-1230
                            </p>
                        </article>
                        <article className='flex flex-col items-center'>
                            <h3 className="font-comorant mb-8 text-primary text-5xl font-bold">GERICHT</h3>
                            <p className='text-white leading-[175%] mb-4'>"The best way to find yourself is to lose yourself in the service of others.”</p>
                            <Icon />
                            <div className='flex gap-4 mt-4'>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.62 5.32003H17.5V2.14003C16.5897 2.04538 15.6751 1.99865 14.76 2.00003C12.04 2.00003 10.18 3.66003 10.18 6.70003V9.32003H7.10999V12.88H10.18V22H13.86V12.88H16.92L17.38 9.32003H13.86V7.05003C13.86 6.00003 14.14 5.32003 15.62 5.32003Z" fill="#F5EFDB"/>
                                </svg>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.4912 3.95021C23.4913 3.77357 23.4447 3.60007 23.3559 3.44735C23.2671 3.29464 23.1395 3.16817 22.986 3.08084C22.8324 2.9935 22.6585 2.94842 22.4819 2.95017C22.3053 2.95193 22.1323 3.00046 21.9805 3.09083C21.3952 3.43921 20.765 3.70601 20.1075 3.88383C19.1685 3.07806 17.9708 2.63713 16.7335 2.64164C15.3761 2.6432 14.0724 3.17223 13.0977 4.11702C12.123 5.06181 11.5537 6.3484 11.5099 7.70512C8.83384 7.27838 6.40849 5.88164 4.69631 3.78126C4.59315 3.65609 4.4614 3.55757 4.31217 3.494C4.16295 3.43043 4.00062 3.40368 3.83889 3.41601C3.67725 3.42932 3.52128 3.4818 3.38448 3.56892C3.24768 3.65603 3.13416 3.77516 3.05373 3.91601C2.64126 4.63582 2.40436 5.44276 2.36228 6.27131C2.3202 7.09986 2.47412 7.92666 2.81154 8.68456L2.80959 8.68651C2.65794 8.77991 2.53278 8.91066 2.44609 9.06625C2.35941 9.22185 2.31409 9.39708 2.31447 9.57519C2.31263 9.72211 2.32145 9.86898 2.34084 10.0146C2.44298 11.2729 3.00062 12.4507 3.9092 13.3271C3.84756 13.4446 3.80994 13.5731 3.79854 13.7052C3.78714 13.8373 3.80218 13.9704 3.84279 14.0967C4.2389 15.3308 5.08129 16.3727 6.2051 17.0185C5.06334 17.46 3.83052 17.614 2.61525 17.4668C2.39032 17.4386 2.16248 17.4876 1.9691 17.6059C1.77572 17.7242 1.62828 17.9047 1.55097 18.1178C1.47365 18.3309 1.47106 18.5639 1.54361 18.7787C1.61616 18.9935 1.75955 19.1772 1.95025 19.2998C4.04034 20.646 6.47393 21.3617 8.96002 21.3613C11.7793 21.393 14.53 20.4921 16.7843 18.7988C19.0385 17.1054 20.67 14.7145 21.4248 11.998C21.7779 10.8146 21.9582 9.58648 21.96 8.35157C21.96 8.28614 21.96 8.21876 21.959 8.15138C22.4811 7.58831 22.8856 6.92668 23.1487 6.20527C23.4118 5.48387 23.5283 4.7172 23.4912 3.95021ZM20.1846 7.16212C20.0194 7.35746 19.9358 7.60891 19.9512 7.86427C19.961 8.02927 19.96 8.19527 19.96 8.35157C19.9579 9.39511 19.805 10.4329 19.5059 11.4326C18.8894 13.744 17.515 15.7817 15.603 17.2192C13.6909 18.6568 11.3517 19.4111 8.96002 19.3613C8.1009 19.3616 7.24474 19.2606 6.40924 19.0606C7.47465 18.7172 8.47083 18.1879 9.35162 17.4971C9.51385 17.3693 9.63257 17.1945 9.69151 16.9967C9.75044 16.7988 9.7467 16.5875 9.68079 16.3918C9.61489 16.1961 9.49005 16.0257 9.3234 15.9038C9.15675 15.7819 8.95647 15.7145 8.75002 15.7109C7.91885 15.698 7.12515 15.363 6.53615 14.7764C6.68557 14.7481 6.83401 14.7129 6.98147 14.6709C7.19748 14.6094 7.38651 14.477 7.51813 14.295C7.64975 14.1131 7.71629 13.8921 7.70704 13.6677C7.6978 13.4433 7.6133 13.2285 7.46715 13.058C7.32101 12.8874 7.12173 12.7711 6.90139 12.7275C6.41893 12.6323 5.96494 12.427 5.5747 12.1277C5.18447 11.8284 4.86852 11.4432 4.65139 11.002C4.83212 11.0266 5.014 11.0419 5.19631 11.0479C5.41289 11.0511 5.6249 10.9854 5.80169 10.8603C5.97847 10.7351 6.11086 10.5569 6.17971 10.3516C6.24569 10.1443 6.24229 9.92123 6.17004 9.7161C6.09778 9.51096 5.96061 9.33499 5.77932 9.21485C5.33947 8.92182 4.97916 8.52427 4.73068 8.0578C4.48219 7.59134 4.35328 7.07052 4.35549 6.54201C4.35549 6.47561 4.35744 6.4092 4.36135 6.34377C6.60261 8.43402 9.50967 9.66621 12.5703 9.82326C12.7248 9.82934 12.8787 9.80024 13.0203 9.73816C13.1619 9.67607 13.2875 9.58262 13.3877 9.46486C13.4869 9.34596 13.5571 9.20566 13.5929 9.05501C13.6286 8.90437 13.6289 8.74748 13.5937 8.5967C13.5366 8.35806 13.5074 8.11357 13.5068 7.86818C13.5077 7.01271 13.848 6.19254 14.4529 5.58764C15.0578 4.98274 15.878 4.64251 16.7334 4.64161C17.1736 4.64043 17.6092 4.7305 18.0127 4.90615C18.4163 5.0818 18.7791 5.3392 19.0781 5.66212C19.1935 5.7862 19.3386 5.87871 19.4998 5.93085C19.661 5.98299 19.8329 5.99303 19.999 5.96001C20.4098 5.88006 20.8147 5.7724 21.2109 5.63775C20.9407 6.19072 20.5953 6.70369 20.1846 7.16212Z" fill="#F5EFDB"/>
                                </svg>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.84 5.46C17.6027 5.46 17.3707 5.53038 17.1733 5.66224C16.976 5.79409 16.8222 5.98151 16.7313 6.20078C16.6405 6.42005 16.6168 6.66133 16.6631 6.89411C16.7094 7.12689 16.8236 7.34071 16.9915 7.50853C17.1593 7.67635 17.3731 7.79064 17.6059 7.83694C17.8387 7.88324 18.0799 7.85948 18.2992 7.76866C18.5185 7.67783 18.7059 7.52402 18.8378 7.32668C18.9696 7.12935 19.04 6.89734 19.04 6.66C19.04 6.34174 18.9136 6.03652 18.6885 5.81147C18.4635 5.58643 18.1583 5.46 17.84 5.46ZM22.44 7.88C22.4206 7.0503 22.2652 6.2294 21.98 5.45C21.7257 4.78313 21.33 4.17928 20.82 3.68C20.3248 3.16743 19.7196 2.77418 19.05 2.53C18.2727 2.23616 17.4508 2.07721 16.62 2.06C15.56 2 15.22 2 12.5 2C9.78 2 9.44 2 8.38 2.06C7.54915 2.07721 6.72734 2.23616 5.95 2.53C5.28168 2.77665 4.67693 3.16956 4.18 3.68C3.66743 4.17518 3.27418 4.78044 3.03 5.45C2.73616 6.22734 2.57721 7.04915 2.56 7.88C2.5 8.94 2.5 9.28 2.5 12C2.5 14.72 2.5 15.06 2.56 16.12C2.57721 16.9508 2.73616 17.7727 3.03 18.55C3.27418 19.2196 3.66743 19.8248 4.18 20.32C4.67693 20.8304 5.28168 21.2234 5.95 21.47C6.72734 21.7638 7.54915 21.9228 8.38 21.94C9.44 22 9.78 22 12.5 22C15.22 22 15.56 22 16.62 21.94C17.4508 21.9228 18.2727 21.7638 19.05 21.47C19.7196 21.2258 20.3248 20.8326 20.82 20.32C21.3322 19.8226 21.7283 19.2182 21.98 18.55C22.2652 17.7706 22.4206 16.9497 22.44 16.12C22.44 15.06 22.5 14.72 22.5 12C22.5 9.28 22.5 8.94 22.44 7.88ZM20.64 16C20.6327 16.6348 20.5178 17.2637 20.3 17.86C20.1403 18.2952 19.8839 18.6884 19.55 19.01C19.2256 19.3405 18.8332 19.5964 18.4 19.76C17.8037 19.9778 17.1748 20.0927 16.54 20.1C15.54 20.15 15.17 20.16 12.54 20.16C9.91 20.16 9.54 20.16 8.54 20.1C7.88089 20.1123 7.22459 20.0109 6.6 19.8C6.18578 19.6281 5.81136 19.3728 5.5 19.05C5.16809 18.7287 4.91484 18.3352 4.76 17.9C4.51586 17.2952 4.38044 16.6519 4.36 16C4.36 15 4.3 14.63 4.3 12C4.3 9.37 4.3 9 4.36 8C4.36448 7.35106 4.48295 6.70795 4.71 6.1C4.88605 5.67791 5.15627 5.30166 5.5 5C5.80381 4.65617 6.17929 4.3831 6.6 4.2C7.20955 3.98004 7.852 3.86508 8.5 3.86C9.5 3.86 9.87 3.8 12.5 3.8C15.13 3.8 15.5 3.8 16.5 3.86C17.1348 3.86728 17.7637 3.98225 18.36 4.2C18.8144 4.36865 19.2223 4.64285 19.55 5C19.8777 5.30718 20.1338 5.68273 20.3 6.1C20.5223 6.70893 20.6373 7.35178 20.64 8C20.69 9 20.7 9.37 20.7 12C20.7 14.63 20.69 15 20.64 16ZM12.5 6.87C11.4858 6.87198 10.495 7.17453 9.65265 7.73942C8.81035 8.30431 8.15438 9.1062 7.76763 10.0438C7.38089 10.9813 7.28072 12.0125 7.47979 13.0069C7.67886 14.0014 8.16824 14.9145 8.88608 15.631C9.60392 16.3474 10.518 16.835 11.5129 17.0321C12.5077 17.2293 13.5387 17.1271 14.4755 16.7385C15.4123 16.35 16.2129 15.6924 16.7761 14.849C17.3394 14.0056 17.64 13.0142 17.64 12C17.6413 11.3251 17.5092 10.6566 17.2512 10.033C16.9933 9.40931 16.6146 8.84281 16.1369 8.36605C15.6592 7.88929 15.0919 7.51168 14.4678 7.25493C13.8436 6.99818 13.1749 6.86736 12.5 6.87ZM12.5 15.33C11.8414 15.33 11.1976 15.1347 10.65 14.7688C10.1023 14.4029 9.67552 13.8828 9.42348 13.2743C9.17144 12.6659 9.1055 11.9963 9.23398 11.3503C9.36247 10.7044 9.67963 10.111 10.1453 9.64533C10.611 9.17963 11.2044 8.86247 11.8503 8.73398C12.4963 8.6055 13.1659 8.67144 13.7743 8.92348C14.3828 9.17552 14.9029 9.60234 15.2688 10.15C15.6347 10.6976 15.83 11.3414 15.83 12C15.83 12.4373 15.7439 12.8703 15.5765 13.2743C15.4092 13.6784 15.1639 14.0454 14.8547 14.3547C14.5454 14.6639 14.1784 14.9092 13.7743 15.0765C13.3703 15.2439 12.9373 15.33 12.5 15.33Z" fill="#F5EFDB"/>
                                </svg>
                            </div>
                        </article>
                        <article>
                            <h4 className='text-3xl color-[#F5EFDB] font-comorant mb-6'>Working Hour</h4>
                            <p className='leading-[175%]'>
                                <span className='block mb-1'>
                                    Monday-Friday: <br />
                                    08:00am - 12:00am
                                </span>
                                <span className='block'>
                                    Saturday-Sunday: <br />
                                    07:00am - 11:00pm
                                </span>
                            </p>
                        </article>
                    </div>
                    <div className="flex flex-col items-center w-fit top-1/2 absolute right-10">
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
            </footer>
        </>
    )
}

export default Home
