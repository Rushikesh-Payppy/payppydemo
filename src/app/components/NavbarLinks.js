import '@/styles/Navbar.css';
import Link from 'next/link';
import { Plus_Jakarta_Sans } from 'next/font/google';
const plus_jakarta_sans=Plus_Jakarta_Sans({
    // weight: '400',
    subsets:['latin'],
    display:'swap',
})
function NavbarLinks({openMenu})
{
    return(
        <>
            <div className={openMenu?"navbar-link-box links-visible":"navbar-link-box"}>
                    <div className='navbar-link-container'>
                        <Link href='/' className={plus_jakarta_sans.className + ' navbar-link'} >Products & Services</Link>
                    </div>
                    <div className='navbar-link-container'>
                        <Link href='/' className={plus_jakarta_sans.className + ' navbar-link'} >About</Link>
                    </div><div className='navbar-link-container'>
                        <Link href='/' className={plus_jakarta_sans.className + ' navbar-link'} >Blog</Link>
                    </div>
                    <div className='navbar-link-container'>
                        <Link href='/' className={plus_jakarta_sans.className + ' navbar-link'} >Contact Us</Link>
                    </div>
            </div>
        </>
    )
}
export default NavbarLinks;