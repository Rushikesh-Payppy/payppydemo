import '@/styles/tailwindcss.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import '@/styles/servicebrand/ServiceBrand.css';        //this page structure is similar of brand page so we are using brand page css
import '@/styles/apppage/AppPage.css';
import '@/styles/Typography.css';

//section 1
import  App from '@/Images/apppage/App.jpg';

//section 3
import  Arrow from '@/Images/ServiceBrand/arrowlogo.svg';
import TextRevealComponent from '../TextRevealComponent';
import { ReadyToLevelUpTitleComponent } from '../our-masterpieces/OurWorkSection';
const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})
function AppPageSection()
{
    return(
        <>
        {/* section 1   */}
        <section className={"apppage-section-one "+plus_jakarta_sans.className}>
            <div className="flex flex-col sm:justify-center sm:items-center gap-4 ms:gap-10 lg:gap-12  py-20 px-5  md:px-10 lg:py-28 lg:px-0">
                <h4 className='service-brand-section-one-title common-h5-heading text-custom-almostblack' data-aos="fade-up">We excel in expertise, prioritizing the user experience, meticulous attention to detail, a collaborative approach, brand consistency, timely delivery, and driving your business success.</h4>
                <p className="service-brand-section-one-para common-paragraph text-custom-darkgrey" data-aos="fade-up">Level up user satisfaction and engagement with an intuitive, visually stunning app that delivers a seamless experience. Get ready to leave customers amazed and coming back for more! 🚀</p>
            </div>
            <div className='servicebrand-section-branding-img apppage-section-img'>

            </div>
            {/* <Image src={App}
            width={1440}
            height={500}
            alt='img'
            className='servicebrand-section-branding-img'/> */}
        </section>

        {/* section 2 - brand-identity-process */}
        <section className={"brand-identity-section "+plus_jakarta_sans.className}>
            <div className="flex justify-center flex-col lg:flex-row brand-black-box-and-right-box-container">
                <div className="brand-identity-process-box flex justify-center items-center py-14 px-5 md:py-20 md:px-10 lg:py-28 lg:px-24 ">
                    <h4 className='brand-identity-process-title common-h3-heading text-custom-white text-center lg:text-left' data-aos="fade-up">Digital product/ apps process</h4>
                </div>
                <div>
                    <div className='py-14 px-10  md:py-24 md:px-20 flex justify-center items-center brand-product-strategy-box'>
                        <h5 className='brand-product-strategy-subtitle common-h5-heading text-custom-almostblack text-center lg:text-left m-auto lg:m-0' data-aos="fade-up">Design Thinking process in action with Discovery, Design, Testing and Delivering, each time, every time.</h5>
                    </div>
                    <div className='brand-product-strategy-bottom-box  p-5 sm:py-7 sm:px-20'>
                        <h5 className='brand-product-strategy-duration common-h6-heading  text-custom-almostblack text-center lg:text-left' data-aos="fade-up">6-8 Weeks</h5>
                    </div>
                </div>
            </div>

            {/* 3*3 grid layout  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  parent-grid-box m-auto">
                <div className="flex flex-col   gap-3 lg:gap-4 grid-box justify-center items-center sm:justify-start sm:items-start py-14 px-5 sm:px-10 lg:px-14">
                    <h5 className="grid-boxex-title common-h5-heading text-center sm:text-left  text-custom-almostblack" data-aos="fade-up">Discovery Session</h5>
                    <p className="grid-boxes-para text-center sm:text-left common-paragraph text-custom-darkgrey" data-aos="fade-up">Discovery Workshop Findings Document</p>
                </div>
                <div className="flex flex-col   gap-3 lg:gap-4 grid-box justify-center items-center sm:justify-start sm:items-start py-14 px-5 sm:px-10 lg:px-14">
                    <h5 className="grid-boxex-title common-h5-heading text-center sm:text-left  text-custom-almostblack" data-aos="fade-up">User & Market research</h5>
                    <p className="grid-boxes-para text-center sm:text-left common-paragraph text-custom-darkgrey" data-aos="fade-up">A copy that moves no to yes as soon as they land on your website</p>
                </div>
                <div className="flex flex-col   gap-3 lg:gap-4 grid-box justify-center items-center sm:justify-start sm:items-start py-14 px-5 sm:px-10 lg:px-14">
                    <h5 className="grid-boxex-title common-h5-heading text-center sm:text-left  text-custom-almostblack" data-aos="fade-up">Analysis and Definition</h5>
                    <p className="grid-boxes-para text-center sm:text-left common-paragraph text-custom-darkgrey" data-aos="fade-up">Clearly defining and analysing to derive a framework </p>
                </div>
                <div className="flex flex-col   gap-3 lg:gap-4 grid-box grid-last-3-box justify-center items-center sm:justify-start sm:items-start py-14 px-5 sm:px-10 lg:px-14">
                    <h5 className="grid-boxex-title common-h5-heading text-center sm:text-left  text-custom-almostblack" data-aos="fade-up">Design Strategy</h5>
                    <p className="grid-boxes-para text-center sm:text-left common-paragraph text-custom-darkgrey" data-aos="fade-up">Devising a strategy that works best for your business </p>
                </div>
                <div className="flex flex-col   gap-3 lg:gap-4 grid-box grid-last-3-box grid-last-second-box justify-center items-center sm:justify-start sm:items-start py-14 px-5 sm:px-10 lg:px-14">
                    <h5 className="grid-boxex-title common-h5-heading text-center sm:text-left  text-custom-almostblack" data-aos="fade-up">Design and Test</h5>
                    <p className="grid-boxes-para text-center sm:text-left common-paragraph text-custom-darkgrey" data-aos="fade-up">Testing, iterating until we reach the perfect stage</p>
                </div>
                <div className="flex flex-col   gap-3 lg:gap-4 grid-box grid-last-3-box justify-center items-center sm:justify-start sm:items-start py-14 px-5 sm:px-10 lg:px-14">
                    <h5 className="grid-boxex-title common-h5-heading text-center sm:text-left  text-custom-almostblack" data-aos="fade-up">Delivery</h5>
                    <p className="grid-boxes-para text-center sm:text-left common-paragraph text-custom-darkgrey" data-aos="fade-up">Delivering your kick-ass app along with credentials</p>
                </div>
        
            </div>
        </section>

        {/* section 3  */}
        <section className={"py-20 px-5 md:px-40 lg:p-24 flex flex-col  justify-center items-center gap-20 deliverables-section  bg-custom-almostwhite "+plus_jakarta_sans.className}>
                <h2 className="deliverables-title common-h3-heading text-custom-almostblack text-center" data-aos="fade-up">Deliverables</h2>
               
                <div className="flex flex-col lg:flex-row lg:gap-24">
                    {/* left 4 content  */}
                    <div>
                        
                        <div className="py-8 md:py-10 flex items-center gap-4 deliverables-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt='img'
                            />
    
                            <h5 className="deliverables-box-content common-h6-heading text-custom-almostblack">Workshop Insights</h5>
                        </div>
                        <div className="py-8 md:py-10 flex items-center gap-4 deliverables-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt='img'
                            />
    
                            <h5 className="deliverables-box-content common-h6-heading text-custom-almostblack">UX Research Document</h5>
                        </div>
                        <div className="py-8 md:py-10 flex items-center gap-4 deliverables-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt='img'
                            />
    
                            <h5 className="deliverables-box-content common-h6-heading text-custom-almostblack">Information Architecture</h5>
                        </div>      
                        <div className="py-8 md:py-10 flex items-center gap-4 deliverables-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt='img'
                            />
    
                            <h5 className="deliverables-box-content common-h6-heading text-custom-almostblack">Full product wireframes</h5>
                        </div>        
                    
                    </div>
                   
                    {/* right 4 content  */}
                    <div>
                        
                        <div className="py-8 md:py-10 flex items-center gap-4 deliverables-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt='img'
                            />
    
                            <h5 className="deliverables-box-content common-h6-heading text-custom-almostblack">Usability Testing</h5>
                        </div>
                        <div className="py-8 md:py-10 flex items-center gap-4 deliverables-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt='img'
                            />
    
                            <h5 className="deliverables-box-content common-h6-heading text-custom-almostblack">UI visual designs</h5>
                        </div>
                        <div className="py-8 md:py-10 flex items-center gap-4 deliverables-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt='img'
                            />
    
                            <h5 className="deliverables-box-content common-h6-heading text-custom-almostblack">UI prototypes in action</h5>
                        </div> 
                        <div className="py-8 md:py-10 flex items-center gap-4 deliverables-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt='img'
                            />
    
                            <h5 className="deliverables-box-content common-h6-heading text-custom-almostblack">Design systems</h5>
                        </div> 
                    </div>
                  
                </div>
        </section>

          {/* section 4 */}
          <ReadyToLevelUpTitleComponent heading={'See for yourself'} link={'/our-masterpieces'} btntext={"Take me there"}/>

        {/* section 5 -bottom link box */}
        <section className={'pl-5    pr-5   py-14  md:px-24  flex flex-col sm:flex-row justify-center md:justify-between items-center flex-wrap gap-3 service-brand-section-5 '+plus_jakarta_sans.className}>
            <h4 className="are-you-looking-for-title common-h5-heading text-custom-mediumgrey" data-aos="fade-up">Are you looking for</h4>
            <Link href='/decks-that-convert' className='service-brand-bottom-blue-link common-h5-heading text-custom-primary' data-aos="fade-up">Pitch Deck</Link>

        </section>

      

        <TextRevealComponent/>
        </>
    )
}
export default AppPageSection;