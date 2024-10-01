'use client';
import '@/styles/tailwindcss.css';
import '@/styles/ourworkpage/OurWorkPage.css';
import '@/styles/Typography.css';
import Header from '../home/Header';
import Merlot from '@/Images/studiopage/Merlot.jpg';
import Arrow from '@/Images/studiopage/arrow-right-up-line.svg';
import Logo from '@/Images/ourworkpage/our-work-page-logo.svg';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import TextRevealComponent from '../TextRevealComponent';

const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})
function OurWorkClientInfoCompo({apidata})
{
    let router=useRouter();

    function handleNavigation(id)
    {
        router.push('/our-masterpieces/'+id);
    }

    // Helper function to get the best available image URL
    function getValidImageUrl(imageObj, alternateImage) {
        const baseURL = 'http://strapi.payppy.co'; //my current server
        
        const imageUrl = imageObj.formats.large?.url ||     //if the url is present then it i will store in imageUrl variable else it store alternate image
                         imageObj.formats.medium?.url || 
                         imageObj.formats.small?.url || 
                         imageObj.formats.thumbnail.url;
        
        // Check if the URL is relative which mean comes from api, and i will add baseURL if needed
        return `${baseURL}${imageUrl}` ;
      }

    return(
        <>
            <div className={" "+plus_jakarta_sans.className}>
            <div className="our-work-section-img-parent-grid grid grid-cols-1 lg:grid-cols-2" >

                {apidata.length>0&&apidata.map((element)=>{
                    return   <div key={element.documentId} className="py-8 px-5 sm:py-10 sm:px-10 md:py-14 md:px-14 our-work-section-img-grid  flex flex-col gap-6 relative" onClick={()=>{handleNavigation(element.documentId)}}>
                                <div>
                                    <h5 className="common-h5-heading text-custom-almostblack" data-aos="fade-up">{element.clientName}</h5>
                                    <div className="flex gap-3 mt-2.5">
                                        {element.casestudyCatagory.split(',').map((catagory,index)=>{
                                             
                                           return <>
                                                <div key={catagory+134213} className="common-all-caps text-custom-mediumgrey" data-aos="fade-up">{catagory}</div>
                                                <div key={index+178} className="for-between-content-border" data-aos="fade-up"></div>
                                            </>
                                        })}
                                    </div>
                                </div>

                                <Image
                                    src={Arrow}
                                    width={40}
                                    height={40}
                                    alt='img'
                                    className='our-work-section-Arrow-img absolute right-7 top-7 duration-300'/>


                                <div className="our-work-img-container relative">
                                    <Image
                                    src={getValidImageUrl(element.caseStudyFeaturedImage)}
                                    width={2400}
                                    height={400}
                                    alt='img'
                                    className='our-work-section-img' data-aos="fade-up"/>

                                    <Image 
                                    src={getValidImageUrl(element.clientLogo)}
                                    // width={245}
                                    width={element.clientLogo.formats.thumbnail.width}
                                    height={element.clientLogo.formats.thumbnail.height}
                                    // height={60}
                                    alt='img'
                                    className='our-work-section-logo-img absolute'/>

                                    <div className="for-overlay-effect absolute top-0 left-0" style={{background:element.brandColor}} ></div>
                                </div>
                            </div>
                })}
                   
                   
                    {/* <div className="py-8 px-5 sm:py-10 sm:px-10 md:py-14 md:px-14 our-work-section-img-grid  flex flex-col gap-6 relative">
                        <div>
                            <h5 className="common-h5-heading text-custom-almostblack">Pragilis</h5>
                            <div className="flex gap-3 mt-2.5">
                                <div className="common-all-caps text-custom-mediumgrey">BRANDING</div>
                                <div className="for-between-content-border"></div>
                                <div className="common-all-caps text-custom-mediumgrey">WEBSITE</div>
                            </div>
                        </div>

                        <Image
                            src={Arrow}
                            width={40}
                            height={40}
                            className='our-work-section-Arrow-img absolute right-7 top-7 duration-300'/>


                        <div className="our-work-img-container relative">
                            <Image
                            src={Merlot}
                            width={2400}
                            height={400}
                            className='our-work-section-img'/>

                            <Image 
                            src={Logo}
                            width={187}
                            height={33}
                            className='our-work-section-logo-img absolute'/>

                            <div className="for-overlay-effect absolute top-0 left-0"></div>
                        </div>
                    </div>*/}

                   
                </div>
                <TextRevealComponent/>
            </div>
        </>
    )
}


export default OurWorkClientInfoCompo;