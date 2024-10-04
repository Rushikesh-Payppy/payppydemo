import { Plus_Jakarta_Sans } from "next/font/google";
import '@/styles/tailwindcss.css';
import Link from "next/link";
import Image from "next/image";
import Arrow from '@/Images/landingpage/btnArrow.svg';
import LandingHeadStore from '@/Images/landingpage/LandingHeadStore.png';
import LandingHeadSmallStore from '@/Images/landingpage/landingPageStore.png';
import '@/styles/Typography.css';
import '@/styles/landingpage/LandingPage.css';
import TextRevealComponent from "../TextRevealComponent";


const plus_jakarta_sans=Plus_Jakarta_Sans({
  subsets:['latin'],
  display:'swap'  
})
function LandingPageHeader() {
    return(
        <>
        <header className={"landing-page-header bg-custom-almostblack px-5 pt-20 md:px-10 lg:px-36 md:pt-32 flex flex-col justify-center items-center "+plus_jakarta_sans.className}>
            <h1 className="experience-seamless-title common-h1-heading pb-10 " data-aos="fade-up">Experience seamless shopping like never before.</h1>
            <p className="landing-page-para common-paragraph text-center text-custom-ghostgrey" data-aos="fade-up">Drip styles and hottest collections from multiple brands, brought exclusively for the Gen Z and Millennials of India.</p>
            <div className="mt-10 mb-20">
                <button className={"visit-payppy-btn mx-auto flex  items-center justify-center "+plus_jakarta_sans.className} data-aos="fade-up">
                    <Link href='https://payppy.app/' target='_blank' className={"visit-payppy-txt " +plus_jakarta_sans.className } >VISIT PAYPPY.APP</Link>
                    <div className="btn-arrow-img-box relative">
                        <Image src={Arrow} 
                        width={28}
                        height={28}
                        alt="img"
                        className="btn-arrow-img"
                        />
                    </div>
                </button>
            </div>

            <div className="landing-page-header-img-box flex justify-center w-100 ">
                <Image src={LandingHeadStore}
                width={1063.25}
                height={643.82}
                alt="img"
                data-aos="fade-up"
                className="landing-head-store-img"
                />
                <Image src={LandingHeadSmallStore}
                width={240}
                height={510}
                alt="img"
                data-aos="fade-up"
                className="landing-head-store-small-img"
                />
            </div>
        </header>
        <TextRevealComponent/>
        </>
    )
}

export default LandingPageHeader;