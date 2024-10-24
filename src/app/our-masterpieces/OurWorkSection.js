'use client';
import '@/styles/tailwindcss.css';
import '@/styles/ourworkpage/OurWorkPage.css';
import '@/styles/Typography.css';
import Header from '../home/Header';
import Merlot from '@/Images/studiopage/Merlot.jpg';
import Logo from '@/Images/ourworkpage/our-work-page-logo.svg';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

//arrow image from studio page 
import Arrow from '@/Images/studiopage/GetInTouchArrow.svg';
//importing studio page style for bottom blue button
import '@/styles/studiopage/StudioPage.css';

import Link from 'next/link';
import OurWorkClientInfoCompo from './OurWorkClientInfoCompo';
import axios from 'axios';
import TextRevealComponent from '../TextRevealComponent';
import { CraetiveDesignBlogs } from '../sensei-studio/StudioPageSection';
import { useSearchParams } from 'next/navigation';

const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})

function OurWorkSection({apidata})
{

    let[btnActiveIndex,setBtnActiveIndex]=useState(0);

    let[apiallData,setAllApiData]=useState(apidata);
    let[apiTempData,setApiTempData]=useState(apidata);

    let parameters=useSearchParams();

    let btnContainer=useRef();

    //if user click catagories on signle case study page then according to that catagory client data is showed usually visible on filter btn click
    let btnIndexObj={
        'Branding':1,
        'Pitch decks':2,
        'Website':3,
        'App':4,
    }

    //if catagory of signle case study page matches then this useEffect will calll the filter function
    useEffect(()=>{
        let catagory=parameters.get('catagory');
        if(catagory in btnIndexObj&&btnContainer.current)
            {
                handleFilter(btnIndexObj[catagory],catagory);
                btnContainer.current.scrollIntoView({behavior:'smooth'});
            }
    },[parameters])

    //to filter the client case study info based on btn clicks
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
            <div className={" " + plus_jakarta_sans.className}>

                <section className="our-work-section-one">

                    {/* filter buttons */}
                    <div className="flex justify-center">
                    <div className="flex items-center our-work-section-filter-btn-container" ref={btnContainer}>
                        <button className={btnActiveIndex==0?"our-work-section-filter-btn common-all-caps text-custom-darkgrey py-6 px-5 md:py-7 sm:px-8 clicked-filter":"our-work-section-filter-btn common-all-caps text-custom-mediumgrey py-6 px-5 md:py-7 sm:px-8"} onClick={()=>{handleFilter(0,'ALL')}} >ALL</button>
                        <button className={btnActiveIndex==1?"our-work-section-filter-btn common-all-caps text-custom-darkgrey py-6 px-5 md:py-7 sm:px-8 clicked-filter":"our-work-section-filter-btn common-all-caps text-custom-mediumgrey py-6 px-5 md:py-7 sm:px-8"} onClick={()=>{handleFilter(1,'Branding')}} >Branding</button>
                        <button className={btnActiveIndex==2?"our-work-section-filter-btn common-all-caps text-custom-darkgrey py-6 px-5 md:py-7 sm:px-8 clicked-filter":"our-work-section-filter-btn common-all-caps text-custom-mediumgrey py-6 px-5 md:py-7 sm:px-8"} onClick={()=>{handleFilter(2,'pitch deck')}} >pitch decks</button>
                        <button className={btnActiveIndex==3?"our-work-section-filter-btn common-all-caps text-custom-darkgrey py-6 px-5 md:py-7 sm:px-8 clicked-filter":"our-work-section-filter-btn common-all-caps text-custom-mediumgrey py-6 px-5 md:py-7 sm:px-8"} onClick={()=>{handleFilter(3,'website')}} >websites</button>
                        <button className={btnActiveIndex==4?"our-work-section-filter-btn common-all-caps text-custom-darkgrey py-6 px-5 md:py-7 sm:px-8 clicked-filter":"our-work-section-filter-btn common-all-caps text-custom-mediumgrey py-6 px-5 md:py-7 sm:px-8"} onClick={()=>{handleFilter(4,'App')}} >Apps</button>
                    </div>
                </div>

                    {apiTempData?<OurWorkClientInfoCompo apidata={apiTempData}/>:null}

                    {/* <CraetiveDesignBlogs /> */}
                </section>

                <ReadyToLevelUpTitleComponent heading={'Ready to level up your online presence like a pro?'} btntext={"Let's talk!"}/>


                <TextRevealComponent />
            </div>
        </>
    )
}

export default OurWorkSection;


function ReadyToLevelUpTitleComponent({heading,link='mailto:hello@payppy.co',btntext})                 //we want this section in sensei-studio page so have to make a component
{
    return(
        <>
              <section className={'our-work-section-two flex flex-col justify-center items-center gap-10 px-5 py-20 sm:px-10 md:py-28 md:px-0 '+plus_jakarta_sans.className}>
                <h2 className="common-h2-heading our-work-section-two-subheading  text-center text-custom-almostblack" data-aos="fade-up">{heading}</h2>
                <a href={link} className='flex flex-row our-work-lets-talk-btn get-in-touh-btn ' data-aos="fade-up">
                        <span className='our-work-lets-talk-text get-in-touch-txt  grow text-center flex justify-center items-center common-all-caps '>{btntext}</span>
                        <div className='get-in-touch-img-div relative'>
                            <Image src={Arrow} 
                            width={28}
                            height={28}
                            alt='img'
                            className='get-in-touch-arrow-img absolute top-6 right-6'
                            />
                        </div>
                    </a>
            </section>
        </>
    )
}

export {ReadyToLevelUpTitleComponent};