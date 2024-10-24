import '@/styles/Typography.css';
import '@/styles/tailwindcss.css';
import '@/styles/casestudypage/CaseStudyPage.css';

import { Plus_Jakarta_Sans } from 'next/font/google';
import Image from 'next/image';
import Logo from '@/Images/casestudypage/amc_studio_transparent.png';
import HeaderContent from '@/Images/casestudypage/casestudy_header_content.png';
import Header from '@/app/home/Header';
import axios from 'axios';
import TextRevealComponent from '@/app/TextRevealComponent';
import Link from 'next/link';


const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})
function CaseStudyHeader({apiData})
{
  
      // Helper function to get the best available image URL
      function getValidImageUrl(imageObj) {
        const baseURL = 'https://strapi.payppy.co'; //my current server
        // if (!imageObj) return alternateImage;
        
        const imageUrl = imageObj.formats.large?.url ||     //if the url is present then it i will store in imageUrl variable else it store alternate image
                         imageObj.formats.medium?.url || 
                         imageObj.formats.small?.url || 
                         imageObj.formats.thumbnail?.url;
        
        return `${baseURL}${imageUrl}` ;
      }

    return(
        <>
            <Header/>
            <header className={"flex flex-col lg:flex-row justify-center bg-custom-almostblack casestudy-header overflow-hidden "+plus_jakarta_sans.className}>
                <main className="casestudy-header-first-box flex flex-col  gap-10 py-10 px-5 sm:px-10 sm:pb-10 lg:px-20 lg:pb-20  lg:pt-24">
                    <div className="flex gap-3">
                        {apiData.casestudyCatagory.length>0&&apiData.casestudyCatagory.split(',').map((catagory, index) => {

                            return <>
                                <Link href={`/our-masterpieces?catagory=${catagory}`} key={index}>
                                    <div  className="common-all-caps text-custom-mediumgrey" data-aos="fade-up">{catagory}</div>
                                </Link>
                                <div key={catagory+10} className="border-between-casestudy-header-brand-web bg-custom-darkgrey" data-aos="fade-up" ></div>
                            </>
                        })}
                    </div>

                    <div className="flex flex-col gap-5">
                        {/* <Image src={getValidImageUrl(apiData.clientLogo)}
                        width={apiData.clientLogo.width}
                        height={apiData.clientLogo.height}
                        alt='img'
                        data-aos="fade-up"
                        className='case-study-header-logo'/> */}

                        <h4 className="common-h4-heading text-custom-white" data-aos="fade-up">{apiData.clientName}</h4>

                        <p className="common-paragraph text-custom-ghostgrey" data-aos="fade-up">{apiData.clientDescription}</p>

                    </div>


                    <div className="flex flex-wrap gap-2.5 w-full ">
                        <div className="grow " data-aos="fade-up">
                            <p className="common-paragraph text-custom-white">Industry</p>
                            <p className="common-paragraph text-custom-ghostgrey">{apiData.industry}</p>
                            
                        </div>
                        <div className="grow " data-aos="fade-up">
                            <p className="common-paragraph text-custom-white">Time Taken</p>
                            <p className="common-paragraph text-custom-ghostgrey">{apiData.timeTaken}</p>
                            
                        </div>
                        <div className="grow " data-aos="fade-up">
                            <p className="common-paragraph text-custom-white">Tools</p>
                            <p className="common-paragraph text-custom-ghostgrey">{apiData.tools}</p>
                            
                        </div>
                    </div>

                    <div className=''>
                        <p className="common-paragraph text-custom-white" data-aos="fade-up">Deliverables</p>
                        <p className="common-paragraph text-custom-ghostgrey" data-aos="fade-up">{apiData.deliverables}</p>
                    </div>

                    <div className="flex flex-wrap gap-14">
                        {apiData.analyticsNumber?.length>0&&apiData.analyticsNumber.split(',').map((element,index)=>{
                        return <div className="grow" key={element}>
                            <h3 className="common-h4-heading text-custom-white" data-aos="fade-up">{element}</h3>
                            <p className="common-paragraph text-custom-ghostgrey" data-aos="fade-up">{apiData.analyticsLabel?.length>0?apiData.analyticsLabel.split(',')[index]:''}</p>
                        </div>
                        })}
                       
                    </div>
                </main>
                <main className="casestudy-header-second-box px-5 pt-5 sm:px-10 sm:pt-10 lg:pl-10 lg:py-18">
                    <div className='casestudy-header-second-div-img-container lg:relative'>
                            <Image src={getValidImageUrl(apiData.caseStudyFeaturedImage)}
                            width={1008}
                            height={645}
                            alt='img'
                            data-aos="fade-up"
                            className='casestudy-header-second-div-img lg:absolute lg:left-0 lg:top-7 -mb-3'
                            />
                    </div>
                </main>
            </header>
                
            <TextRevealComponent/>
        </>
    )
}

export default CaseStudyHeader;