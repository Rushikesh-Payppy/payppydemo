import '@/styles/tailwindcss.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import '@/styles/servicebrand/ServiceBrand.css';        //this page structure is similar of brand page so we are using brand page css
import '@/styles/deckpage/Deckpage.css';
import '@/styles/Typography.css';

//section 1
import  App from '@/Images/deckpage/Pitch Deck.jpg';

//section 3
import  Arrow from '@/Images/ServiceBrand/arrowlogo.svg';
import TextRevealComponent from '../TextRevealComponent';
import { ReadyToLevelUpTitleComponent } from '../our-masterpieces/OurWorkSection';
const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})
function DeckpageSection()
{
    return(
        <>
        {/* section 1   */}
        <section className={"apppage-section-one "+plus_jakarta_sans.className}>
            <div className="flex flex-col sm:justify-center sm:items-center gap-4 ms:gap-10 lg:gap-12  py-20 px-5  md:px-10 lg:py-28 lg:px-0 ">
                <h4 className='service-brand-section-one-title common-h5-heading text-custom-almostblack' data-aos="fade-up">We design and curate investor pitch decks with industry's best practices and relevant formats . From clear propositions to persuasive content, we make sure you bag those funds at every stage.  </h4>
                <p className="service-brand-section-one-para common-paragraph text-custom-darkgrey" data-aos="fade-up">A solid pitch deck shows how our product can scale big-time, handles risks like a boss, and proves we're all about financial success. It's your ticket to attracting investors, securing funding, and taking your business to the next level 💪</p>
            </div>
            <Image src={App}
            width={1440}
            height={500}
            alt='img'
            className='servicebrand-section-branding-img'/>
        </section>

        {/* section 2 - brand-identity-process */}
        <section className={"brand-identity-section "+plus_jakarta_sans.className}>
            <div className="flex justify-center flex-col lg:flex-row brand-black-box-and-right-box-container">
                <div className="brand-identity-process-box bg-custom-almostblack flex justify-center items-center py-14 px-5 md:py-20 md:px-10 lg:py-28 lg:px-24 ">
                    <h4 className='brand-identity-process-title common-h3-heading text-custom-white' data-aos="fade-up">Pitch deck process</h4>
                </div>
                <div>
                    <div className='py-14 px-10  md:py-24 md:px-20 flex justify-center items-center brand-product-strategy-box'>
                        <h5 className='brand-product-strategy-subtitle common-h5-heading text-custom-almostblack text-center lg:text-left m-auto lg:m-0' data-aos="fade-up">User research, Market research and Brand proposition</h5>
                    </div>
                    <div className='brand-product-strategy-bottom-box p-5 sm:py-7 sm:px-20'>
                        <h5 className='brand-product-strategy-duration common-h6-heading  text-custom-almostblack text-center lg:text-left' data-aos="fade-up">7-10 Days</h5>
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
                    <h5 className="grid-boxex-title common-h5-heading text-center sm:text-left  text-custom-almostblack" data-aos="fade-up">Content writing</h5>
                    <p className="grid-boxes-para text-center sm:text-left common-paragraph text-custom-darkgrey" data-aos="fade-up">Content for slides written in a standard format</p>
                </div>
                <div className="flex flex-col   gap-3 lg:gap-4 grid-box justify-center items-center sm:justify-start sm:items-start py-14 px-5 sm:px-10 lg:px-14">
                    <h5 className="grid-boxex-title common-h5-heading text-center sm:text-left  text-custom-almostblack" data-aos="fade-up">Designing</h5>
                    <p className="grid-boxes-para text-center sm:text-left common-paragraph text-custom-darkgrey" data-aos="fade-up">Making it visually appealing and easy to understand </p>
                </div>
                <div className="flex flex-col   gap-3 lg:gap-4 grid-box grid-last-3-box justify-center items-center sm:justify-start sm:items-start py-14 px-5 sm:px-10 lg:px-14">
                    <h5 className="grid-boxex-title common-h5-heading text-center sm:text-left  text-custom-almostblack" data-aos="fade-up">Graphic creation</h5>
                    <p className="grid-boxes-para text-center sm:text-left common-paragraph text-custom-darkgrey" data-aos="fade-up">Infographics, tables, graphs, statistics that complement</p>
                </div>
                <div className="flex flex-col   gap-3 lg:gap-4 grid-box grid-last-3-box grid-last-second-box justify-center items-center sm:justify-start sm:items-start py-14 px-5 sm:px-10 lg:px-14">
                    <h5 className="grid-boxex-title common-h5-heading text-center sm:text-left  text-custom-almostblack" data-aos="fade-up">Back-pocket Slides</h5>
                    <p className="grid-boxes-para text-center sm:text-left common-paragraph text-custom-darkgrey" data-aos="fade-up">Just in case you ever need some extra content ready</p>
                </div>
                <div className="flex flex-col   gap-3 lg:gap-4 grid-box grid-last-3-box justify-center items-center sm:justify-start sm:items-start py-14 px-5 sm:px-10 lg:px-14">
                    <h5 className="grid-boxex-title common-h5-heading text-center sm:text-left  text-custom-almostblack" data-aos="fade-up">Packaging & Delivery</h5>
                    <p className="grid-boxes-para text-center sm:text-left common-paragraph text-custom-darkgrey" data-aos="fade-up">After iterations and feedbacks, we deliver the coolest decks and scripts </p>
                </div>
        
            </div>
        </section>

        {/* section 3  */}
        <section className={"py-20 px-5 md:px-40 lg:p-24 flex flex-col  justify-center items-center gap-20  bg-custom-almostwhite deliverables-section "+plus_jakarta_sans.className}>
                <h2 className="deliverables-title common-h3-heading text-custom-almostblack text-center" data-aos="fade-up">Deliverables</h2>
               
                <div className="flex flex-col lg:flex-row lg:gap-24">
                    {/* left 4 content  */}
                    <div>
                        
                        <div className="py-8 md:py-10 flex items-center gap-4 deliverables-border-box deckpage-delivery-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt='img'
                            />
    
                            <h5 className="deliverables-box-content  common-h6-heading text-custom-almostblack">Vision & Mission of the company</h5>
                        </div>
                        <div className="py-8 md:py-10 flex items-center gap-4 deliverables-border-box deckpage-delivery-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt='img'
                            />
    
                            <h5 className="deliverables-box-content  common-h6-heading text-custom-almostblack">Tagline</h5>
                        </div>
                        <div className="py-8 md:py-10 flex items-center gap-4 deliverables-border-box deckpage-delivery-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt='img'
                            />
    
                            <h5 className="deliverables-box-content  common-h6-heading text-custom-almostblack">Brand Identity</h5>
                        </div>      
                        <div className="py-8 md:py-10 flex items-center gap-4 deliverables-border-box deckpage-delivery-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt='img'
                            />
    
                            <h5 className="deliverables-box-content  common-h6-heading text-custom-almostblack">Teaser Deck</h5>
                        </div>        
                    
                    </div>
                   
                    {/* right 4 content  */}
                    <div>
                        
                        <div className="py-8 md:py-10 flex items-center gap-4 deliverables-border-box deckpage-delivery-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt='img'
                            />
    
                            <h5 className="deliverables-box-content  common-h6-heading text-custom-almostblack">Detailed Deck</h5>
                        </div>
                        <div className="py-8 md:py-10 flex items-center gap-4 deliverables-border-box deckpage-delivery-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt='img'
                            />
    
                            <h5 className="deliverables-box-content  common-h6-heading text-custom-almostblack">Script for presenting</h5>
                        </div>
                        <div className="py-8 md:py-10 flex items-center gap-4 deliverables-border-box deckpage-delivery-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt='img'
                            />
    
                            <h5 className="deliverables-box-content  common-h6-heading text-custom-almostblack">Back-pocket slides</h5>
                        </div> 
                        <div className="py-8 md:py-10 flex items-center gap-4 deliverables-border-box deckpage-delivery-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt='img'
                            />
    
                            <h5 className="deliverables-box-content  common-h6-heading text-custom-almostblack">Presentation templates </h5>
                        </div> 
                    </div>
                  
                </div>
        </section>

         {/* section 4 */}
         <ReadyToLevelUpTitleComponent heading={'See for yourself'} link={'/our-masterpieces'} btntext={"Take me there"}/>

        {/* section 5-bottom link box */}
        <section className={'pl-5 pr-5 py-14  md:px-24  flex flex-col sm:flex-row justify-center md:justify-between items-center flex-wrap gap-3 service-brand-section-5 '+plus_jakarta_sans.className}>
            <h4 className="are-you-looking-for-title common-h5-heading text-custom-mediumgrey" data-aos="fade-up">Are you looking for</h4>
            <Link href='/best-branding' className='service-brand-bottom-blue-link' data-aos="fade-up">Brand Identity</Link>

        </section>

       


        <TextRevealComponent/>
        </>
    )
}
export default DeckpageSection;