'use client';
import '@/styles/tailwindcss.css';
import '@/styles/ourworkpage/OurWorkPage.css';
import '@/styles/Typography.css';
import Header from '../home/Header';
import Merlot from '@/Images/studiopage/Merlot.jpg';
import Logo from '@/Images/ourworkpage/our-work-page-logo.svg';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { useState } from 'react';
import Image from 'next/image';

//arrow image from studio page 
import Arrow from '@/Images/studiopage/GetInTouchArrow.svg';
//importing studio page style for bottom blue button
import '@/styles/studiopage/StudioPage.css';

import Link from 'next/link';
import OurWorkClientInfoCompo from './OurWorkClientInfoCompo';
import axios from 'axios';
import TextRevealComponent from '../TextRevealComponent';

const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})

function OurWorkSection({apidata})
{

    let[btnActiveIndex,setBtnActiveIndex]=useState(0);

    let[apiallData,setAllApiData]=useState(apidata);
    let[apiTempData,setApiTempData]=useState(apidata);

    function handleFilter(index,value)
    {
        setBtnActiveIndex(index);
        if(index==0){
            setApiTempData(apiallData);             //when all filder is clicked all data will be displayed
            return;
        }

        let filteredData=apiallData.filter((element)=>{
            //if any other filter is clicked based on that filter catagory i will filter that data but first need to convert 
            //both filter catagory and api caseStudyCatagory in lowercase 
            //example  catagory - Website && apiCaseStudyCatagory - WEBSITE
            //In above example both have the same but one is capitalize and one is only capital letter so to above this mismatch 
            //converted into lowercase to filter it easily  eg. catagory - website && apiCaseStudyCatagory - website
            return element.casestudyCatagory.toLowerCase().includes(value.toLowerCase());       
        })

        setApiTempData(filteredData);
    }

    return(
        <>
        <div className={" "+plus_jakarta_sans.className}>

            <section className="our-work-section-one">

                {/* filter buttons */}
                <div className="flex justify-center">
                    <div className="flex items-center our-work-section-filter-btn-container">
                        {/* oncllick on any filter the clicked filter is added dynamically  */}
                        <button className={btnActiveIndex==0?"our-work-section-filter-btn common-all-caps text-custom-darkgrey py-6 px-5 md:py-7 sm:px-8 clicked-filter":"our-work-section-filter-btn common-all-caps text-custom-mediumgrey py-6 px-5 md:py-7 sm:px-8"} onClick={()=>{handleFilter(0,'ALL')}} >ALL</button>
                        <button className={btnActiveIndex==1?"our-work-section-filter-btn common-all-caps text-custom-darkgrey py-6 px-5 md:py-7 sm:px-8 clicked-filter":"our-work-section-filter-btn common-all-caps text-custom-mediumgrey py-6 px-5 md:py-7 sm:px-8"} onClick={()=>{handleFilter(1,'Branding')}} >Branding</button>
                        <button className={btnActiveIndex==2?"our-work-section-filter-btn common-all-caps text-custom-darkgrey py-6 px-5 md:py-7 sm:px-8 clicked-filter":"our-work-section-filter-btn common-all-caps text-custom-mediumgrey py-6 px-5 md:py-7 sm:px-8"} onClick={()=>{handleFilter(2,'pitch deck')}} >pitch decks</button>
                        <button className={btnActiveIndex==3?"our-work-section-filter-btn common-all-caps text-custom-darkgrey py-6 px-5 md:py-7 sm:px-8 clicked-filter":"our-work-section-filter-btn common-all-caps text-custom-mediumgrey py-6 px-5 md:py-7 sm:px-8"} onClick={()=>{handleFilter(3,'website')}} >websites</button>
                        <button className={btnActiveIndex==4?"our-work-section-filter-btn common-all-caps text-custom-darkgrey py-6 px-5 md:py-7 sm:px-8 clicked-filter":"our-work-section-filter-btn common-all-caps text-custom-mediumgrey py-6 px-5 md:py-7 sm:px-8"} onClick={()=>{handleFilter(4,'App')}} >Apps</button>
                    </div>
                </div>

                {apiTempData?<OurWorkClientInfoCompo apidata={apiTempData}/>:null}
            </section>

            <section className='our-work-section-two flex flex-col justify-center items-center gap-10 px-5 py-20 sm:px-10 md:py-28 md:px-0'>
                <h2 className="common-h2-heading our-work-section-two-subheading  text-center text-custom-almostblack" data-aos="fade-up">Ready to level up your online presence like a pro?</h2>
                <a href='mailto:hello@payppy.co' className='flex flex-row our-work-lets-talk-btn get-in-touh-btn ' data-aos="fade-up">
                        <span className='our-work-lets-talk-text get-in-touch-txt  grow text-center flex justify-center items-center'>LET'S TALK</span>
                        <div className='get-in-touch-img-div flex justify-center items-center'>
                            <Image src={Arrow} 
                            width={28}
                            height={28}
                            alt='img'
                            className='get-in-touch-arrow-img'
                            />
                        </div>
                    </a>
            </section>

            <TextRevealComponent/>
        </div>
        </>
    )
}

export default OurWorkSection;