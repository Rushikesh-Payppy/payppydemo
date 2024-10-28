'use client';

import { useEffect } from "react";

function ToScrollTop()
{
    useEffect(()=>{
        if(typeof window !=='undefined')
        {
            window.scrollTo(0,0);
        }
    },[])
    return(
        <>
        </>
    )
}

export default ToScrollTop;