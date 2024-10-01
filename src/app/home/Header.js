'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import LOGO from '@/Images/payppyhomepage/navbarPayppyLogo.svg';
import TogglerIcon from '@/Images/payppyhomepage/navbarTogglerIcon.svg';
import "@/styles/payppyhomepage/Homepage2.0.css";
import { useEffect } from "react";
import '@/styles/Typography.css';
import '@/styles/tailwindcss.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Copy from '@/Images/payppyhomepage/file-copy-line.png';
import LinkedIn from '@/Images/payppyhomepage/mdi_linkedin.png';
import Instagram from '@/Images/payppyhomepage/instagram.png';
import Twitter from '@/Images/payppyhomepage/twitter.png';
import Map from '@/Images/payppyhomepage/map.png';
import Arrow from '@/Images/payppyhomepage/arrow-down-s-line.png';
import Link from 'next/link';
import { Turn as Hamburger, Turn } from 'hamburger-react'
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const plus_jakarta_sans=Plus_Jakarta_Sans({
  subsets:['latin'],
  display:'swap'
})
function Header(){


  let[togglerState,setToglerState]=useState(false);
  let[senseiStudioState,setSenseiStudioState]=useState(false);

  useEffect(()=>{
    if(togglerState)
    {
      document.body.classList.add('body-scroll-none');    //if the navbar toggler icon is clicked body will no scroll
    }
    else{
      document.body.classList.remove('body-scroll-none');   //if the navbar toggler icon is clicked again body will scroll
    }
    
    return ()=>{
      document.body.classList.remove('body-scroll-none');   //when the component will unmount then this body scroll class will get removed
    }
  },[togglerState]);



  function handleCopyToClipboard()
  {
    navigator.clipboard.writeText('hello@payppy.co')
    .then(()=>{

        toast.success('Copied to Clipboard', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
    })
    .catch((error)=>{
      console.error(error);
    })
  }


  return (
    <header className={`homepage-2-header relative ${senseiStudioState&&togglerState?' payppy-bg-custom-primary ':' bg-custom-almostblack '}`+plus_jakarta_sans.className}  >
        <nav className='flex items-center '>
            <div className='payppy-logo-2-container flex items-center' >
              <Link href='/'>
                <Image src={LOGO}
                width={220.48}
                height={32.73}
                alt='img'
                className='payppy-logo-2'/>
              </Link>
            </div>
            <div className='toggler-icon-container flex items-center justify-end' onClick={()=>{setToglerState(!togglerState)}}>
            {/* <Image src={TogglerIcon}
                width={32}
                height={32}
                className='toggler-icon-2'/> */}
                <Turn toggled={togglerState} toggle={setToglerState} color="#FFFFFF"  easing="ease-in"/>
            </div>
        </nav>
        <section className={`payppyhomepage-header-section absolute pt-16 sm:pt-10 pb-10 px-5 sm:px-20 flex flex-col justify-between gap-4 items-start lg:items-center ${togglerState?"payppy-header-with-height":""} ${senseiStudioState?'payppy-bg-custom-primary ':''}`}>
            
            <main className='flex flex-col items-start lg:items-center gap-8 sm:gap-11 flex-wrap'>

              <Link href='/our-masterpieces' className="common-h3-heading  text-custom-almostwhite text-left lg:text-center payppy-header-links" >Work</Link>
              
              {/* center sensei studio content  */}
              <div className={`flex flex-col gap-4  sm:gap-5`} >
                <div className="flex gap-x-5 items-baseline justify-start lg:justify-center">
                  <Link href='/sensei-studio' className="common-h3-heading text-custom-almostwhite text-left lg:text-center payppy-header-links" >Sensei Studio</Link>
                  <Image src={Arrow}
                    width={40}
                    height={40}
                    alt='img'
                  className={senseiStudioState?"studio-circle-arrow rotate-180":'studio-circle-arrow'}
                  onClick={()=>{setSenseiStudioState(!senseiStudioState)}}
                  />
                </div>
                <div className={`flex gap-x-14 gap-y-4 sm:gap-14 pb-2 flex-wrap items-center ${senseiStudioState?" brand-web-app-deck-box ":" brand-web-app-deck-box-hidden"}` }>
                    <Link href='/best-branding' className='common-h5-heading text-custom-almostwhite text-center payppy-header-links'>Brand</Link>
                    <Link href='/websites-that-sell' className='common-h5-heading text-custom-almostwhite text-center payppy-header-links'>Website</Link>
                    <Link href='/apps-that-make-sense' className='common-h5-heading text-custom-almostwhite text-center payppy-header-links'>App</Link>
                    <Link href='/decks-that-convert' className='common-h5-heading text-custom-almostwhite text-center payppy-header-links'>Deck</Link>
                </div>
              </div>

              <Link href='/get-to-know-us' className={senseiStudioState?"common-h3-heading  text-opacity text-left lg:text-center payppy-header-links":"common-h3-heading text-custom-almostwhite text-left lg:text-center payppy-header-links"} >About</Link>
              <Link href='/' className={senseiStudioState?"common-h3-heading  text-opacity text-left lg:text-center payppy-header-links":"common-h3-heading text-custom-almostwhite text-left lg:text-center payppy-header-links"} >Payppy.app</Link>
            </main>

            <footer className="payppy-homepage-header-footer pt-8 flex flex-col gap-6 sm:flex-row justify-between items-start sm:items-center ">
              <div className='flex gap-1.5 relative'>
                <p className="common-paragraph text-custom-ghostgrey">Contact us:</p>
                <p className="common-paragraph text-custom-white font-bold">hello@payppy.co</p>
                <Image src={Copy}
                  width={24}
                  height={24}
                  alt='img'
                  className='cursor-pointer'
                  onClick={handleCopyToClipboard}
                />
              </div>
              <div className='flex gap-4 sm:gap-3'>
                <div className="header-bottom-logos-container">
                  <Link href='https://www.linkedin.com/company/payppy' target='_blank'>
                    <Image src={LinkedIn}
                      width={23}
                      height={23}
                      alt='linedin'
                    />
                  </Link>
                </div>
                <div className="header-bottom-logos-container">
                  <Link href='https://www.instagram.com/payppy.app/' target='_blank'>
                    <Image src={Instagram}
                      width={23}
                      height={23}
                      alt='instagram'
                    />
                  </Link>
                </div>
                <div className="header-bottom-logos-container">
                  <Link href='https://x.com/payppy_app?s=21' target='_blank' >
                    <Image src={Twitter}
                      width={23}
                      height={23}
                      alt='x'
                    />
                  </Link>
                </div>
                <div className="header-bottom-logos-container">
                  <Link href='https://maps.app.goo.gl/xH1RM6PfBjQYEmqi9' target='_blank'>
                    <Image src={Map}
                      width={23}
                      height={23}
                      alt='map'
                    />  
                  </Link>
                 
                </div>
              
                
                
                
              </div>
            </footer>

        </section>
        <ToastContainer />
    </header>
  )
}


export default Header;