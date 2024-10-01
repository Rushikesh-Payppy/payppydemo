'use client';
// import "@/styles/Homepage.css";
import Image from "next/image";
import SenseiStudio from '@/Images/payppyhomepage/senseiStudio.svg';
import PayppyStore from '@/Images/payppyhomepage/payppyStore.svg';
import Arrow from '@/Images/payppyhomepage/arrow.svg';
import Arrow2 from '@/Images/payppyhomepage/arrow2.svg';
import { Plus_Jakarta_Sans } from "next/font/google";

import "@/styles/tailwindcss.css";
import Link from "next/link";
import '@/styles/Typography.css';
import { useRouter } from "next/navigation";
import TextRevealComponent from "../TextRevealComponent";

const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})
function Section() {
    
    let router=useRouter();



   
    return(
        <>
            <section className={"payppy-2-homepage-section bg-custom-almostblack flex flex-col-reverse lg:flex-row "+plus_jakarta_sans.className}>

                <div className='payppy-2-store-container flex flex-col items-center justify-center relative' onClick={()=>{router.push('https://payppy.app/')}} >
                    <div className="payppy-store-img-box relative" data-aos="fade-up">
                               <Image src={PayppyStore}
                                width={300}
                                height={368}
                                className="payppy-store-img"
                                alt="img"
                                />
                                <div className="green-gradient-1-box"></div>
                                <div className="green-gradient-2-box"></div>
                    </div>
                    <div className="store-corner-arrow absolute" data-aos="fade-up">    
                        <Image src={Arrow}
                            width={40}
                            height={40}
                            alt="img"
                            className="store-corner-arrow-img"
                        />
                    </div>
                    <div className="pt-8 sm:pt-12 pb-4 reletive  green-gradient-container" data-aos="fade-up">
                        <div className="payppy-app-2-title-para-container mx-auto pb-10">
                            <h3 className="payppy-app-2-title text-center pb-1 common-h5-heading text-custom-white"  >Payppy.app</h3>
                            <p className="payppy-app-2-para text-center common-paragraph text-custom-ghostgrey"  >The best shopping experience for the Gen Z and Millennials of India!</p>

                        </div>
                        <div className="text-center">
                            <Link href='https://payppy.app/' className='learn-more-link ' data-aos="fade-up">LEARN MORE</Link>
                        </div>
                        
                    </div>
                    {/* <div className="green-gradient-3-box"></div> */}

                </div>

                <div className='sensei-studio-box flex items-center justify-center flex-col relative' onClick={()=>{router.push('/sensei-studio')}}>
                    <div className="sensei-img-box relative" data-aos="fade-up">
                                <Image src={SenseiStudio}
                                width={300}
                                height={368}
                                className="sensei-img"
                                alt="img"
                                />
                    </div>
                        <div className="store-corner-arrow absolute" data-aos="fade-up">
                                <Image src={Arrow}
                                    width={40}
                                    height={40}
                                    className="store-corner-arrow-img"
                                    alt="img"
                                    />
                                   
                        </div>
                    <div className="pt-8 sm:pt-12 pb-4 relative blue-gradient-container" data-aos="fade-up">
                        <div className="sensei-studio-2-title-para-container mx-auto pb-10">
                            <h3 className="payppy-app-2-title text-center pb-1 common-h5-heading text-custom-white"  >Sensei Studio</h3>
                            <p className="payppy-app-2-para text-center common-paragraph text-custom-ghostgrey"  >The best design and development agency for businesses in India Canada and the US.</p>
                        </div>
                        <div className="text-center">
                            <Link href='/sensei-studio' className='learn-more-link '  data-aos="fade-up">LEARN MORE</Link>
                        </div>
                        <div className="blue-gradient-1-box"></div>
                        <div className="blue-gradient-2-box"></div>
                    </div>

                    {/* <div className="blue-gradient-3-box"></div> */}

                </div> 
                

            </section>
            <TextRevealComponent/>
        </>
    )
}

export default Section;
























