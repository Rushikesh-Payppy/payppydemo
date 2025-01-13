
import React from "react";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";

//Components
import NavigationButtonSmall from "./NavigationButtonSmall";

// Font
const plus_jakarta_sans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    display: "swap",
});

const FeatureCard = ({ rightSideImg, title, description, iconSrc, imgSrc, buttonName, buttonHref }) => {
    const isRightAligned = rightSideImg;
    const sectionClassName = `landing-page-section-one flex ${isRightAligned ? "flex-col lg:flex-row" : "flex-col-reverse lg:flex-row"
        } items-center justify-center gap-20 md:gap-28 pt-20 lg:p-20 lg-gap-[120px]  ${plus_jakarta_sans.className}`;

    return (
        <section className={`${sectionClassName} w-full ` + plus_jakarta_sans.className}>

         {!isRightAligned && (
                <div className="landing-section-one-img-box">
                    <Image src={imgSrc} width={648} height={648} alt="img" quality={100} className={isRightAligned ? "earn-reward-img" : "fav-brands-img"} data-aos="fade-up" />
                </div>
            )}

            <div className="landing-section-one-info flex flex-col gap-3 md:gap-6 items-center lg:items-start">
                <Image src={iconSrc} width={80} height={80} alt="img" quality={100} className={isRightAligned ? "earn-reward-icon" : "fav-brand-icon"} data-aos="fade-up" />
                <div className="gap-2.5 flex flex-col">
                    <h5 className="landing-page-section-heading common-h5-heading text-cutom-almostblack text-center lg:text-left" data-aos="fade-up" >
                        {title}
                    </h5>
                    <p className="landing-page-section-two-para common-paragraph text-custom-graphite-grey text-center lg:text-left" data-aos="fade-up" >
                        {description}
                    </p>
                </div>

                <NavigationButtonSmall buttonName={buttonName} href={buttonHref} />
            </div>

            {isRightAligned && (
                <div className="landing-section-one-img-box">
                    <Image src={imgSrc} width={648} height={648} alt="img" quality={100} className={isRightAligned ? "earn-reward-img" : "fav-brands-img"} data-aos="fade-up" />
                </div>
            )}

        </section>
    );
};

export default FeatureCard;


//original code
// import React from "react";
// import Image from "next/image";
// import { Plus_Jakarta_Sans } from 'next/font/google';
// import NavigationButtonSmall from "./NavigationButtonSmall";
// //font
// const plus_jakarta_sans = Plus_Jakarta_Sans({
//     subsets: ['latin'],
//     display: 'swap'
// })


// const FeatureCard = ({ rightSideImg, leftSideImg, title, description, iconSrc, imgSrc, buttonName, buttonHref }) => {
//     return (

//         <>
//             {rightSideImg && (
//                 <section className={'landing-page-section-one landing-page-section-two flex flex-col lg:flex-row  items-center justify-center gap-20 md:gap-28 pt-20 lg:gap-[120px] lg:p-20 w-full ' + plus_jakarta_sans.className}>

//                     <div className=' flex items-center justify-between border lg:max-w-7xl'>
//                         <main className='landing-section-one-info flex flex-col gap-3 md:gap-6 items-center lg:items-start'>
//                             <Image src={iconSrc} width={80} height={80} alt="img" quality={100} className='earn-reward-icon' data-aos="fade-up" />
//                             <div className=' gap-2.5 flex flex-col'>
//                                 <h5 className="landing-page-section-heading  common-h5-heading text-cutom-almostblack text-center lg:text-left" data-aos="fade-up">{title}</h5>
//                                 <p className="landing-page-section-two-para common-paragraph text-custom-graphite-grey text-center lg:text-left" data-aos="fade-up">{description}</p>
//                             </div>

//                             <NavigationButtonSmall buttonName={buttonName} href={buttonHref} />

//                         </main>

//                         <main className='landing-section-one-img-box'>
//                             <Image src={imgSrc}
//                                 width={629}
//                                 height={648}
//                                 alt="img"
//                                 data-aos="fade-up"
//                                 className='earn-reward-img'
//                                 quality={100}
//                             />
//                         </main>
//                     </div>

//                 </section>
//             )}

//             {leftSideImg && (
//                 <section className={'landing-page-section-one landing-page-section-two flex flex-col lg:flex-row  items-center justify-center gap-20 md:gap-28 pt-20 lg:gap-[120px] lg:p-20 w-full ' + plus_jakarta_sans.className}>

//                 <div className=' flex items-center justify-between border lg:max-w-7xl'>
//                    <main className='landing-section-one-img-box'>
//                         <Image src={imgSrc} width={629} height={648} alt="img" quality={100} className='fav-brands-img' data-aos="fade-up" />
//                     </main>

//                     <main className='landing-section-one-info flex flex-col items-center lg:items-start gap-3 md:gap-6'>
//                         <Image src={iconSrc} width={80} height={80} alt="img" data-aos="fade-up" className='fav-brand-icon' quality={100} />
//                         <div className=' gap-2.5 flex flex-col'>
//                             <h5 className="landing-page-section-heading  common-h5-heading text-cutom-almostblack text-center lg:text-left" data-aos="fade-up" >{title}</h5>
//                             <p className="landing-page-section-two-para common-paragraph text-custom-graphite-grey text-center lg:text-left" data-aos="fade-up" >{description}</p>
//                         </div>

//                         <NavigationButtonSmall buttonName={buttonName} href={buttonHref} />
//                     </main>
//                    </div>

//                 </section>
//             )}
//         </>

//     );
// };

// export default FeatureCard;






