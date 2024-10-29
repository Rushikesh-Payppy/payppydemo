'use client';
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
import gsap from "gsap";
import {useGSAP} from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const plus_jakarta_sans=Plus_Jakarta_Sans({
  subsets:['latin'],
  display:'swap'  
})
function LandingPageHeader() {

    let container=useRef();
    let headingTag=useRef();
    let paraTag=useRef();
    let btnTag=useRef();

    let ImageTag=useRef();

    // useGSAP(()=>{
    //     gsap.to(headingTag.current,{
    //         y:200
    //     })
    // })
    useGSAP(() => {
        
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:container.current,
                start:'35% 50%',
                end:'60% 20%',
                scrub: true,
                markers:true,
            }
        })

        tl.to(headingTag.current, {
          y: -200,
          ease:'none'
        },'a')
        .to(paraTag.current, {
          y: -200,
          ease:'none'
        },'a')
        .to(btnTag.current, {
          y: -200,
          ease:'none'
        },'a')
        // .to(ImageTag.current, {
        //     scale: 0.8,
        //     // opacity:0.6,
        //     ease:'none'
        //   },'a')
        //   .to(container.current,{
        //     y:-200,
        //   })
      });
    return(
        <>
        <header className={"landing-page-header bg-custom-almostblack px-5 pt-20 md:px-10 lg:px-36 md:pt-32 flex flex-col justify-center items-center "+plus_jakarta_sans.className} ref={container}>
            <h1 ref={headingTag} className="experience-seamless-title common-h1-heading pb-10 " data-aos="fade-up">Experience seamless shopping like never before.</h1>
            <p  className="landing-page-para common-paragraph text-center text-custom-ghostgrey" data-aos="fade-up" ref={paraTag}>Drip styles and hottest collections from multiple brands, brought exclusively for the Gen Z and Millennials of India.</p>
            <div className="mt-10 mb-20">
                <button className={"visit-payppy-btn mx-auto flex  items-center justify-center "+plus_jakarta_sans.className} data-aos="fade-up" ref={btnTag}>
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
                ref={ImageTag}
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