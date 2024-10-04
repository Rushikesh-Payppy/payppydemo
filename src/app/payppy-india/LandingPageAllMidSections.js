import React from 'react'
import Image from 'next/image';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';
import '@/styles/tailwindcss.css';
import '@/styles/landingpage/LandingPage.css';
import '@/styles/Typography.css';


import Arrow from '@/Images/landingpage/boldArrow.svg';
//section 1
import SectionOneImg from "@/Images/landingpage/LandingPageSectionOne.jpg";
import SectionOneIcon from "@/Images/landingpage/LandinPageSectionOneIcon.png";
//section 2
import SectionTwoImg from "@/Images/landingpage/LandingPageSectionTwo.jpg";
import SectionTwoIcon from "@/Images/landingpage/LandinPageSectionTwoIcon.png";
//section 3
import SectionThreeImg from "@/Images/landingpage/LandingPageSectionThree.jpg";
import SectionThreeIcon from "@/Images/landingpage/LandinPageSectionThreeIcon.svg";
//section 4
import Bookmark from "@/Images/landingpage/bookmark.svg";
import Delivery from "@/Images/landingpage/deliveryIcon.svg";
import Sustainability from "@/Images/landingpage/substainabilityIcon.svg";
//section 5
import InstaImage from "@/Images/landingpage/insta-image.jpg";
import InstaCircle from '@/Images/landingpage/insta-circle.png';
import XCircle from '@/Images/landingpage/x-circle.png';
import TextRevealComponent from '../TextRevealComponent';

const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})
function LandingPageAllMidSections() {
  return (
    <>
        {/* section one  */}
        <section className={'landing-page-section-one flex flex-col-reverse lg:flex-row  items-center justify-center gap-20 md:gap-28 pt-20 lg:p-20 '+plus_jakarta_sans.className}>
            <main className='landing-section-one-img-box'>
                <Image src={SectionOneImg}
                width={629}
                height={648}
                alt="img"
                data-aos="fade-up"
                className='fav-brands-img'
                />
            </main>
            <main className='landing-section-one-info flex flex-col items-center items-center lg:items-start gap-3 md:gap-6'>
                {/* <div> */}
                    <Image src={SectionOneIcon}
                    width={73.28}
                    height={56.26}
                    alt="img"
                    data-aos="fade-up"
                    className='fav-brand-icon'
                    />
                    <h5 className="landing-page-section-heading common-h5-heading text-cutom-almostblack text-center lg:text-left " data-aos="fade-up">Follow your favourite brands</h5>
                    <p className="landing-page-section-one-para common-paragraph text-custom-darkgrey text-center lg:text-left " data-aos="fade-up">Choose what you see, with follow option on every brand.</p>
                    <VisitPayppyButton/>
                {/* </div> */}
            </main>
        </section>

        {/* section two  */}
        <section className={'landing-page-section-one landing-page-section-two flex flex-col lg:flex-row  items-center justify-center gap-20 md:gap-28 pt-20 lg:p-20 '+plus_jakarta_sans.className}>
            <main className='landing-section-one-info flex flex-col gap-3 md:gap-6 items-center lg:items-start'>
                <Image src={SectionTwoIcon}
                    width={73.28}
                    height={72}
                    alt="img"
                    data-aos="fade-up"
                    className='earn-reward-icon'
                />
                <h5 className="landing-page-section-heading  common-h5-heading text-cutom-almostblack text-center lg:text-left" data-aos="fade-up">Earn sensible rewards</h5>
                <p className="landing-page-section-two-para common-paragraph text-custom-darkgrey text-center lg:text-left" data-aos="fade-up">Get equivalent Pepcoins as your checkout value to redeem for your next purchase.</p>
                <VisitPayppyButton/>
            </main>
            <main className='landing-section-one-img-box'>
                <Image src={SectionTwoImg}
                width={629}
                height={648}
                alt="img"
                data-aos="fade-up"
                className='earn-reward-img'

                />
            </main>
        </section>

        {/* section three  */}
        <section className={'landing-page-section-one flex flex-col-reverse lg:flex-row  items-center justify-center gap-20 md:gap-28 pt-20 lg:p-20 '+plus_jakarta_sans.className}>
            <main className='landing-section-one-img-box'>
                <Image src={SectionThreeImg}
                width={629}
                height={648}
                alt="img"
                data-aos="fade-up"
                className='earn-reward-img'

                />
            </main>
            <main className={'landing-section-one-info flex flex-col gap-3 md:gap-6 items-center lg:items-start '+plus_jakarta_sans.className}>
                {/* <div> */}
                    <Image src={SectionThreeIcon}
                    width={61.95}
                    height={69}
                    alt="img"
                    data-aos="fade-up"
                    className='earn-reward-icon'

                    />
                    <h5 className="landing-page-section-heading  common-h5-heading text-cutom-almostblack text-center lg:text-left" data-aos="fade-up">Refer a friend</h5>
                    <p className="landing-page-section-three-para common-paragraph text-custom-darkgrey text-center lg:text-left" data-aos="fade-up">Invite your friends on Payppy.app to  get 2500 Pepcoins when they make their first purchase.</p>
                    <VisitPayppyButton/>
                {/* </div> */}
            </main>
        </section>

        {/* section four  */}
        <section className={'landing-page-section-four  flex  items-center justify-center   '+plus_jakarta_sans.className}>
            <div className="flex flex-col lg:flex-row gap-14 sm:gap-20 px-5 py-20 md:px-10 lg:pt-28 landing-page-section-four-inner-container ">
                <div className='flex flex-col gap-4 items-center lg:items-start '>
                    <Image src={Bookmark}
                    width={80}
                    height={80}
                    alt="img"
                    data-aos="fade-up"
                    className='bookmark-icon-img'/>
                    <div>
                        <h3 className="bookmark-title common-h5-heading text-custom-almostblack mb-2.5 text-center lg:text-left mx-auto lg:mx-0" data-aos="fade-up">Bookmark, don't download</h3>
                        <p className="bookmark-para common-paaragraph text-custom-darkgrey text-center lg:text-left mx-auto lg:mx-0" data-aos="fade-up">We've made lives easier for you and your phone! Simply tap install or the "add to home screen" button on your browser.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 items-center lg:items-start'>
                    <Image src={Delivery}
                    width={80}
                    height={80}
                    alt="img"
                    data-aos="fade-up"
                    className='delivery-icon-img'/>
                    <div>
                        <h3 className="delivery-title common-h5-heading text-custom-almostblack mb-2.5 text-center lg:text-left mx-auto lg:mx-0" data-aos="fade-up">Enjoy deliveries, everywhere</h3>
                        <p className="delivery-para  common-paaragraph text-custom-darkgrey text-center lg:text-left mx-auto lg:mx-0" data-aos="fade-up">We ship across India within 3-6 days so you can get your hands on the Payppy cool stuff at the earliest.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 items-center lg:items-start'>
                    <Image src={Sustainability}
                    width={80}
                    height={80}
                    alt="img"
                    data-aos="fade-up"
                    className='sustainability-icon-img'/>
                    <div>
                        <h3 className="sustainability-title common-h5-heading text-custom-almostblack mb-2.5 text-center lg:text-left mx-auto lg:mx-0" data-aos="fade-up">Choose sustainability</h3>
                        <p className="sustainability-para  common-paaragraph text-custom-darkgrey text-center lg:text-left mx-auto lg:mx-0" data-aos="fade-up">With exclusive, one-of-a-kind packaging, we make sure you reuse more packets unharm Earth a lil.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* section 5 */}
        <section className={'landing-page-section-five flex flex-col lg:flex-row  items-center lg:items-start  lg:justify-evenly gap-14  lg:gap-4 pt-20 px-5 md:px-10 lg:pt-48 lg:px-40 '+plus_jakarta_sans.className}>
            <main className='flex flex-col gap-4 items-center lg:items-start'>
                <h2 className='section-five-title common-h3-heading text-custom-almostblack  text-center lg:text-left mx-auto lg:mx-0' data-aos="fade-up">Level up your scrolling game </h2>
                <p className="scrolling-game-para  common-paaragraph text-custom-darkgrey text-center lg:text-left mx-auto lg:mx-0" data-aos="fade-up">and keep up with what’s new by joining a community that's as cool as it is woke </p>
                <div className="left-border-div"></div>
                <div className="flex flex-col lg:flex-row items-center gap-4">
                    <p className="scrolling-game-para w-auto  common-paaragraph" data-aos="fade-up">Follow us</p>
                    <div className='flex gap-4'>
                        <Link href='https://www.instagram.com/payppy.app/' target='_blank'  className='landingpage-insta-twitter-links flex justify-center items-center w-12 h-12'>
                            <Image src={InstaCircle}
                                width={20}
                                height={20}
                                alt="img"
                                data-aos="fade-up"
                                className='sustainability-icon-img'/>
                        </Link>
                        <Link href='https://x.com/payppy_app?s=21' target='_blank' className='landingpage-insta-twitter-links flex justify-center items-center w-12 h-12'>
                            <Image src={XCircle}
                                width={20}
                                height={20}
                                alt="img"
                                data-aos="fade-up"
                                className='sustainability-icon-img'/>
                        </Link>
                    </div>
                </div>
            </main>
            <main className='insta-img-container'>
                <Image src={InstaImage}
                width={400}
                height={608.3}
                alt="img"
                data-aos="fade-up"
                className='insta-img'/>
            </main>

        </section>


        <TextRevealComponent/>
    </> 

  )
}


function VisitPayppyButton()
{
    return(
        <>
        <Link href='https://payppy.app/' target='_blank' className='visit-payppy-app-section-btn flex flex-row gap-2' data-aos="fade-up">
            <span>VISIT PAYPPY.APP</span>
            <Image src={Arrow}
            width={14}
            height={14}
            className='visit-payppy-section-btn-arrow'
            />
        </Link>
        </>
    )
}

export default LandingPageAllMidSections;



























