import '@/styles/Typography.css';
import '@/styles/tailwindcss.css';
import '@/styles/casestudypage/CaseStudyPage.css';


import Header from '../home/Header';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Image from 'next/image';
import Logo from '@/Images/casestudypage/amc_studio_transparent.png';
import HeaderContent from '@/Images/casestudypage/casestudy_header_content.png';


const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})
function CaseStudyHeader()
{
    return(
        <>
            <Header/>
            <header className={"flex flex-col lg:flex-row justify-center bg-custom-almostblack casestudy-header overflow-hidden "+plus_jakarta_sans.className}>
                <main className="casestudy-header-first-box flex flex-col  gap-10 py-10 px-5 sm:px-10 sm:pb-10 lg:px-20 lg:pb-20 ">
                    <div className="flex gap-3">
                        <div className="common-all-caps text-custom-ghostgrey">Branding</div>
                        <div className="border-between-casestudy-header-brand-web bg-custom-darkgrey"></div>
                        <div className="common-all-caps text-custom-ghostgrey">Website</div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <Image src={Logo}
                        width={97}
                        height={50}
                        alt='img'
                        className='case-study-header-logo'/>

                        <h4 className="common-h4-heading text-custom-white">App My Community</h4>

                        <p className="common-paragraph text-custom-ghostgrey">A mobile app to customize for your campground, RV Resort or Chamber of Commerce. Help your people find everything in one place—on their phone.</p>

                    </div>


                    <div className="flex flex-wrap gap-2.5 w-full ">
                        <div className="grow ">
                            <p className="common-paragraph text-custom-white">Industry</p>
                            <p className="common-paragraph text-custom-ghostgrey">Fintech</p>
                            
                        </div>
                        <div className="grow ">
                            <p className="common-paragraph text-custom-white">Time Taken</p>
                            <p className="common-paragraph text-custom-ghostgrey">3 Weeks</p>
                            
                        </div>
                        <div className="grow ">
                            <p className="common-paragraph text-custom-white">Tools</p>
                            <p className="common-paragraph text-custom-ghostgrey">Figma, Wordpress</p>
                            
                        </div>
                    </div>

                    <div className=''>
                        <p className="common-paragraph text-custom-white">Deliverables</p>
                        <p className="common-paragraph text-custom-ghostgrey">Messaging framework, responsive homepage design, typography, imagery, icons.</p>
                    </div>

                    <div className="flex flex-wrap gap-14">
                        <div className="grow">
                            <h3 className="common-h3-heading text-custom-white">67%</h3>
                            <p className="common-paragraph text-custom-ghostgrey">Fintech</p>
                            
                        </div>
                        <div className="grow">
                            <h3 className="common-h3-heading text-custom-white">2X</h3>
                            <p className="common-paragraph text-custom-ghostgrey">3 Weeks</p>
                            
                        </div>
                        <div className="grow">
                            <h3 className="common-h3-heading text-custom-white">&gt;4X</h3>
                            <p className="common-paragraph text-custom-ghostgrey">Figma, Wordpress</p>
                            
                        </div>
                    </div>
                </main>
                <main className="casestudy-header-second-box px-5 pt-5 sm:px-10 sm:pt-10 lg:pl-10 lg:py-20">
                    <div className='casestudy-header-second-div-img-container lg:relative'>
                        {/* <div className=''> */}
                            <Image src={HeaderContent}
                            width={1008}
                            height={645}
                            alt='img'
                            className='casestudy-header-second-div-img lg:absolute lg:left-0 lg:top-7'
                            />
                        {/* </div> */}
                    </div>
                </main>
            </header>

        </>
    )
}

export default CaseStudyHeader;