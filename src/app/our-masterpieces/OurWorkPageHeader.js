import '@/styles/tailwindcss.css';
import '@/styles/ourworkpage/OurWorkPage.css';
import '@/styles/Typography.css';
import Header from '../home/Header';
import { Plus_Jakarta_Sans } from 'next/font/google';
import TextRevealComponent from '../TextRevealComponent';

const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})
function OurWorkPageHeader()
{
    return(
        <>
        <Header/>
        <header className={'our-work-page-header py-20 px-5 sm:py-28 sm:px-10 md:py-40 md:px-34  flex-col justify-center items-center bg-custom-almostblack  '+plus_jakarta_sans.className}>
            <div className="flex flex-col gap-4 justify-center items-center">
                <h6 className="common-all-caps our-work-header-txt text-custom-ghostgrey" data-aos="fade-up">Our Work</h6>
                <h1 className='common-h1-heading our-work-header-title   pb-2.5' data-aos="fade-up">Stop Stumbling, Start Selling</h1>
            </div>
            {/* <div className='text-center'> */}
                <p className="text-center common-paragraph our-work-header-para mx-auto mt-8 text-custom-ghostgrey text-center" data-aos="fade-up">Crafting world-class designs, we had an incredible impact on conversions, engagement, and retention for many brands.</p>
            {/* </div> */}
        </header>

        <TextRevealComponent/>
        </>
    )
}

export default OurWorkPageHeader;