import '@/styles/Typography.css';
import '@/styles/tailwindcss.css';
import '@/styles/casestudypage/CaseStudyPage.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Image from 'next/image';
import DP from '@/Images/casestudypage/DP.png';
import ClientImage from '@/Images/casestudypage/casestudy_header_content.png';
import Arrow from '@/Images/casestudypage/blue-arrow.svg';
// import OurWorkClientInfoCompo from '../ourworkpage/OurWorkClientInfoCompo';
import { Merriweather } from 'next/font/google';
import Link from 'next/link';

const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})

const merriweather=Merriweather({
    subsets:['latin'],
    display:'swap',
    weight:'300'
})
function CaseStudySection({apiData})
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
        <div className={"case-study-parent-div "+plus_jakarta_sans.className}>

            {/* big section  */}
            <section className="flex flex-col justify-center items-center py-20 px-5 sm:px-10 sm:px-10  sm:py-24 gap-10 sm:gap-14">
                
                <div className=" casestudy-section-content-width flex flex-col gap-6 sm:gap-8">
                    <h4 className={"italic-text text-custom-almostblack "+merriweather.className} data-aos="fade-up">{apiData.testimonialText}</h4>
                    <div className="flex gap-4 items-center">
                        <Image src={getValidImageUrl(apiData.testimonialClientImage)} alt="img" width={80} height={80} className='usecase-section-dp-img' data-aos="fade-up"/>

                        <div className="">
                            <p className="text-custom-almostblack font-bold common-paragraph" data-aos="fade-up">{apiData.testimonialClientName}</p>
                            <p className="common-paragraph" data-aos="fade-up">{apiData.testimonialClientDesignation}</p>
                        </div>
                    </div>
                </div>

                <div className="horizontal-grey-line h-px bg-custom-lightgreu"></div>

                <div className=" casestudy-section-content-width flex flex-col gap-6 sm:gap-8 justify-center items-start">
                    <h4 className="common-h4-heading text-custom-almostblack " data-aos="fade-up">Overview</h4>
                    <h6 className="common-h6-heading text-custom-almostblack" data-aos="fade-up">{apiData.overviewSubtitle}</h6>
                    <p className="common-paragraph text-custom-darkgrey" data-aos="fade-up">{apiData.overviewParagraph.split('<br/>').map((element,index)=>{
                        return <>
                            {element}
                            {index!==apiData.overviewParagraph.split('<br/>').length-1 ? <br/>:''}
                        </>
                    })} </p>
                </div>

                <Image src={getValidImageUrl(apiData.overviewImage)} width={1076} height={690} alt="img"  className='casestudies-section-image' data-aos="fade-up"/>

                <div className=" casestudy-section-content-width flex flex-col gap-6 sm:gap-8 justify-center items-start">
                    <h4 className="common-h4-heading text-custom-almostblack " data-aos="fade-up">Our Process</h4>
                    {apiData.ourProcessSubtitle?.length>0&&<h6 className="common-h6-heading text-custom-almostblack" data-aos="fade-up">{apiData.ourProcessSubtitle}</h6>}
                    <p className="common-paragraph text-custom-darkgrey" data-aos="fade-up">{apiData.ourProcessParagraph.split('<br/>').map((element,index)=>{
                        return<>
                                {element}
                                {index!==apiData.ourProcessParagraph.split('<br/>').length-1 ? <br/> : ''}
                            </>
                    })}</p>
                </div>

                <Image src={getValidImageUrl(apiData.ourProcessImage)} width={1076} height={690} alt="img" className='casestudies-section-image' data-aos="fade-up"/>

                <div className=" casestudy-section-content-width flex flex-col gap-6 sm:gap-8 ">
                    <h4 className="common-h4-heading text-custom-almostblack " data-aos="fade-up">Our Result</h4>
                    <p className="common-paragraph text-custom-darkgrey" data-aos="fade-up">{apiData.ourResultParagraph.split('<br/>').map((element,index)=>{
                        return<>
                                {element}
                                {index!==apiData.ourResultParagraph.split('<br/>').length - 1 ? <br/>:''}
                            </>
                    })}

                    </p>
                </div>

                <div className="casestudy-section-content-width  grid grid-cols-1 sm:grid-cols-2 gap-x-14">
                    {apiData.casestudyChecklistGridContent.length>0&&apiData.casestudyChecklistGridContent.split(',').map((element,index)=>{
                       return <div key={element+index} className="casestudies-our-result-content-box flex gap-x-5 py-6" data-aos="fade-up">
                            <Image src={Arrow} width={36} height={36} alt="img"/>
                            <h6 className="common-h6-heading text-custom-almostblack ">{element}</h6>
                       </div>
                    })
                    }
                       
                    </div>
            </section>  

            <div className="casestudy-exploremore-section bg-custom-almostwhite flex flex-col justify-center items-center gap-10 pt-24 pb-10 px-5  lg:pt-40 sm:px-18 lg:pb-20">
                <h2 className="common-h2-heading text-custom-almostblack " data-aos="fade-up">Explore more</h2>
                <div className="flex justify-center flex-wrap items-center gap-10">
                    <Link href={`/our-masterpieces?catagory=Branding`} className='casestudy-blue-link common-h5-heading text-custom-primary ' data-aos="fade-up">Branding</Link>
                    <Link href={`/our-masterpieces?catagory=Website`} className='casestudy-blue-link common-h5-heading text-custom-primary ' data-aos="fade-up">Website</Link>
                    <Link href={`/our-masterpieces?catagory=Pitch decks`} className='casestudy-blue-link common-h5-heading text-custom-primary ' data-aos="fade-up">Pitch Decks</Link>
                    <Link href={`/our-masterpieces?catagory=App`} className='casestudy-blue-link common-h5-heading text-custom-primary ' data-aos="fade-up">App</Link>
                </div>
            </div>

            {/* <OurWorkClientInfoCompo/> */}
        </div>
        </>
    )
}

export default CaseStudySection;