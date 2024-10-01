'use client';
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import AOS from "aos";
import { useEffect } from "react";
import "@/styles/payppyhomepage/Homepage2.0.css";
import '@/styles/Typography.css';


const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})
function Footer()
{
    useEffect(()=>{
        AOS.init()
      },[])
    return(
        <>
            <footer className={"payppy-homepage-2-footer flex justify-between "+plus_jakarta_sans.className}>
                <div className="copyright-2-text " >Copyright 2023. All Rights Reserved</div>
                <div className="flex items-center footer-2-links">
                    <Link href='/privacy' className="footer-2-link " > Privacy policy</Link>
                    <Link href='/terms' className="footer-2-link " >Terms of Use</Link>
                    <Link href='/cookies' className="footer-2-link " >Disclaimer</Link>

                </div>
            </footer>
        </>
    )
}

export default Footer;