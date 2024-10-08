import axios from "axios";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

 function middleware(request)
{
   console.log('request :',request);
   console.log('nextreponse',NextResponse.next());

   if(request.nextUrl.pathname.includes('/about'))    //this conditional allows the page will navigate to homepage after searching the about path
   {
    // axios.get('http://localhost:1337/api/moto-gps?populate=*').then((response)=>
    // {
    //     console.log('api data:',response.data.data);
    // });
    
    // return NextResponse.redirect(new URL('/',request.url))
   }

   return NextResponse.next();
   
}
export   {middleware};

export let config={
    matcher:['/about/:path*','/student/:path*'],
}