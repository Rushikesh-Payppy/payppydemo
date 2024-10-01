'use client';

import { useEffect } from 'react';
import "aos/dist/aos.css";
import AOS from "aos";


function TextRevealComponent()
{
    useEffect(()=>{
        AOS.init({
            duration: 700, // Set the default duration for all animations
          });
      },[]);

    return(
        <>
        </>
    )
}
export default TextRevealComponent;