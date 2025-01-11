'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import LOGO from '@/Images/payppyhomepage/navbarPayppyLogo.svg';
import TogglerIcon from '@/Images/payppyhomepage/navbarTogglerIcon.svg';
import "@/styles/payppyhomepage/Homepage2.0.css";
import { useEffect } from "react";
import '@/styles/Typography.css';

import { Plus_Jakarta_Sans } from 'next/font/google';
import Copy from '@/Images/payppyhomepage/file-copy-line.png';
import LinkedIn from '@/Images/payppyhomepage/mdi_linkedin.svg';
import Instagram from '@/Images/payppyhomepage/instagram.svg';
import Twitter from '@/Images/payppyhomepage/twitter.svg';
import Map from '@/Images/payppyhomepage/map.svg';
import Arrow from '@/Images/payppyhomepage/arrow-down-s-line.png';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Turn as Hamburger, Turn } from 'hamburger-react'

import { toast, Bounce } from 'react-toastify';
const ToastContainer = dynamic(() => import('react-toastify').then(obj => obj.ToastContainer), { ssr: false });

import 'react-toastify/dist/ReactToastify.css';
import CopyToClipboard from 'react-copy-to-clipboard';


const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap'
})
function Header() {


  let [togglerState, setToglerState] = useState(false);
  let [senseiStudioState, setSenseiStudioState] = useState(false);
  let [payppyAppState, setPayppyAppState] = useState(false);

  let [currentPath, setCurrentPath] = useState('');
  // let currentPath=window.location.pathname;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      //this code runs only on the client-side so it will not create problem during build process
      setCurrentPath(window.location.pathname);
    }
  }, []);


  useEffect(() => {
    if (togglerState) {
      document.body.classList.add('body-scroll-none');    //if the navbar toggler icon is clicked body will no scroll
    }
    else {
      document.body.classList.remove('body-scroll-none');   //if the navbar toggler icon is clicked again body will scroll
    }

    return () => {
      document.body.classList.remove('body-scroll-none');   //when the component will unmount then this body scroll class will get removed
    }
  }, [togglerState]);



  function handleCopyToClipboard() {
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
  }

  //if user click a link in navbar of current active page link again 
  function toRefreshPage(path) {
    if (currentPath === path) {
      window.location.reload();
    }
  }

  function handleSenseiStudio() {
    setPayppyAppState(false);
    setSenseiStudioState(!senseiStudioState);
  }

  function handlePayppyApp() {
    setSenseiStudioState(false);
    setPayppyAppState(!payppyAppState);
  }

  return (
    <header className={`homepage-2-header relative ${senseiStudioState && togglerState ? ' payppy-bg-custom-primary ' : ' bg-custom-almostblack '}` + plus_jakarta_sans.className}  >
      <nav className='flex items-center '>
        <div className='payppy-logo-2-container flex items-center' >
          <Link href='/'>
            <Image src={LOGO}
              width={192}
              height={28}
              alt='img'
              className='payppy-logo-2' />
          </Link>
        </div>
        <div className='toggler-icon-container flex items-center justify-end' onClick={() => { setToglerState(!togglerState) }}>
          {/* <Image src={TogglerIcon}
                width={32}
                height={32}
                className='toggler-icon-2'/> */}
          <Turn toggled={togglerState} toggle={setToglerState} color="#FFFFFF" easing="ease-in" size={24} />
        </div>
      </nav>
      <section className={`payppyhomepage-header-section absolute pt-12 sm:pt-16 pb-24 lg:pt-10 xl:pb-6 px-5 sm:px-20 flex flex-col justify-between gap-8 items-start lg:items-center ${togglerState ? "payppy-header-with-height" : ""} ${senseiStudioState ? 'payppy-bg-custom-primary ' : ''}`}>

        <main className='flex flex-col items-start lg:items-center gap-8 sm:gap-11 flex-wrap'>

          {/* center sensei studio content  */}
          <div className={`flex flex-col gap-4 sm:gap-5`} >
            <div className="flex gap-x-5 items-baseline justify-start lg:justify-center">
              <Link href='/sensei-studio' prefetch={true} className={`common-h3-heading text-custom-almostwhite text-left lg:text-center payppy-header-links `} onClick={() => { toRefreshPage('/sensei-studio') }}>Sensei Studio</Link>
              <Image src={Arrow}
                width={40}
                height={40}
                alt='img'
                className={senseiStudioState ? "studio-circle-arrow rotate-180" : 'studio-circle-arrow'}
                onClick={handleSenseiStudio}
              />
            </div>
            <div className={`flex gap-x-14 gap-y-4 sm:gap-14 pb-2 flex-wrap items-center ${senseiStudioState ? " brand-web-app-deck-box " : " brand-web-app-deck-box-hidden"}`}>
              <Link href='/our-masterpieces' prefetch={true} className={`common-h5-heading text-custom-almostwhite text-center payppy-header-links `} onClick={() => { toRefreshPage('/our-masterpieces') }}>Work</Link>
              <Link href='/best-branding' prefetch={true} className={`common-h5-heading text-custom-almostwhite text-center payppy-header-links `} onClick={() => { toRefreshPage('/best-branding') }}>Brand</Link>
              <Link href='/websites-that-sell' prefetch={true} className={`common-h5-heading text-custom-almostwhite text-center payppy-header-links `} onClick={() => { toRefreshPage('/websites-that-sell') }}>Website</Link>
              <Link href='/apps-that-make-sense' prefetch={true} className={`common-h5-heading text-custom-almostwhite text-center payppy-header-links `} onClick={() => { toRefreshPage('/apps-that-make-sense') }}>App</Link>
              <Link href='/decks-that-convert' prefetch={true} className={`common-h5-heading text-custom-almostwhite text-center payppy-header-links `} onClick={() => { toRefreshPage('/decks-that-convert') }}>Deck</Link>
            </div>
          </div>


          {/* center Payppy.co content  */}
          <section className={`flex flex-col gap-4 sm:gap-5 ${senseiStudioState? "opacity-30" :" opacity-100"}`} >
            <div className="flex gap-x-5 items-baseline justify-start lg:justify-center">
              <h3 prefetch={true} className={`common-h3-heading cursor-pointer text-custom-almostwhite text-left lg:text-center payppy-header-links`} onClick={() => { toRefreshPage('/payppy-india') }}>Payppy.app</h3>
              <Image src={Arrow}
                width={40}
                height={40}
                alt='img'
                className={payppyAppState ? "studio-circle-arrow rotate-180" : 'studio-circle-arrow'}
                onClick={handlePayppyApp}
              />
            </div>
            <div className={`flex gap-x-14 gap-y-4 sm:gap-14 pb-2 flex-wrap items-center ${payppyAppState ? " brand-web-app-deck-box " : " brand-web-app-deck-box-hidden"}`}>
              <Link href='/payppy-india' prefetch={true} className={`common-h5-heading text-custom-almostwhite text-center payppy-header-payppy-app-links`} onClick={() => { toRefreshPage('/payppy-india') }}>For Customers</Link>
              <Link href='/become-a-partner' prefetch={true} className={`common-h5-heading text-custom-almostwhite text-center payppy-header-payppy-app-links`} onClick={() => { toRefreshPage('/become-a-partner') }}>For Brands </Link>
            </div>
          </section>

          {/* <Link href='/payppy-india' prefetch={true} className={`common-h3-heading  text-left lg:text-center payppy-header-links ${senseiStudioState ? ' text-opacity ' : ' text-custom-almostwhite '} `} onClick={() => { toRefreshPage('/payppy-india') }}>Payppy.app</Link> */}
          <Link href='/get-to-know-us' prefetch={true} className={`common-h3-heading  text-left lg:text-center payppy-header-links ${senseiStudioState ? ' text-opacity ' : ' text-custom-almostwhite '} `} onClick={() => { toRefreshPage('/get-to-know-us') }} >About</Link>
        </main>

        <footer className="payppy-homepage-header-footer  pt-5 pb-8 lg:pb-0  flex flex-col gap-4 sm:flex-row justify-between items-start sm:items-center ">
          <div className='flex gap-1.5 relative'>
            <p className="common-paragraph text-custom-ghostgrey">Contact us:</p>
            <p className="common-paragraph text-custom-white font-bold">hello@payppy.co</p>
            <CopyToClipboard text='hello@payppy.co' >
              <Image src={Copy}
                width={24}
                height={26}
                alt='img'
                className='cursor-pointer max-w-none max-h-none copytoclipboard-btn'
                onClick={handleCopyToClipboard}
              />
            </CopyToClipboard>
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
            <Link href='https://www.instagram.com/payppy.app/' target='_blank'>
              <div className="header-bottom-logos-container">
                <Image src={Instagram}
                  width={23}
                  height={23}
                  alt='instagram'
                />
              </div>
            </Link>
            <Link href='https://x.com/payppy_app?s=21' target='_blank' >
              <div className="header-bottom-logos-container">
                <Image src={Twitter}
                  width={23}
                  height={23}
                  alt='x'
                />
              </div>
            </Link>
            <Link href='https://maps.app.goo.gl/xH1RM6PfBjQYEmqi9' target='_blank'>
              <div className="header-bottom-logos-container">
                <Image src={Map}
                  width={23}
                  height={23}
                  alt='map'
                />
              </div>
            </Link>




          </div>
        </footer>

      </section>
      <ToastContainer />
    </header>
  )
}


export default Header;