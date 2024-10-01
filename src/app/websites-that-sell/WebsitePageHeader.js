import Header from '../home/Header';
import '@/styles/tailwindcss.css';
import '@/styles/servicebrand/ServiceBrand.css';        //this page structure is similar of brand page so we are using brand page css
import '@/styles/websitepage/WebsitePage.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import '@/styles/Typography.css';
import TextRevealComponent from '../TextRevealComponent';

const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})

// note - we  are using service brand page classname for service brand page css 
function WebsitePageHeader()
{
    return(
        <>
        <Header/>
        <header className={'py-20 px-5 md:py-24 md:px-10  lg:py-40 lg:px-36 bg-custom-almostblack flex flex-col justify-center items-center gap-10  '+plus_jakarta_sans.className}>
            <h1 className='service-brand-header-title common-h1-heading pb-2' data-aos="fade-up">Your website is your online salesperson </h1>
            <p className="service-brand-header-para common-paragraph text-custom-ghostgrey" data-aos="fade-up">Make it work like it is supposed to</p>
        </header>
        <TextRevealComponent/>
        </>
    )
}
export default WebsitePageHeader;