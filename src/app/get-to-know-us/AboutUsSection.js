import Image from "next/image";
import TeamImg from '@/Images/aboutuspage/team.jpg';
import SA from '@/Images/aboutuspage/SA.png';
import LinkedIn from '@/Images/aboutuspage/mdi_linkedin.png';
import '@/styles/Typography.css';


import { Plus_Jakarta_Sans } from "next/font/google";
import TextRevealComponent from "../TextRevealComponent";


const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})
function AboutUsPageSection() {
    return(
        <>
        <div className={" "+plus_jakarta_sans.className}>
        {/* section 1 */}
            <section className="about-us-page-section-one ">
                <Image 
                src={TeamImg}
                width={2400}
                height={426}
                alt='img'
                className="about-us-page-section-one-img"/>

                <div className="py-20 px-5 sm:py-28 sm:px-10 lg:px-20 ">
                    <div className="about-us-section-one-heading-para-container flex flex-col justify-center items-center gap-10 m-auto">
                        <h4 className="common-h4-heading text-custom-almostblack" data-aos="fade-up">We're a dynamic team of designers, writers, animators, developers, and creative thinkers!</h4>
                        <p className="common-paragraph text-custom-darkgrey" data-aos="fade-up">At Payppy, our team is a diverse and talented group of individuals who share a passion for design and creating exceptional experiences. We value collaboration, continuous learning, understanding and empathising with our clients. Focusing on bridging the gap between design and business, we deliver comprehensive solutions beyond aesthetics.
                        <br /><br />
                            Well, we’re not just a team; we’re a family! Our supportive team culture fosters creativity and growth, allowing us to push the boundaries of design excellence. Together, we make a lasting impact by transforming industries!</p>
                    </div>
                </div>
            </section>

            {/* section 2 */}
            <section className="bg-custom-almostwhite py-20 px-5 sm:py-28 sm:px-10 lg:px-20 about-us-section-2-grid-box"> {/* about-us-section-2-grid-box class is for border top */}

                <div className="about-us-section-2-content-container flex flex-col gap-20 mx-auto">

                    <h2 className="common-h2-heading text-custom-almostblack" data-aos="fade-up">Practising it while preaching it</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 sm:gap-20 lg:gap-28">

                        <div className="about-us-section-2-grid-box">
                            <h5 className="common-h5-heading text-custom-almost-black my-5 about-us-section-2-grid-title" data-aos="fade-up">Teamwork makes the dreamwork</h5>
                            <p className="common-para text-custom-almostgrey about-us-section-2-grid-para" data-aos="fade-up">Our team is the wand with which, all the magic is created</p>
                        </div>
                        <div className="about-us-section-2-grid-box">
                            <h5 className="common-h5-heading text-custom-almost-black my-5 about-us-section-2-grid-title-2" data-aos="fade-up">More curious, less furious</h5>
                            <p className="common-para text-custom-almostgrey about-us-section-2-grid-para" data-aos="fade-up">We stay creative, curious and open to ideas, always</p>
                        </div>
                        <div className="about-us-section-2-grid-box">
                            <h5 className="common-h5-heading text-custom-almost-black my-5 about-us-section-2-grid-title-2" data-aos="fade-up">Work hard, play harder</h5>
                            <p className="common-para text-custom-almostgrey about-us-section-2-grid-para" data-aos="fade-up">We take our play hours seriously, ‘cuz why not</p>
                        </div>
                        <div className="about-us-section-2-grid-box">
                            <h5 className="common-h5-heading text-custom-almost-black my-5 about-us-section-2-grid-title" data-aos="fade-up">Purpose, passion, blah blah</h5>
                            <p className="common-para text-custom-almostgrey about-us-section-2-grid-para" data-aos="fade-up">We care about the classic values in everything we do</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* section 3 */}
            <section className="about-us-section-2-grid-box flex justify-center items-center "> {/* about-us-section-2-grid-box is for border top*/}
                <div className="flex flex-col xl:flex-row items-center justify-center section-3-bottom-content-container">
                    <div className="flex flex-col sm:flex-row xl:flex-col justify-center sm:justify-center items-center gap-10 sm:gap-20 xl:gap-10 py-20 sm:py-20 lg:py-28 bg-custom-almostblack co-founder-black-box">
                        <Image src={SA}
                            width={261}
                            height={261}
                            alt='img'
                            data-aos="fade-up"
                            className="SA-co-found-image"/>

                        <div className="flex flex-col justify-center items-center gap-8">
                            <div>
                                <h6 className="common-h6-heading text-center text-custom-white text-center" data-aos="fade-up">Satyen Aghor</h6>
                                <span className="co-founder-text text-center text-custom-ghostgrey" data-aos="fade-up">Co-founder , Payppy</span>
                            </div>
                            <Image src={LinkedIn}
                                width={24}
                                height={24}
                                alt='img'
                                data-aos="fade-up"
                                />
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 px-4 pt-14 pb-20 sm:py-20 sm:px-10 lg:py-20 lg:px-20 the-man-behind-it-container self-strech">
                        <h3 className="common-h3-heading text-custom-almostblack" data-aos="fade-up">The Man behind it</h3>
                        <p className="common-paragraph text-custom-almostblack" data-aos="fade-up">We are led by our principal designer Satyen Aghor, who brings in 20+ years of experience in product and design thinking, collaborating with banks, fintech, and government officials, curating exceptional digital experiences. A team player in his nature, he takes pride in making business happen through cross-functional team collaborations and guides them with clarity in business, sales, design and holistic growth of the team culture.</p>
                    </div>
                </div>
            </section>


            <TextRevealComponent/>
        </div>
        </>
    )
}

export default AboutUsPageSection;