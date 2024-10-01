import '@/styles/tailwindcss.css';
import '@/styles/Typography.css';
import Header from '../home/Header';
import '@/styles/aboutuspage/AboutUsPage.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import WordFadeIn from "@/components/magicui/word-fade-in";
import TextRevealComponent from '../TextRevealComponent';

const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})


function AboutUsPageHeader() {
    return(
        <>
        <Header/>
        <header className={' bg-custom-almostblack py-20 px-5 sm:py-28 sm:px-10 lg:py-40 lg:px-36 flex flex-col gap-10 justify-center items-center '+plus_jakarta_sans.className}>
            {/* <WordFadeIn className="common-h1-heading about-us-header-title pb-2.5"  words="Keeping up with the Payppy-sians" tag='h1'/> */}
            <h1 className="common-h1-heading about-us-header-title pb-2.5" data-aos="fade-up">Keeping up with the Payppy-sians</h1>
            {/* <WordFadeIn className="common-paragraph about-us-header-para text-center text-custom-ghostgrey"  words="Our mission is to help businesses achieve their fullest potential through digital transformation with the great combination of design and code." tag='p' /> */}
            <p className="common-paragraph about-us-header-para text-center text-custom-ghostgrey" data-aos="fade-up">Our mission is to help businesses achieve their fullest potential through digital transformation with the great combination of design and code. </p>
        </header>

        <TextRevealComponent/>
        </>
    )
}

export default AboutUsPageHeader;

