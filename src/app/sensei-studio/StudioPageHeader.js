import Header from "../home/Header";
import '@/styles/tailwindcss.css';
import '@/styles/studiopage/StudioPage.css';
import '@/styles/Typography.css';

import { Plus_Jakarta_Sans } from "next/font/google";
import TextRevealComponent from "../TextRevealComponent";

const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})
function  StudioPageHeader()
{
    return(
        <>
        <Header/>
        <header className={"studio-page-header bg-custom-almostblack flex flex-col items-center justify-center gap-10  py-28 px-4  sm:px-10 md:px-36 md:py-40 "+plus_jakarta_sans.className}>
            <h1 className="common-h1-heading studio-page-title" data-aos="fade-up">Cheap design is expensive!</h1>
            <p className="common-paragraph studio-page-header-para text-custom-ghostgrey text-center" data-aos="fade-up">Investing in good design is essential for businesses to create positive experiences, establish a strong brand image, and maintain a competitive advantage in the market.</p>
        </header>

        <TextRevealComponent/>
        </>
    )
}

export default  StudioPageHeader