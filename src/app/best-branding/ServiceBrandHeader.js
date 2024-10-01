import Header from '../home/Header';
import '@/styles/tailwindcss.css';
import '@/styles/servicebrand/ServiceBrand.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import '@/styles/Typography.css';
import TextRevealComponent from '../TextRevealComponent';

const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})
function ServiceBrandHeader()
{
    return(
        <>
        <Header/>
        <header className={'py-20 px-5 md:py-24 md:px-10  lg:py-40 lg:px-36 bg-custom-almostblack service-brand-header flex flex-col justify-center items-center gap-10 '+plus_jakarta_sans.className}>
            <h1 className='service-brand-header-title common-h1-heading pb-2.5' data-aos="fade-up">Who are you as a brand, exactly? </h1>
            <p className="service-brand-header-para common-paragraph text-custom-ghostgrey text-center" data-aos="fade-up">If you don’t know, then neither will your audience</p>
        </header>

        <TextRevealComponent/>
        </>
    )
}
export default ServiceBrandHeader;