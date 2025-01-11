'use client';
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

//Animation Library
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

//css 
import '@/styles/landingpage/LandingPage.css';

//Components
import NavigationButton from "@/components/NavigationButton";

//Images
import CalendlyLogo from '@/Images/becomeapartnerpage/calendly-logo.svg';
import Background from '@/Images/becomeapartnerpage/background-asset.png';

//Font
import { Plus_Jakarta_Sans } from 'next/font/google';

const plus_jakarta_sans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    display: 'swap'
})


gsap.registerPlugin(ScrollTrigger);

const BecomeAPartnerSection = () => {

    let [bodyScrollEligible, setBodyScrollEligible] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);


    useEffect(() => {
        if (!bodyScrollEligible) {

            // Ensure that GSAP animations and SplitType are executed after the DOM is loaded
            const splitTypes = document.querySelectorAll('.reveal-type');

            splitTypes.forEach((element) => {
                const bg = element.dataset.bgColor;
                const fg = element.dataset.fgColor;

                // Apply SplitType to split the text into words instead of characters
                const text = new SplitType(element, { types: 'words' });

                // GSAP animation
                gsap.fromTo(
                    text.words, // Use words instead of chars
                    { color: bg },
                    {
                        color: fg,
                        duration: 0.3,
                        stagger: 0.1, // Slightly increase the stagger for better word-based animation
                        scrollTrigger: {
                            trigger: element,
                            start: 'top 35%',
                            end: 'bottom 25%',
                            scrub: true,
                            markers: false,
                            toggleActions: 'play play reverse reverse',
                        },
                    }
                );
            });

            function raf(time) {

                // lenis?.raf(time);
                requestAnimationFrame(raf);
            }

            requestAnimationFrame(raf);
        }

    }, []);


    //for dynamic scroll border 
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY; // Get the current vertical scroll position
            setScrollPosition(scrollY); // Update the state with the scroll position
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Calculate the size of the scrollBorder based on the scroll position
    const scrollBorderHeight = Math.min(200, Math.max(2, scrollPosition / 1)); // Example: adjust this formula to fit your needs

    useEffect(() => {

        function handleClick() {
            setBodyScrollEligible(document.body.classList.contains('body-scroll-none'));
        }

        document.addEventListener('click', handleClick);   //when the component will unmount then this body scroll class will get removed

        return () => {
            document.removeEventListener('click', handleClick);   //when the component will unmount then this body scroll class will get removed
        }
    }, []);


    return (
        <>
            <div className={" w-full bg-custom-almostblack border-b border-[#414141] relative " + plus_jakarta_sans.className}>

                {/* hero section */}

                <section className={'pt-20 px-5 pb-24 sm:pt-32 sm:px-10 lg:pt-32 lg:gap-10 bg-custom-almostblack flex flex-col justify-center items-center  relative overflow-hidden'}>
                    <Image src={Background} width={1440} height={901} alt='img' quality={100} className='z-0 fixed top-12 left-0' />

                    <div className=' relative gap-10 sm:gap-16 text-center flex flex-col justify-center items-center lg:items-start lg:text-left sm:max-w-xl lg:max-w-2xl w-full'>

                        <div className='gap-6 flex flex-col items-center sm:gap-10  w-full '>
                            <h1 className='common-h1-heading bg-merchant-page-title-gradient text-center lg:!text-left' data-aos="fade-up">A collection-first launchpad</h1>
                            <span className='common-paragraph  text-custom-ghostgrey text-center  lg:text-left' data-aos="fade-up">Payppy.app is a platform that lets aspirational Indian brands launch exclusive collections first, before anywhere else.</span>
                        </div>

                        {/* button */}
                        <div className="gap-3 flex flex-col items-center lg:items-start " data-aos="fade-up">
                            <NavigationButton href="https://calendly.com/payppy" buttonName="SCHEDULE A CALL" />
                            <span className='text-custom-ghostgrey text-base flex items-center gap-1.5'>
                                Powered by
                                <Image src={CalendlyLogo} width={67} height={16} alt='img' quality={100} />
                                <span className=''></span>
                            </span>
                        </div>

                        {/* Dynamic Scroll Border */}
                        <div className="fixded border border-solid border-white rounded-full" style={{ height: `${scrollBorderHeight}px` }}></div>

                    </div>

                </section>


                <main className=" w-full flex flex-col items-center justify-center">

                    {/* magic UI text */}
                    <section className=" gap-20 pb-20 px-5 sm:pb-[180px] sm:px-20  border-t border-[#111111]  ">
                        <div className="gap-1 sm:gap-16 common-display-text max-w-80 sm:max-w-[584px] lg:max-w-2xl w-full z-[1] ">
                            <p className="reveal-type " data-bg-color="#414141" data-fg-color="#ffffff"> We at Payppy believe that aspirational brands in India deserve a museum-like clutter-free space to showcase their collections in the most special way — gaining the admiration and exploration it deserves.</p>
                        </div>
                    </section>

                    {/* onboard section */}
                    <section className="gap-14 px-5 pb-16 pt-20 sm:px-10 sm:pb-32 sm:pt-24 lg:px-20 flex justify-center items-center">

                        <div className=" gap-14 flex flex-col items-center lg:items-start ">

                            <div className=" gap-14 sm:max-w-2xl w-full text-center lg:text-left ">
                                <h3 className="common-h3-heading text-white " data-aos="fade-up">Onboard with us and experience the exclusive feel of Payppy.app.</h3>
                            </div>

                            <div className=" gap-2 sm:gap-14 flex flex-col items-center  lg:justify-start ">

                                <div className="gap-3 flex flex-col items-center lg:items-start " data-aos="fade-up">
                                    <NavigationButton href="https://calendly.com/payppy" buttonName="SCHEDULE A CALL" />
                                    <div className="gap-1 flex justify-center items-center">
                                        <span className="text-custom-ghostgrey text-base"> Powered by</span>
                                        <Image src={CalendlyLogo} width={67} height={16} alt='img' quality={100} />
                                    </div>
                                </div>

                            </div>

                            <div className=" gap-2 flex flex-col items-center lg:items-start"   >
                                <div className=" gap-3 common-all-caps text-custom-ghostgrey" data-aos="fade-up"> <span className=" lg:hidden">Sales Contact</span> <span className=" hidden lg:inline-block">Contact Sales</span> </div>
                                <span className="text-custom-almostwhite common-paragraph text-center px-12 lg:px-0 z-[1]" data-aos="fade-up">+91 98786 19561 <span className=" hidden sm:inline-block">&nbsp; | &nbsp;</span> <Link href="mailto:sales@payppy.co">sales@payppy.co</Link> </span>
                            </div>
                        </div>

                    </section>

                </main>

            </div>
        </>
    );
};

export default BecomeAPartnerSection;

