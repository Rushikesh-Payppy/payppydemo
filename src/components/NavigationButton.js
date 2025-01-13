import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

import Link from "next/link";
import Image from "next/image";
import Arrow from '@/Images/landingpage/btnArrow.svg';

import '@/styles/tailwindcss.css';
import '@/styles/Typography.css';
import '@/styles/landingpage/LandingPage.css';


const plus_jakarta_sans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    display: 'swap'
})

const NavigationButton = ({ buttonName, href }) => {
    return (

        <button className={"visit-payppy-btn mx-auto flex  items-center justify-center " + plus_jakarta_sans.className} data-aos="fade-up">
            <Link href={href} target='_blank' className={"visit-payppy-txt " + plus_jakarta_sans.className} >{buttonName}</Link>
            <div className="btn-arrow-img-box relative">
                <Image src={Arrow} width={28} height={28} alt="img" className="btn-arrow-img" quality={100} />
            </div>
        </button>

    );
};

export default NavigationButton;
