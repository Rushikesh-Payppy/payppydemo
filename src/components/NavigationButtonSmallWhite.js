import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus_Jakarta_Sans } from 'next/font/google';

//css
import '@/styles/Components/NavigationButtonSmallWhite.css';

//font
const plus_jakarta_sans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    display: 'swap'
})


//Images
// import Arrow from '@/Images/Icons/black-arrow-icon.svg';
import Arrow from '@/Images/landingpage/btnArrow.svg';




const NavigationButtonSmallWhite = ({ buttonName, href }) => {
    return (
        <Link href={href} target='_blank' className={`navigation-button-small-white flex flex-row gap-2 `+plus_jakarta_sans.className} data-aos="fade-up" >
            <span className={' ' + plus_jakarta_sans.className}>{buttonName}</span>
            <Image src={Arrow} width={28} height={28} alt="img" quality={100} className='visit-payppy-section-btn-arrow' />
        </Link>
    )
}

export default NavigationButtonSmallWhite;
