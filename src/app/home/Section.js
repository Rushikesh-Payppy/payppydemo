'use client';
// import "@/styles/Homepage.css";
import Image from "next/image";
import SenseiStudio from '@/Images/payppyhomepage/senseiStudio.svg';
import PayppyStore from '@/Images/payppyhomepage/payppyStore.svg';
import Arrow from '@/Images/payppyhomepage/arrow.svg';
import { Plus_Jakarta_Sans } from "next/font/google";
import '@/styles/Typography.css';
import '@/styles/tailwindcss.css';

import Link from "next/link";
import { useRouter } from "next/navigation";
import TextRevealComponent from "../TextRevealComponent";
import { useEffect } from "react";

const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})
function Section() {
    
    let router=useRouter();

    useEffect(()=>{
        router.prefetch('/payppy-india');
        router.prefetch('/sensei-studio')
    },[])

   
    return(
        <>
           <section className={"payppy-homepage-main-section bg-custom-almostblack flex flex-col-reverse lg:flex-row "+plus_jakarta_sans.className}>

               <div className="payppy-app-main-outer-container cursor-pointer  flex flex-col justify-center items-center  relative px-5 py-20 " onClick={()=>{router.push('/payppy-india')}}>
                    
                    <div className="payppy-app-content-container flex flex-col justify-center items-center gap-7 lg:gap-12 relative absolute">
                        <div className="payppy-store-img-container relative">
                            <Image src={PayppyStore} width={300} height={368} alt="img" className="max-w-none relative for-center-content payppy-store-img-container" quality={100}/>
                            {/* <div className="green-gradient-1 absolute "></div>
                            <div className="green-gradient-2 absolute "></div> */}
                            <div className="green-gradient absolute"></div>
                        </div>
                        <div className="flex flex-col justify-center items-center relative for-center-content gap-3">
                            <h5 className="common-h5-heading text-custom-lightgreu text-center ">Payppy.app</h5>
                            <p className="common-paragraph text-custom-ghostgrey text-center ">The best shopping experience for the Gen Z and Millennials of India!</p>
                            <Link href='/payppy-india' className="learn-more-link block sm:hidden" prefetch={true}>LEARN MORE</Link>
                        </div>

                    </div>
                    
                    <Image src={Arrow} width={40} height={40} alt="img" className="homepage-top-arrow absolute top-6 xl:top-8 right-8 hidden sm:block"/>

               </div>



               <div className="payppy-app-main-outer-container cursor-pointer  flex flex-col justify-center items-center  relative px-5 py-20 " onClick={()=>{router.push('/sensei-studio')}}>
                    
                    <div className="sensei-studio-main-outer-container flex flex-col justify-center items-center gap-7 lg:gap-12 relative absolute">
                        <div className="payppy-store-img-container relative">
                            <Image src={SenseiStudio} width={300} height={368} alt="img" className="max-w-none relative for-center-content" quality={100}/>
                            {/* <div className="blue-gradient-1 absolute "></div> */}
                            {/* <div className="blue-gradient-2 absolute "></div> */}
                            <div className="blue-gradient absolute"></div>
                        </div>
                        <div className="flex flex-col justify-center items-center relative for-center-content gap-3">
                            <h5 className="common-h5-heading text-custom-lightgreu  text-center ">Sensei Studio</h5>
                            <p className="common-paragraph text-custom-ghostgrey text-center ">The best design and development agency for businesses in India Canada and the US.</p>
                            <Link href='/sensei-studio' className="learn-more-link block sm:hidden" prefetch={true}>LEARN MORE</Link>
                        </div>

                    </div>
                    
                    <Image src={Arrow} width={40} height={40} alt="img" className="homepage-top-arrow absolute top-6 sm:top-8 right-8 hidden sm:block" quality={100}/>

               </div>

            </section>

            <TextRevealComponent/>
        </>
    )
}

export default Section;
























