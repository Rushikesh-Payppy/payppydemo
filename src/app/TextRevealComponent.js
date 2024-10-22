'use client';

import { useEffect } from 'react';
import "aos/dist/aos.css";
import AOS from "aos";


function TextRevealComponent()
{
    useEffect(()=>{
        AOS.init({
            duration: 700, // Set the default duration for all animations
            once:true
          });
      },[]);

    return(
        <>
        </>
    )
}
export default TextRevealComponent;