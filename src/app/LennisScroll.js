'use client';
// src/hooks/useLenisScroll.js
import { useCallback, useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';



const UseLenisScroll = () => {

  useEffect(() => {
   
    const lenis = new Lenis({
      duration: 0.8, // Adjust scroll speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      smooth: true,
      direction: 'vertical', // Can be 'horizontal' if needed
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);


    //if navbar is opened then we have remove the lenis scroll to prevent body scrolling 
    function IsNavbarOpened(){
        if(document.body.classList.contains('body-scroll-none')){
            lenis.destroy();
            cancelAnimationFrame(raf);
        }
    }
    // Added an event listener for clicks check navbar toggler is clicked or not
    document.addEventListener('click', IsNavbarOpened);



    // This returnfunction is used for Cleanup Lenis on component unmount
    return () => {
     document.removeEventListener('click', IsNavbarOpened);
      lenis.destroy();
      cancelAnimationFrame(raf);
    };
  }, []);




};

export default UseLenisScroll;
