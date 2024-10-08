import '@/styles/tailwindcss.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import '@/styles/servicebrand/ServiceBrand.css';        //this page structure is similar of brand page so we are using brand page css
import '@/styles/websitepage/WebsitePage.css';
import '@/styles/Typography.css';

//section 1
import  WebsiteImage from '@/Images/websitepage/Website.jpg';

//section 3
import  Arrow from '@/Images/ServiceBrand/arrowlogo.svg';
import TextRevealComponent from '../TextRevealComponent';
import { ReadyToLevelUpTitleComponent } from '../our-masterpieces/OurWorkSection';
const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})
function WebsitePageSection()
{
    return(
        <>
        {/* section 1   */}
        <section className={" "+plus_jakarta_sans.className}>
            <div className="flex flex-col sm:justify-center sm:items-center gap-4 ms:gap-10 lg:gap-12  py-20 px-4  md:px-10 lg:py-28 lg:px-0  ">
                <h4 className='service-brand-section-one-title common-h5-heading text-custom-almostblack' data-aos="fade-up">We're all about driving sales, leads, and business growth through your website. Our team crafts a killer website that's both visually appealing and captivating.</h4>
                <p className="service-brand-section-one-para common-paragraph text-custom-darkgrey" data-aos="fade-up">Think of your website as a powerful magnet. When you master the art of storytelling, you'll create meaningful human connections, not just customers. Get ready for an exciting journey! 💸</p>
            </div>
            <Image src={WebsiteImage}
            width={1440}
            height={500}
            alt="img"
            className='servicebrand-section-branding-img'/>
        </section>

        {/* section 2 - brand-identity-process */}
        <section className={"brand-identity-section "+plus_jakarta_sans.className}>
            <div className="flex justify-center flex-col lg:flex-row brand-black-box-and-right-box-container">
                <div className="brand-identity-process-box flex justify-center items-center py-14 px-4 md:py-20 md:px-10 lg:py-28 lg:px-24 ">
                    <h4 className='brand-identity-process-title common-h3-heading text-custom-white' data-aos="fade-up" >Website Process</h4>
                </div>
                <div>
                    <div className='py-14 px-10  md:py-24 md:px-20 flex justify-center items-center brand-product-strategy-box'>
                        <h5 className='brand-product-strategy-subtitle common-h5-heading text-custom-almostblack text-center lg:text-left m-auto lg:m-0' data-aos="fade-up">Brand and Product Strategy, User research and Analysis, Content Strategy</h5>
                    </div>
                    <div className='brand-product-strategy-bottom-box p-5 sm:py-7 sm:px-20'>
                        <h5 className='brand-product-strategy-duration  common-h6-heading  text-custom-almostblack text-center lg:text-left' data-aos="fade-up">4-5 Weeks</h5>
                    </div>
                </div>
            </div>

            {/* 3*3 grid layout  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  parent-grid-box m-auto">
                <div className="flex flex-col   gap-3 lg:gap-4 grid-box justify-center items-center sm:justify-start sm:items-start py-14 px-5 sm:px-10 lg:px-14">
                    <h5 className="grid-boxex-title common-h5-heading text-center sm:text-left  text-custom-almostblack" data-aos="fade-up">Discovery Insights</h5>
                    <p className="grid-boxes-para text-center sm:text-left common-paragraph text-custom-darkgrey" data-aos="fade-up">Discovery Workshop Findings Document</p>
                </div>
                <div className="flex flex-col   gap-3 lg:gap-4 grid-box justify-center items-center sm:justify-start sm:items-start py-14 px-5 sm:px-10 lg:px-14">
                    <h5 className="grid-boxex-title common-h5-heading text-center sm:text-left  text-custom-almostblack" data-aos="fade-up">Conversion copywriting</h5>
                    <p className="grid-boxes-para text-center sm:text-left common-paragraph text-custom-darkgrey" data-aos="fade-up">A copy that moves no to yes as soon as they land on your website</p>
                </div>
                <div className="flex flex-col   gap-3 lg:gap-4 grid-box justify-center items-center sm:justify-start sm:items-start py-14 px-5 sm:px-10 lg:px-14">
                    <h5 className="grid-boxex-title common-h5-heading text-center sm:text-left  text-custom-almostblack" data-aos="fade-up">Visual Design</h5>
                    <p className="grid-boxes-para text-center sm:text-left common-paragraph text-custom-darkgrey" data-aos="fade-up">An appealing, drool-worthy identity for your website</p>
                </div>
                <div className="flex flex-col   gap-3 lg:gap-4 grid-box grid-last-3-box justify-center items-center sm:justify-start sm:items-start py-14 px-5 sm:px-10 lg:px-14">
                    <h5 className="grid-boxex-title common-h5-heading text-center sm:text-left  text-custom-almostblack" data-aos="fade-up">Web Development</h5>
                    <p className="grid-boxes-para text-center sm:text-left common-paragraph text-custom-darkgrey" data-aos="fade-up">An optimised website that’s developed with finesse </p>
                </div>
                <div className="flex flex-col   gap-3 lg:gap-4 grid-box grid-last-3-box grid-last-second-box justify-center items-center sm:justify-start sm:items-start py-14 px-5 sm:px-10 lg:px-14">
                    <h5 className="grid-boxex-title common-h5-heading text-center sm:text-left  text-custom-almostblack" data-aos="fade-up">Basic SEO</h5>
                    <p className="grid-boxes-para text-center sm:text-left common-paragraph text-custom-darkgrey" data-aos="fade-up">To make you standout in those search results</p>
                </div>
                <div className="flex flex-col   gap-3 lg:gap-4 grid-box grid-last-3-box justify-center items-center sm:justify-start sm:items-start py-14 px-5 sm:px-10 lg:px-14">
                    <h5 className="grid-boxex-title common-h5-heading text-center sm:text-left  text-custom-almostblack grid-boxex-brand-website-title " data-aos="fade-up">Brand Guide for website</h5>
                    <p className="grid-boxes-para text-center sm:text-left common-paragraph text-custom-darkgrey" data-aos="fade-up">Set of guidelines that define the consistent visual and tonal elements</p>
                </div>
        
            </div>
        </section>

        {/* section 3  */}
        <section className={"py-20 px-4 md:px-40 lg:p-24 flex flex-col  justify-center items-center gap-20  bg-custom-almostwhite deliverables-section "+plus_jakarta_sans.className}>
                <h2 className="deliverables-title  common-h3-heading text-custom-almostblack text-center" data-aos="fade-up">Deliverables</h2>
               
                <div className="flex flex-col lg:flex-row lg:gap-24">
                    {/* left 3 content  */}
                    <div>
                        
                        <div className="py-8 md:py-10 flex items-center gap-4 deliverables-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt="img"
                            />
    
                            <h5 className="deliverables-box-content common-h6-heading text-custom-almostblack">Discovery Insights </h5>
                        </div>
                        <div className="py-8 md:py-10 flex items-center gap-4 deliverables-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt="img"
                            />
    
                            <h5 className="deliverables-box-content common-h6-heading text-custom-almostblack">Visual design</h5>
                        </div>
                        <div className="py-8 md:py-10 flex items-center gap-4 deliverables-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt="img"
                            />
    
                            <h5 className="deliverables-box-content common-h6-heading text-custom-almostblack">Developed version </h5>
                        </div>        
                    
                    </div>
                    
                    {/* right 3 content  */}
                    <div>
                        
                        <div className="py-8 md:py-10 flex items-center gap-4 deliverables-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt="img"
                            />
    
                            <h5 className="deliverables-box-content common-h6-heading text-custom-almostblack">Content copy doc</h5>
                        </div>
                        <div className="py-8 md:py-10 flex items-center gap-4 deliverables-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt="img"
                            />
    
                            <h5 className="deliverables-box-content common-h6-heading text-custom-almostblack">Brand guide for website</h5>
                        </div>
                        <div className="py-8 md:py-10 flex items-center gap-4 deliverables-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt="img"
                            />
    
                            <h5 className="deliverables-box-content common-h6-heading text-custom-almostblack" >Orientation Session</h5>
                        </div> 
                    </div>
                  
                </div>
        </section>

          {/* section 4  */}
          <ReadyToLevelUpTitleComponent heading={'See for yourself'} link={'/our-masterpieces'} btntext={"Take me there"}/>

        {/* section 5 -bottom link box */}
        <section className={'pl-5 pr-5 py-14  md:px-24  flex flex-col sm:flex-row justify-center lg:justify-between items-center flex-wrap gap-3 service-brand-section-5 '+plus_jakarta_sans.className}>
            <h4 className="are-you-looking-for-title common-h5-heading text-custom-mediumgrey" data-aos="fade-up">Are you looking for</h4>
            <Link href='/apps-that-make-sense' className='service-brand-bottom-blue-link ' data-aos="fade-up">Digital Product/ App design</Link>

        </section>

      


        <TextRevealComponent/>
        </>
    )
}
export default WebsitePageSection;