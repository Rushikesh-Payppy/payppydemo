import '@/styles/tailwindcss.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import '@/styles/servicebrand/ServiceBrand.css';
import '@/styles/Typography.css';

//section 1
import  BrandingImage from '@/Images/ServiceBrand/branding-img.jpg';

//section 3
import  Arrow from '@/Images/ServiceBrand/arrowlogo.svg';
import TextRevealComponent from '../TextRevealComponent';
import { ReadyToLevelUpTitleComponent } from '../our-masterpieces/OurWorkSection';
const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})
function ServcideBrandSection()
{
    return(
        <>
        <div className={' '+plus_jakarta_sans.className}>

        {/* section 1   */}
        <section className=" ">
            <div className="flex flex-col sm:justify-center sm:items-center gap-4 ms:gap-10 lg:gap-12  py-20 px-5  md:px-10 lg:py-28 lg:px-0 ">
                <h4 className='service-brand-section-one-title common-h5-heading text-custom-almostblack' data-aos="fade-up">We are driven by research, informed discovery and empathetic understanding of what brands and their end consumers need, want, desire. This process helps us with strategic design solutions. </h4>
                <p className="service-brand-section-one-para common-paragraph text-custom-darkgrey" data-aos="fade-up">We help you to tell your story in an instant. It builds an emotional connection, represents a promise while building confidence and trust. In short, you’re in for a treat 🤑</p>
            </div>
            {/* <div className="servicebrand-section-branding-img-container">
                <div className="servicebrand-section-branding-img" style={{backgroundImage:BrandingImage}}></div>
            </div> */}

            <div className='servicebrand-section-branding-img'>

            </div>
            {/* <Image src={BrandingImage}
            width={1440}
            height={500}
            alt='img'
            className='servicebrand-section-branding-img'/>  */}
        </section>

        {/* section 2 - brand-identity-process */}
        <section className="brand-identity-section ">
            <div className="flex justify-center flex-col lg:flex-row brand-black-box-and-right-box-container">
                <div className="brand-identity-process-box bg-custom-almostblack flex justify-center items-center py-14 px-5 md:py-20 md:px-10 lg:py-28 lg:px-24 ">
                    <h3 className='brand-identity-process-title common-h3-heading text-custom-white text-center lg:text-left' data-aos="fade-up">Brand Identity Process</h3>
                </div>
                <div>
                    <div className='py-14 px-10  md:py-24 md:px-20 flex justify-center items-center brand-product-strategy-box'>
                        <h5 className='brand-product-strategy-subtitle common-h5-heading text-custom-almostblack text-center lg:text-left m-auto lg:m-0' data-aos="fade-up">Brand and Product Strategy, User research and Analysis, Content Strategy</h5>
                    </div>
                    <div className='brand-product-strategy-bottom-box p-5 sm:py-7 sm:px-20'>
                        <h5 className='brand-product-strategy-duration common-h6-heading  text-custom-almostblack text-center lg:text-left' data-aos="fade-up">4-5 Weeks</h5>
                    </div>
                </div>
            </div>

            {/* 3*3 grid layout  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  parent-grid-box m-auto">
                <div className="flex flex-col   gap-3 lg:gap-4 grid-box justify-center items-center sm:justify-start sm:items-start py-14 px-5 sm:px-10 lg:px-14">
                    <h5 className="grid-boxex-title common-h5-heading text-center sm:text-left  text-custom-almostblack" data-aos="fade-up">Discovery Insights</h5>
                    <p className="grid-boxes-para text-center sm:text-left common-paragraph text-custom-darkgrey" data-aos="fade-up">Discovery Workshop Findings Document</p>
                </div>
                <div className="flex flex-col   gap-3 lg:gap-4 grid-box  justify-center items-center sm:justify-start sm:items-start py-14 px-5 sm:px-10 lg:px-14">
                    <h5 className="grid-boxex-title common-h5-heading text-center sm:text-left  text-custom-almostblack" data-aos="fade-up">Messaging</h5>
                    <p className="grid-boxes-para text-center sm:text-left common-paragraph text-custom-darkgrey" data-aos="fade-up">A structured representation of what your company &  products stand for.</p>
                </div>
                <div className="flex flex-col  gap-3 lg:gap-4 grid-box  justify-center items-center sm:justify-start sm:items-start py-14 px-5 sm:px-10 lg:px-14">
                    <h5 className="grid-boxex-title common-h5-heading text-center sm:text-left  text-custom-almostblack" data-aos="fade-up">Your Brand Promise</h5>
                    <p className="grid-boxes-para text-center sm:text-left common-paragraph text-custom-darkgrey" data-aos="fade-up">A promise of value derived from functional and emotional benefits</p>
                </div>
                <div className="flex flex-col  gap-3 lg:gap-4 grid-box  justify-center items-center sm:justify-start sm:items-start py-14 px-5 sm:px-10 lg:px-14">
                    <h5 className="grid-boxex-title common-h5-heading text-center sm:text-left  text-custom-almostblack" data-aos="fade-up">Brand Value Proposition</h5>
                    <p className="grid-boxes-para text-center sm:text-left common-paragraph text-custom-darkgrey" data-aos="fade-up">A short statement for what they get from what you do</p>
                </div>
                <div className="flex flex-col  gap-3 lg:gap-4 grid-box  justify-center items-center sm:justify-start sm:items-start py-14 px-5 sm:px-10 lg:px-14">
                    <h5 className="grid-boxex-title common-h5-heading text-center sm:text-left  text-custom-almostblack" data-aos="fade-up">Brand Positioning</h5>
                    <p className="grid-boxes-para text-center sm:text-left common-paragraph text-custom-darkgrey" data-aos="fade-up">Where you fit in the marketplace</p>
                </div>
                <div className="flex flex-col  gap-3 lg:gap-4 grid-box  justify-center items-center sm:justify-start sm:items-start py-14 px-5 sm:px-10 lg:px-14">
                    <h5 className="grid-boxex-title common-h5-heading text-center sm:text-left  text-custom-almostblack" data-aos="fade-up">Target Audience(s)</h5>
                    <p className="grid-boxes-para text-center sm:text-left common-paragraph text-custom-darkgrey" data-aos="fade-up">Your ideal buyers or users</p>
                </div>
                <div className="flex flex-col  gap-3 lg:gap-4 grid-box grid-last-3-box justify-center items-center sm:justify-start sm:items-start py-14 px-5 sm:px-10 lg:px-14">
                    <h5 className="grid-boxex-title common-h5-heading text-center sm:text-left  text-custom-almostblack" data-aos="fade-up">SMART Goals</h5>
                    <p className="grid-boxes-para text-center sm:text-left common-paragraph text-custom-darkgrey" data-aos="fade-up">Your short-term and long-term goals</p>
                </div>
                <div className="flex flex-col  gap-3 lg:gap-4 grid-box grid-last-3-box justify-center items-center sm:justify-start sm:items-start py-14 px-5 sm:px-10 lg:px-14">
                    <h5 className="grid-boxex-title common-h5-heading text-center sm:text-left  text-custom-almostblack" data-aos="fade-up">Tone of Voice</h5>
                    <p className="grid-boxes-para text-center sm:text-left common-paragraph text-custom-darkgrey" data-aos="fade-up">How you sound to your customers in different situations matters the most</p>
                </div>
                <div className="flex flex-col  gap-3 lg:gap-4 grid-box grid-last-3-box grid-last-second-box justify-center items-center sm:justify-start sm:items-start py-14 px-5 sm:px-10 lg:px-14">
                    <h5 className="grid-boxex-title common-h5-heading text-center sm:text-left  text-custom-almostblack" data-aos="fade-up">Elevator Pitch</h5>
                    <p className="grid-boxes-para text-center sm:text-left common-paragraph text-custom-darkgrey" data-aos="fade-up">A 30-second description of your value proposition</p>
                </div>
                <div className="grid-box grid-last-3-box hidden sm:block lg:hidden"></div>
            </div>
        </section>

        {/* section 3  */}
        <section className=" py-20 px-5 sm:px-40 lg:p-24 flex flex-col  justify-center items-center gap-20 deliverables-section bg-custom-almostwhite">
                <h3 className="deliverables-title common-h3-heading text-custom-almostblack text-center" data-aos="fade-up">Deliverables</h3>
               
                <div className="flex flex-col lg:flex-row lg:gap-24">
                    {/* left 5 content  */}
                    <div>
                        
                        <div className="py-8 md:py-10 flex items-center gap-4 deliverables-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt='img'
                            />
    
                            <h5 className="deliverables-box-content common-h6-heading text-custom-almostblack">Mood Boards </h5>
                        </div>
                        <div className="py-8 md:py-10 flex items-center gap-4 deliverables-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt='img'
                            />
    
                            <h5 className="deliverables-box-content common-h6-heading text-custom-almostblack">Logo</h5>
                        </div>
                        <div className="py-8 md:py-10 flex items-center gap-4 deliverables-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt='img'
                            />
    
                            <h5 className="deliverables-box-content common-h6-heading text-custom-almostblack">Tagline</h5>
                        </div>
                        <div className="py-8 md:py-10 flex items-center gap-4 deliverables-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt='img'
                            />
    
                            <h5 className="deliverables-box-content common-h6-heading text-custom-almostblack">Brand guide/book</h5>
                        </div>
                        <div className="py-8 md:py-10 flex items-center gap-4 deliverables-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt='img'
                            />
    
                            <h5 className="deliverables-box-content common-h6-heading text-custom-almostblack">Colour usage</h5>
                        </div>
                        
                        
                    
                    </div>
                    
                    {/* right 5 content  */}
                    <div>
                        
                        <div className="py-8 md:py-10 flex items-center gap-4 deliverables-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt="img"
                            />
    
                            <h5 className="deliverables-box-content common-h6-heading text-custom-almostblack">Typography options</h5>
                        </div>
                        <div className="py-10 flex items-center gap-4 deliverables-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt="img"
                            />
    
                            <h5 className="deliverables-box-content common-h6-heading text-custom-almostblack">Business cards </h5>
                        </div>
                        <div className="py-8 md:py-10 flex items-center gap-4 deliverables-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt="img"
                            />
    
                            <h5 className="deliverables-box-content common-h6-heading text-custom-almostblack">Letterhead</h5>
                        </div>
                        <div className="py-8 md:py-10 flex items-center gap-4 deliverables-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt="img"
                            />
    
                            <h5 className="deliverables-box-content common-h6-heading text-custom-almostblack">Presentation templates </h5>
                        </div>
                        <div className="py-8 md:py-10 flex items-center gap-4 deliverables-border-box" data-aos="fade-up">
                            <Image src={Arrow}
                            width={36}
                            height={36}
                            alt="img"
                            />
    
                            <h5 className="deliverables-box-content common-h6-heading text-custom-almostblack">LinkedIn profile cover </h5>
                        </div>
                        
                        
                    
                    </div>
                  
                </div>
        </section>

        {/* section 4 */}
        <ReadyToLevelUpTitleComponent heading={'See for yourself'} link={'/our-masterpieces'} btntext={"Take me there"}/>


        {/* section 5-bottom link box */}
        <section className='pl-5 pr-5 py-14  md:px-24  flex flex-col sm:flex-row justify-center md:justify-between items-center flex-wrap gap-3 service-brand-section-5 '>
            <h4 className="are-you-looking-for-title common-h5-heading text-custom-mediumgrey" data-aos="fade-up">Are you looking for</h4>
            <Link href='/websites-that-sell' className='service-brand-bottom-blue-link' data-aos="fade-up">A kick-ass website</Link>

        </section>


        <TextRevealComponent/>

        </div>

        </>
    )
}
export default ServcideBrandSection;