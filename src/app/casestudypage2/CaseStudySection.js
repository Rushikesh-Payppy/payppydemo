import '@/styles/Typography.css';
import '@/styles/tailwindcss.css';
import '@/styles/casestudypage/CaseStudyPage.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Image from 'next/image';
import DP from '@/Images/casestudypage/DP.png';
import ClientImage from '@/Images/casestudypage/casestudy_header_content.png';
import Arrow from '@/Images/casestudypage/blue-arrow.svg';
import OurWorkClientInfoCompo from '../our-masterpeices/OurWorkClientInfoCompo';
import { Merriweather } from 'next/font/google';

const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})

const merriweather=Merriweather({
    subsets:['latin'],
    display:'swap',
    weight:'300'
})
function CaseStudySection()
{
    return(
        <>
        <div className={"case-study-parent-div "+plus_jakarta_sans.className}>

            {/* big section  */}
            <section className="flex flex-col justify-center items-center py-20 px-10 sm:px-10  sm:py-24 gap-10 sm:gap-14">
                
                <div className=" casestudy-section-content-width flex flex-col gap-6 sm:gap-8">
                    <h4 className={"italic-text text-custom-almostblack "+merriweather.className}>“Combining our team’s ideas with Intellimize’s machine-learning technology has driven incredible results. A 210x ROI with minimal internal resources is impressive and we're excited to continue partnering with a company that makes our business goals their own to ensure success.”</h4>
                    <div className="flex gap-4 items-center">
                        <Image src={DP} width={80} height={80} alt='img' className='usecase-section-dp-img'/>
                        <div className="">
                            <p className="text-custom-almostblack font-bold common-paragraph">Paul Baumgar thuber</p>
                            <p className="common-paragraph">CMO, Appmycommunity</p>
                        </div>
                    </div>
                </div>

                <div className="horizontal-grey-line h-px bg-custom-lightgreu"></div>

                <div className=" casestudy-section-content-width flex flex-col gap-6 sm:gap-8 justify-center items-start">
                    <h4 className="common-h4-heading text-custom-almostblack ">Overview</h4>
                    <p className="common-paragraph text-custom-darkgrey">With a deep understanding of the market, we recognize the gap between traditional businesses and the consumer practices while interacting with digital products like apps, website and other media. </p>
                   <h6 className="common-h6-heading text-custom-almostblack">We are a pioneering firm focused on digitally transforming Indian business landscape through innovative design and strategic UX decisions.</h6>
                </div>

                <Image src={ClientImage} width={1076} height={690} alt='img' className='casestudies-section-image'/>

                <div className=" casestudy-section-content-width flex flex-col gap-6 sm:gap-8 justify-center items-start">
                    <h4 className="common-h4-heading text-custom-almostblack ">Our Process</h4>
                    <p className="common-paragraph text-custom-darkgrey">With a deep understanding of the market, we recognize the gap between traditional businesses and the consumer practices while interacting with digital products like apps, website and other media. With a deep understanding of the market, we recognize the gap between traditional businesses and the consumer practices while interacting with digital products like apps, website and other media. 
                    <br /><br />
                    With a deep understanding of the market, we recognize the gap between traditional businesses and the consumer practices while interacting with digital products like apps, website and other media. </p>
                   <h6 className="common-h6-heading text-custom-almostblack">We are a pioneering firm focused on digitally transforming Indian business landscape.</h6>
                </div>

                <Image src={ClientImage} width={1076} height={690} alt='img' className='casestudies-section-image'/>

                <div className=" casestudy-section-content-width flex flex-col gap-6 sm:gap-8 ">
                    <h4 className="common-h4-heading text-custom-almostblack ">Our Result</h4>
                    <p className="common-paragraph text-custom-darkgrey">With a deep understanding of the market, we recognize the gap between traditional businesses and the consumer practices while interacting with digital products like apps, website and other media.  </p>
                </div>

                <div className="casestudy-section-content-width  grid grid-cols-1 sm:grid-cols-2 gap-x-14">
                       <div className="casestudies-our-result-content-box flex gap-x-5 py-6">
                            <Image src={Arrow} width={25} height={18} alt='img'/>
                            <h6 className="common-h6-heading text-custom-almostblack ">Awesome</h6>
                       </div>
                       <div className="casestudies-our-result-content-box flex gap-x-5 py-6">
                            <Image src={Arrow} width={25} height={18} alt='img'/>
                            <h6 className="common-h6-heading text-custom-almostblack ">Awesome</h6>
                       </div>
                       <div className="casestudies-our-result-content-box flex gap-x-5 py-6">
                            <Image src={Arrow} width={25} height={18} alt='img'/>
                            <h6 className="common-h6-heading text-custom-almostblack ">Tagline</h6>
                       </div>
                       <div className="casestudies-our-result-content-box flex gap-x-5 py-6">
                            <Image src={Arrow} width={25} height={18} alt='img'/>
                            <h6 className="common-h6-heading text-custom-almostblack ">Tagline</h6>
                       </div>
                       <div className="casestudies-our-result-content-box flex gap-x-5 py-6">
                            <Image src={Arrow} width={25} height={18} alt='img'/>
                            <h6 className="common-h6-heading text-custom-almostblack ">Brand Identity</h6>
                       </div>
                       <div className="casestudies-our-result-content-box flex gap-x-5 py-6">
                            <Image src={Arrow} width={25} height={18} alt='img'/>
                            <h6 className="common-h6-heading text-custom-almostblack ">Brand Identity</h6>
                       </div>
                       <div className="casestudies-our-result-content-box flex gap-x-5 py-6">
                            <Image src={Arrow} width={25} height={18} alt='img'/>
                            <h6 className="common-h6-heading text-custom-almostblack ">Teaser Deck</h6>
                       </div>
                       <div className="casestudies-our-result-content-box flex gap-x-5 py-6">
                            <Image src={Arrow} width={25} height={18} alt='img'/>
                            <h6 className="common-h6-heading text-custom-almostblack ">Teaser Deck</h6>
                       </div>
                    </div>
            </section>  

            <div className="casestudy-exploremore-section bg-custom-almostwhite flex justify-center items-center pt-24 pb-10 px-5  lg:pt-40 sm:px-24 lg:pb-20">
                <h2 className="common-h2-heading text-custom-almostblack ">Explore more</h2>
            </div>

            {/* <OurWorkClientInfoCompo/> */}
        </div>
        </>
    )
}

export default CaseStudySection;