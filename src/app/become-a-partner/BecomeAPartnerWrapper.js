'use client';
import Image from "next/image";
import dynamic from 'next/dynamic';

// Dynamically import the Lottie component
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import Rocket from '@/lottie/Rocket.json';

//Components
import Header from "../home/Header";
import BecomeAPartnerSection from "./BecomeAPartnerSection";
import Footer from "../home/Footer";

//Images
import MoonSurface from '@/Images/becomeapartnerpage/moon-surface-asset.png';
import Rocketplatform from '@/Images/becomeapartnerpage/rocket-platform.svg';


function BecomeAPartnerWrapper() {
    return (
        <>
            <Header />
            <BecomeAPartnerSection />
            <div className=" pb-[168px] sm:pb-[198px] lg:pb-56 bg-custom-almostblack relative">
                <Footer />
                <Image src={MoonSurface} width={892} height={69} alt='img' quality={100} className='absolute bottom-0 lg:fixed lg:right-0 z-[1] ' />
                <Lottie animationData={Rocket} loop={true} className=' h-40 w-40 absolute bottom-8 lg:fixed left-1/2 lg:left-[71.9%] -translate-x-1/2 mx-auto z-[2] object-contain' />
                <Image src={Rocketplatform} width={156} height={44} alt="img" quality={100} className=" absolute bottom-0  lg:fixed left-1/2 lg:left-[72%] -translate-x-1/2 mx-auto z-[1] object-contain" />
            </div>
        </>
    )
}

export default BecomeAPartnerWrapper;