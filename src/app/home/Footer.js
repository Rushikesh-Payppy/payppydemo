import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import "@/styles/payppyhomepage/Homepage2.0.css";
import TextRevealComponent from "../TextRevealComponent";
import '@/styles/tailwindcss.css';


const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})
function Footer()
{
    return(
        <>
            <footer className={"payppy-homepage-2-footer flex justify-between py-5 px-5 sm:px-10 "+plus_jakarta_sans.className}>
                <div className="copyright-2-text text-custom-ghostgrey" >Copyright 2023. All Rights Reserved</div>
                <div className="flex items-center footer-2-links">
                    <Link href='/privacy' className="footer-2-link text-custom-ghostgrey"  prefetch={true}> Privacy policy</Link>
                    <Link href='/terms' className="footer-2-link text-custom-ghostgrey" prefetch={true} >Terms of Use</Link>
                    <Link href='/cookies' className="footer-2-link text-custom-ghostgrey" prefetch={true} >Cookie Policy</Link>

                </div>
            </footer>

            <TextRevealComponent/>
        </>
    )
}

export default Footer;