'use client'; // This makes it a client component
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

function LenisScroll(){
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.2,
      easing: (t) => t,
      scroll: true,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup
    };
  }, []);

  return null; // This component doesn't render anything
};

export default LenisScroll;
