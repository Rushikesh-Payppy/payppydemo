import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus_Jakarta_Sans } from 'next/font/google';

//css
import '@/styles/Components/NavigationButtonSmall.css';


//font
const plus_jakarta_sans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    display: 'swap'
})


//Images
import Arrow from '@/Images/landingpage/boldArrow.svg';

const NavigationButtonSmall = ({ buttonName, href }) => {
    return (
            <Link href={href} target='_blank' className={`visit-payppy-app-section-btn flex flex-row gap-2 "}`} data-aos="fade-up" >
                <span className={' ' + plus_jakarta_sans.className}>{buttonName}</span>
                <Image src={Arrow} width={14} height={14} alt="img" quality={100} className='visit-payppy-section-btn-arrow' />
            </Link>
    )
}

export default NavigationButtonSmall;
