import '@/styles/tailwindcss.css';
import '@/styles/servicebrand/ServiceBrand.css';        //this page structure is similar of brand page so we are using brand page css
import '@/styles/deckpage/Deckpage.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Header from '../home/Header';
import '@/styles/Typography.css';
import TextRevealComponent from '../TextRevealComponent';

const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})

// note - we  are using service brand page classname for service brand page css 
function DeckpageHeader()
{
    return(
        <>
        <Header/>
        <header className={'py-20 px-4 md:py-24 md:px-10  lg:py-40 lg:px-36 bg-custom-almostblack flex flex-col justify-center items-center gap-10 '+plus_jakarta_sans.className}>
            <h1 className='service-brand-header-title common-h1-heading deck-page-header-title pb-2' data-aos="fade-up">Why fit in when you can standout?</h1>
            <p className="service-brand-header-para common-paragraph text-custom-ghostgrey" data-aos="fade-up">Investor decks to product presentation, we do it all</p>
        </header>


        <TextRevealComponent/>
        </>
    )
}
export default DeckpageHeader;