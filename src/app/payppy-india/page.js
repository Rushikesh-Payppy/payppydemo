import '@/styles/landingpage/LandingPage.css';
import Header from '../home/Header';
import Footer from '../home/Footer';
import LandingPageAllMidSections from './LandingPageAllMidSections';
import LandingPageHeader from './LandingPageHeader';

function Page() {
    return(
        <>
            <Header/>
            <LandingPageHeader/>
            <LandingPageAllMidSections/>
            <Footer/>
        </>
    )
}

export default Page;