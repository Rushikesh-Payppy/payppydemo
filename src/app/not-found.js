import '@/styles/notfound/notFound.css';
import '@/styles/Typography.css';
import '@/styles/tailwindcss.css';
import Image from 'next/image';
import Link from 'next/link';

import { Plus_Jakarta_Sans } from 'next/font/google';

const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})
function NotFound()
{
    return(
        <>
            <section className={"flex flex-col justify-center items-center gap-5 px-5 pt-16 "+plus_jakarta_sans.className}>
                <h2 className="common-h2-heading text-custom-darkgrey">404</h2>  
                <div className='not-found-center-img'></div> 
                <div>
                    <h4 className="common-h4-heading text-center mb-4">Look like you're lost</h4>
                    <p className="common-paragraph text-center">the page you are looking for not avaible!</p>
                </div>
                <Link href='/' className='not-found-go-to-home-link bg-custom-almostblack mt-4 common-all-caps text-custom-white py-2.5 px-5'>Go To Home</Link>
            </section>
        </>
    )
}
export default NotFound;  