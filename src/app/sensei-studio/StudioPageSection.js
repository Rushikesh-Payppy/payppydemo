'use client';
import '@/styles/tailwindcss.css';
import '@/styles/studiopage/StudioPage.css';
import '@/styles/Typography.css';

import Image from 'next/image';
//section 1
import DesignBranding from '@/Images/studiopage/design-branding.jpg';
import Arrow from '@/Images/studiopage/GetInTouchArrow.svg';

//section 2 our clients Image
import Pragilis from '@/Images/studiopage/Pragilis.png';
import TriperiSmith from '@/Images/studiopage/Triperi Smith.png';
import Payglocal from '@/Images/studiopage/PG.png';
import Merloa from '@/Images/studiopage/Merloa.png';

//section 4
import Arrow2 from '@/Images/studiopage/arrow-right-up-line.svg';
import Brand from '@/Images/studiopage/branding-icon.svg';
import PitchDeck from '@/Images/studiopage/pitch-deck-icon.svg';
import Website from '@/Images/studiopage/websites-icon.svg';
import Group from '@/Images/studiopage/group.svg';

//section 5 our clients backed by Image
import TigerGlobal from '@/Images/studiopage/tiger-global.png';
import Siquoia from '@/Images/studiopage/siquoia.png';
import Beenext from '@/Images/studiopage/beenext.png';

//section 6 our clients Image
import Merlot from '@/Images/studiopage/Merlot.jpg';
import PragilisImage from '@/Images/studiopage/pragilisImage.jpg';
import TSA from '@/Images/studiopage/TSA.jpg';
import PayGlocalImage from '@/Images/studiopage/PayGlocalImage.jpg';

import ArrowUp from '@/Images/studiopage/arrow-up.svg';



import { useRouter } from 'next/navigation';

import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';
import { ReadyToLevelUpTitleComponent } from '../our-masterpieces/OurWorkSection';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})

function StudioPageSection() {

    let router=useRouter();

    let[accordionState,setAccordionState]=useState(-1);

    // let accordionDivs=document.querySelectorAll('.accordion-container');

    function handleAccordion(index)
    {
        if(accordionState==index){
            setAccordionState(-1);
            return;
        }
        setAccordionState(index);

        // accordionDivs.forEach((element,arrindex)=>{
        //     if(index==arrindex){
        //         element.querySelector('.accordion-answer').classList.toggle('accordion-visible');
        //         return;
        //     }
        //     else{
        //         element.querySelector('.accordion-answer').classList.remove('accordion-visible');
        //     }
        // })
    }

    return(
        <>
        {/* section 1 */}
        <section className={'studio-page-section-one '+plus_jakarta_sans.className}>
            <div className='senseistudio-page-section-img'>

            </div>
            {/* <div className="design-branding-box">
                <Image src={DesignBranding}
                width={1400}
                height={500}
                alt="img"
                className='design-branding-img'/>
            </div> */}
            <div className="flex flex-col lg:flex-row justify-center strategic-product-design-and-get-in-touch-parent-container pb-20 lg:pb-0">
                <div className='strategic-product-design-subheading-container flex items-center justify-start lg:justify-center'>
                    <h2 className='common-h2-heading studio-page-subheading text-custom-almostblack' data-aos="fade-up">Strategic product design and branding for global brands</h2>
                </div>
                <div className='get-in-touch-container '>
                    <div className='get-in-touch-inner-container  flex flex-col  gap-4 sm:gap-8'>
                        <h3 className='common-h5-heading welcome-to-hottest-design-title text-custom-almostblack' data-aos="fade-up">Welcome to the hottest design powerhouse in town! </h3>
                        <p className="common-paragraph studio-section-one-para text-custom-darkgrey" data-aos="fade-up">We're the geeks behind mind-blowing Brand Identities and game-changing Experience designs for cutting-edge companies worldwide. </p>
                        <p className="common-paragraph studio-section-one-para text-custom-darkgrey"  data-aos="fade-up">Ready for the coolest vibes?  👊</p>
                    </div>
                    <a href='mailto:hello@payppy.co'  className='flex flex-row get-in-touh-btn mx-auto sm:mx-10 lg:mx-20' data-aos="fade-up">
                        <span className='get-in-touch-txt grow text-center flex justify-center items-center common-all-caps'>GET IN TOUCH</span>
                        <div className='get-in-touch-img-div relative'>
                            <Image src={Arrow} 
                            width={28}
                            height={28}
                            alt="img"
                            className='get-in-touch-arrow-img absolute top-6 right-6'
                            quality={100}
                            />
                        </div>
                    </a>
                </div>
            </div>
        </section>

        {/* section 2  - our clients*/}
        <section className={'studio-our-client-section bg-custom-almostwhite py-14 px-5  sm:py-24 sm:px-0 flex flex-col justify-center items-center gap-10 '+plus_jakarta_sans.className}>
            <h5 className='common-all-caps studio-our-client-title text-custom-darkgrey' data-aos="fade-up">- OUR CLIENTS -</h5>
            <div className="flex flex-row justify-between gap-6 sm:gap-8 md:gap-10 items-baseline our-client-img-container">
                <Image src={Pragilis}
                width={185}
                height={67}
                alt="img"
                data-aos="fade-up"
                className='our-client-pragilis-img'
                quality={100}
                />

                <Image src={TriperiSmith}
                width={264}
                height={40}
                alt="img"
                data-aos="fade-up"
                className='our-client-tripersmith-img'
                quality={100}
                />

                <Image src={Payglocal}
                width={219}
                height={30}
                alt="img"
                data-aos="fade-up"
                className='our-client-payglocal-img'
                quality={100}
                />

                <Image src={Merloa}
                width={217}
                height={55}
                alt="img"
                data-aos="fade-up"
                className='our-client-merola-img'
                quality={100}
                />
            </div>
        </section>

        {/* section 3 - tastic methodology  */}
        <section className={"tastic-methodology-section flex  justify-start lg:justify-center items-center py-20 px-5 sm:px-10 lg:pt-36 lg:pb-24 "+plus_jakarta_sans.className}>
            
            <div className="tastic-methodology-inner-section flex flex-col gap-4 sm:gap-12">
               
                <div className='flex flex-col gap-4 sm:gap-7'>
                    <h5 className=" common-all-caps" data-aos="fade-up">HOW THINGS WORK HERE</h5>
                    <h2 className='common-h2-heading tastic-methodology-title text-custom-almostblack' data-aos="fade-up">A flex-tastic methodology and solving problems with design </h2>                    
                </div>
                
                <div className='flex flex-col gap-4 sm:gap-7'>
                    <h6 className='common-h6-heading text-custom-darkgrey' data-aos="fade-up">Our secret sauce?</h6>
                    <p className="common-paragraph tastic-methodology-para text-custom-darkgrey" data-aos="fade-up">We rock the industry with our killer combo of Design Thinking and Sprint methodologies. With our ultra-optimized design delivery process, we'll have jaw-dropping results in your hands in no time. 
                    <br /><br />
                    Ready to level up? Let's make magic happen! ✨🔥</p>
                </div>
            </div>
        </section>

        {/* section 4  -  brand-pitch-websites-product-section */}
        <section className={"brand-pitch-websites-product-section flex flex-wrap "+plus_jakarta_sans.className}>
            <div className="brand-box relative flex flex-col justify-center items-center sm:items-start  gap-3 sm:gap-4 sm:pt-20 pt-10 pb-10 px-5 sm:pb-10 sm:px-10" onClick={()=>{router.push('/best-branding')}}>
                <Image src={Arrow2}
                width={40}
                height={40}
                alt="img"
                data-aos="fade-up"
                className='brand-arrow absolute top-5 right-5  '
                />

                <Image src={Brand}
                width={100}
                height={100}
                data-aos="fade-up"
                alt="img"
                quality={100}
                />
                <h3 className="common-h5-heading text-custom-primary brand-title " data-aos="fade-up">Brand Identity</h3>
                <p className="common-paragraph brand-section-para text-custom-darkgrey" data-aos="fade-up">Research , Strategy and Brand Identity Design</p>
            </div>
            <div className="brand-box relative flex flex-col justify-center items-center sm:items-start  gap-3 sm:gap-4 sm:pt-20 pt-10 pb-10 px-5 sm:pb-10 sm:px-10" onClick={()=>{router.push('/decks-that-convert')}}>
                <Image src={Arrow2}
                width={40}
                height={40}
                alt="img"
                data-aos="fade-up"
                className='brand-arrow absolute top-5 right-5  '
                />

                <Image src={PitchDeck}
                width={100}
                height={100}
                data-aos="fade-up"
                alt="img"
                quality={100}
                />
                <h3 className="common-h5-heading brand-title text-custom-primary" data-aos="fade-up">Pitch Decks</h3>
                <p className="common-paragraph brand-section-para text-custom-darkgrey" data-aos="fade-up">Research , Content, Design and Pitch Deck with Google Slides</p>
            </div>
            <div className="brand-box relative flex flex-col justify-center items-center sm:items-start  gap-3 sm:gap-4 sm:pt-20 pt-10 pb-10 px-5 sm:pb-10 sm:px-10" onClick={()=>{router.push('/websites-that-sell')}}>
                <Image src={Arrow2}
                width={40}
                height={40}
                alt="img"
                data-aos="fade-up"
                className='brand-arrow absolute top-5 right-5  '
                />

                <Image src={Website}
                width={100}
                height={100}
                alt="img"
                data-aos="fade-up"
                quality={100}
                />
                <h3 className="common-h5-heading brand-title text-custom-primary" data-aos="fade-up">Websites</h3>
                <p className="common-paragraph brand-section-para text-custom-darkgrey" data-aos="fade-up">Design & Development, Wordpress / Webflow / Shopify.</p>
            </div>
            <div className={"brand-box relative flex flex-col justify-center items-center sm:items-start  gap-3 sm:gap-4 sm:pt-20 pt-10 pb-10 px-5 sm:pb-10 sm:px-10 "+plus_jakarta_sans.className} onClick={()=>{router.push('/apps-that-make-sense')}}>
                <Image src={Arrow2}
                width={40}
                height={40}
                alt="img"
                data-aos="fade-up"
                className='brand-arrow absolute top-5 right-5  '
                />

                <Image src={Group}
                width={100}
                height={100}
                alt="img"
                data-aos="fade-up"
                quality={100}
                />
                <h3 className="common-h5-heading brand-title text-custom-primary" data-aos="fade-up">Product Design</h3>
                <p className="common-paragraph brand-section-para text-custom-darkgrey" data-aos="fade-up">Research, UX + UI design for your Mobile, Tablet or Web app</p>
            </div>

        </section>

        {/* section 5 -our-client-backed-by */}
        <section className={'studio-our-client-section py-14 px-5 sm:py-20 sm:px-0 md:py-24 flex flex-col justify-center items-center gap-5 sm:gap-8 md:gap-10 '+plus_jakarta_sans.className}>
            <h5 className=' common-all-caps text-custom-darkgrey ' data-aos="fade-up">- OUR CLIENTS BACKED BY-</h5>
            <div className="flex flex-row flex-wrap justify-center sm:justify-between gap-5 sm:gap-10 md:gap-14 items-center">
                <Image src={TigerGlobal}
                width={300}
                height={47}
                data-aos="fade-up"
                alt="img"
                className='our-client-backed-tiget-global-img sm:mx-2'
                quality={100}
                />

                <Image src={Siquoia}
                width={277}
                height={47}
                data-aos="fade-up"
                alt="img"
                className='our-client-backed-siquoia-img sm:mx-2'
                quality={100}
                />

                <Image src={Beenext}
                width={247}
                height={27}
                data-aos="fade-up"
                alt="img"
                className='our-client-backed-beenext-img sm:mx-2'
                quality={100}
                />

              
            </div>
        </section>

        {/* section 6 creative design  */}
        <section className={'creative-design-section '+plus_jakarta_sans.className}>
            <div className={"reative-designs-content-storytelling-box flex justify-start items-start sm:justify-center sm:items-center  pt-14 pb-14 px-5 sm:pt-20 sm:pb-20 sm:px-10 md:pt-36 md:pb-24 md:px-12 "+plus_jakarta_sans.className}>
                <div className="creative-design-section-inner-container flex flex-col sm:justify-center sm:items-center xl:justify-start xl:items-start  gap-4 sm:gap-12">
                    <h5 className="common-all-caps" data-aos="fade-up">Creative Designs, Content & Storytelling  </h5>
                    <h2 className='common-h2-heading creative-design-section-title text-custom-almostblack' data-aos="fade-up">Work that changed the world... ours and theirs </h2>
                    <Link href='/our-masterpieces' className='flex flex-row our-work-lets-talk-btn get-in-touh-btn ' data-aos="fade-up">
                        <span className='our-work-lets-talk-text get-in-touch-txt  grow text-center flex justify-center items-center common-all-caps '>See Our Work</span>
                        <div className='get-in-touch-img-div relative'>
                            <Image src={Arrow} 
                            width={28}
                            height={28}
                            alt='img'
                            className='get-in-touch-arrow-img absolute top-6 right-6'
                            />
                        </div>
                    </Link>
                </div>
            </div>

            {/* <CraetiveDesignBlogs/> */}
          
        </section>



        {/* section 7  accordion */}
        <section className={"fuq-section flex justify-center items-center pt-14 pb-14 px-5 sm:pt-20 sm:pb-20 sm:px-10 md:pt-36 md:pb-24 md:px-12 "+plus_jakarta_sans.className}>
            <div className="fuq-content-container flex flex-col gap-14">
                <div className="flex flex-col gap-4">
                    <h2 className="common-h2-heading text-custom-almostblack" data-aos="fade-up">FUQ</h2>
                    <h5 className="common-h5-heading text-custom-darkgrey" data-aos="fade-up">Frequently (un)asked questions</h5>
                    <p className="common-paragraph text-custom-darkgrey" data-aos="fade-up">These are questions nobody asks, but we want y’all to!</p>
                </div>

                <div className="accordion-main-outer-container">

                    <div className="accordion-container  cursor-pointer py-6" data-aos="fade-up">
                       
                        <div className="accordion-question flex justify-between items-baseline mb-2.5" onClick={()=>{handleAccordion(0)}}>
                            <h6 className="common-h6-heading text-custom-almostblack">Why should you choose us?</h6>
                            <FontAwesomeIcon icon={faAngleDown} style={{color: "#000000"}} className={accordionState==0?'accordion-arrow rotate-arrow':'accordion-arrow'}/>
                        </div>
                        
                        <div className= {accordionState==0?"accordion-answer accordion-visible":"accordion-answer"} >
                            <p className="common-paragraph text-custom-almostblack">Well, we can always read out a list of things that make us the best in town. But you can read our recommendations to know why we are THE agency!</p>
                        </div>

                    </div>

                    <div className="accordion-container  cursor-pointer py-6" data-aos="fade-up">
                       
                       <div className="accordion-question flex justify-between items-baseline mb-2.5" onClick={()=>{handleAccordion(1)}}>
                           <h6 className="common-h6-heading text-custom-almostblack">How much time does it take to complete a project?</h6>
                           <FontAwesomeIcon icon={faAngleDown} style={{color: "#000000"}} className={accordionState==1?'accordion-arrow rotate-arrow':'accordion-arrow'}/>
                       </div>
                       
                       <div className= {accordionState==1?"accordion-answer accordion-visible":"accordion-answer"} >
                           <p className="common-paragraph text-custom-almostblack">From discovery to delivery, our team works zip-zap-zoom. However, you can expect a pitch deck in 7-10 days, a website and brand identity deliverables in 4-5 weeks, and for a product design, we’d take a couple months. This shall be a highly iterative process, so the timeline depends on how satisfied you are by the end of every call. We shall be communicating the progress each day.</p>
                       </div>

                   </div>

                   <div className="accordion-container  cursor-pointer py-6" data-aos="fade-up">
                       
                       <div className="accordion-question flex justify-between items-baseline mb-2.5" onClick={()=>{handleAccordion(2)}}>
                           <h6 className="common-h6-heading text-custom-almostblack">How many people will work on my project?</h6>
                           <FontAwesomeIcon icon={faAngleDown} style={{color: "#000000"}} className={accordionState==2?'accordion-arrow rotate-arrow':'accordion-arrow'}/>
                       </div>
                       
                       <div className= {accordionState==2?"accordion-answer accordion-visible":"accordion-answer"} >
                           <p className="common-paragraph text-custom-almostblack">Payppy Studio has a team of designers, writers, animators and developers. Depending on your project requirement and what service you pick, a team of a minimum of 3 and a maximum of 5 will work to bring your vision to life.</p>
                       </div>

                   </div>

                   <div className="accordion-container  cursor-pointer py-6" data-aos="fade-up">
                       
                       <div className="accordion-question flex justify-between items-baseline mb-2.5" onClick={()=>{handleAccordion(3)}}>
                           <h6 className="common-h6-heading text-custom-almostblack">What do you expect from us, as clients?</h6>
                           <FontAwesomeIcon icon={faAngleDown} style={{color: "#000000"}} className={accordionState==3?'accordion-arrow rotate-arrow':'accordion-arrow'}/>
                       </div>
                       
                       <div className= {accordionState==3?"accordion-answer accordion-visible":"accordion-answer"} >
                           <p className="common-paragraph text-custom-almostblack">Glad you asked! Even though we are absolutely open to working with a diverse clientele, there’s a set of rules we like to give you, before we begin a project together.</p>
                                <br />
                                <ol className='list-decimal leading-8 px-8 common-paragraph'>
                                    <li>We prefer a single point of contact/ stakeholder from your team. All updates, feedback, and iterations shall be communicated from and to this person.</li>
                                    <li>We work on a 50% advance funds model. As soon as we deliver the project plan, we shall send you an invoice for 50% payment to be done before we kickstart.</li>
                                    <li>There’s no refund policy once you’ve made the 50% payment. Don’t worry, nobody ever withdraws. However, before we begin, we make you believe why you made the right choice. There shall be plenty of calls and discovery sessions. </li>
                                    <li>We have a collaborative approach to get the best outcome for your business. However, we are industry experts with a collective experience of 25+ years. So if we put our feet down onto an approach, we’ll make you understand why it is the best for you.</li>
                                    <li>We are a good fit if you’re ready to cut the crap and get to a no-nonsense business that reaches the right audience, growing and taking leaps. We’re not a good fit if you are not willing to spend money on the right branding, messaging and functioning of your business online, have many opinions on why pink is better than orange and are a micro-manage freak.</li>
                                </ol>
                       </div>

                   </div>

                   <div className="accordion-container  cursor-pointer py-6" data-aos="fade-up">
                       
                       <div className="accordion-question flex justify-between items-baseline mb-2.5" onClick={()=>{handleAccordion(4)}}>
                           <h6 className="common-h6-heading text-custom-almostblack">How long can Payppy Studio stay in touch for changes, after my project is done?</h6>
                           <FontAwesomeIcon icon={faAngleDown} style={{color: "#000000"}} className={accordionState==4?'accordion-arrow rotate-arrow':'accordion-arrow'}/>
                       </div>
                       
                       <div className= {accordionState==4?"accordion-answer accordion-visible":"accordion-answer"} >
                           <p className="common-paragraph text-custom-almostblack">We make sure the project timeline is inclusive of all your changes, feedback incorporation and suggestions. But we understand that clients can get a Eureka moment after the project completion- so we stay online for 3 more days after the final delivery is made. However, there shall be an hourly basis charges for further changes and consultation*</p>
                       </div>

                   </div>

                   <div className="accordion-container  cursor-pointer py-6" data-aos="fade-up">
                       
                       <div className="accordion-question flex justify-between items-baseline mb-2.5" onClick={()=>{handleAccordion(5)}}>
                           <h6 className="common-h6-heading text-custom-almostblack">Will my data be safe in the case of pitch decks and business numbers?</h6>
                           <FontAwesomeIcon icon={faAngleDown} style={{color: "#000000"}} className={accordionState==5?'accordion-arrow rotate-arrow':'accordion-arrow'}/>
                       </div>
                       
                       <div className= {accordionState==5?"accordion-answer accordion-visible":"accordion-answer"} >
                           <p className="common-paragraph text-custom-almostblack">A 100% yes! We understand your privacy and once the project is delivered, we delete your data from our systems in the next few days, deploying all credentials to your respective team. However, in the case of websites, branding and product design, we retain the work as a proud case study 🙂 </p>
                       </div>

                   </div>


                </div>
            </div>
        </section>

         {/* section 8 */}
         <ReadyToLevelUpTitleComponent heading={'Ready to level up your online presence like a pro?'} btntext={"Let's talk!"}/>


        </>
    )
}

export default StudioPageSection;


function CraetiveDesignBlogs()          //we want this blogs on case study so have to make a component
{   
    return(
        <>
              <div className={"creative-design-blog-container flex flex-wrap "+plus_jakarta_sans.className}>
                <div className="creative-design-blog  pt-10 px-8 pb-14 md:pb-20 sm:px-10 flex flex-col sm:justify-center sm:items-center gap-8  sm:gap-12">
                    <Image src={Merlot}
                    width={640}
                    height={300}
                    alt="img"
                    data-aos="fade-up"
                    className='creative-design-blog-img'
                    quality={100}
                    />
                    <div className="flex flex-col gap-4">     
                        <h3 className="common-h5-heading creative-design-blog-title text-custom-almostblack" data-aos="fade-up">Merlot Marketing, USA</h3>
                        <p className="common-paragraph creative-design-blog-para text-custom-darkgrey" data-aos="fade-up">
                            We worked with them to create an immersive metaverse experience that unlocked fluidity of self-expression - the world’s first personality-based AI-generated avatars.
                            <br /><br />
                            <strong>Deliveries</strong> <br />
                            Strategy, Design, Production Development, UX & QA
                        </p>
                    </div>
                </div>
                <div className="creative-design-blog  pt-10 px-8 pb-14 md:pb-20 sm:px-10 flex flex-col sm:justify-center sm:items-center gap-8  sm:gap-12">
                    <Image src={PragilisImage}
                    width={640}
                    height={300}
                    alt="img"
                    data-aos="fade-up"
                    className='creative-design-blog-img'
                    quality={100}
                    />
                    <div className="flex flex-col gap-4">     
                        <h3 className="common-h5-heading creative-design-blog-title text-custom-almostblack" data-aos="fade-up">Pragilis Change Management, CA</h3>
                        <p className="common-paragraph creative-design-blog-para text-custom-darkgrey" data-aos="fade-up">
                            We worked with them to create an immersive metaverse experience that unlocked fluidity of self-expression - the world’s first personality-based AI-generated avatars.
                            <br /><br />
                            <strong>Deliveries</strong> <br />
                            Strategy, Design, Production Development, UX & QA
                        </p>
                    </div>
                </div>
                <div className="creative-design-blog  pt-10 px-8 pb-14 md:pb-20 sm:px-10 flex flex-col sm:justify-center sm:items-center gap-8  sm:gap-12">
                    <Image src={TSA}
                    width={640}
                    height={300}
                    alt="img"
                    data-aos="fade-up"
                    className='creative-design-blog-img'
                    quality={100}
                    />
                    <div className="flex flex-col gap-4">     
                        <h3 className="common-h5-heading creative-design-blog-title text-custom-almostblack" data-aos="fade-up">Tripepi Smith, USA</h3>
                        <p className="common-paragraph creative-design-blog-para text-custom-darkgrey" data-aos="fade-up">
                            We worked with them to create an immersive metaverse experience that unlocked fluidity of self-expression - the world’s first personality-based AI-generated avatars.
                            <br /><br />
                            <strong>Deliveries</strong> <br />
                            Strategy, Design, Production Development, UX & QA
                        </p>
                    </div>
                </div>
                <div className="creative-design-blog  pt-10 px-8 pb-14 md:pb-20 sm:px-10 flex flex-col sm:justify-center sm:items-center gap-8  sm:gap-12">
                    <Image src={PayGlocalImage}
                    width={640}
                    height={300}
                    alt="img"
                    data-aos="fade-up"
                    className='creative-design-blog-img'
                    quality={100}
                    />
                    <div className="flex flex-col gap-4">     
                        <h3 className="common-h5-heading creative-design-blog-title text-custom-almostblack" data-aos="fade-up">PayGlocal, IN</h3>
                        <p className="common-paragraph creative-design-blog-para text-custom-darkgrey" data-aos="fade-up">
                            We worked with them to create an immersive metaverse experience that unlocked fluidity of self-expression - the world’s first personality-based AI-generated avatars.
                            <br /><br />
                            <strong>Deliveries</strong> <br />
                            Strategy, Design, Production Development, UX & QA
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export {CraetiveDesignBlogs};