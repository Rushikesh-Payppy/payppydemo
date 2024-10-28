import axios from "axios";

import CaseStudyHeader from "./CaseStudyHeader";
import CaseStudySection from "./CaseStudySection";
import Footer from "@/app/home/Footer";
import Loader from "@/app/LoaderComponent";
import { Suspense } from "react";
import ToScrollTop from "./ToScrollTop";

let apiFetched=false;
async function getCaseStudyInfo(id)
{
    let baseURL='https://strapi.payppy.co';
    try {
        console.log('api is calling')

        let APIResponse= await axios.get(`${baseURL}/api/case-studies/${id}?populate=*`);

        console.log('data is fetched :',APIResponse.data);

        return APIResponse.data.data;               //fetched data will return 
    } catch (error) {
        console.error(error);   
        return null;                                //if error then null will be returned
    }
}
async function Page({params})
{
    console.log(params);
    let data=await getCaseStudyInfo(params.casestudy);          //fetching the data from the server
    
    //if data will be wmpty in api response
    if(data===null)
    {
        return <>
        <h1 className="text-center mt-10">Data Not Found...</h1>
        </>
    }
    return(
         <>
            <CaseStudyHeader apiData={data}/>
            <CaseStudySection apiData={data}/> 
            <Footer/>
            <ToScrollTop/>
        </>
    )
}

//this wrapper is used to show loader till the data fetched
function WrapperComponentToShowLoadingAnimationBeforeDataFetched(props)
{
    return(
        <>
        <Suspense fallback={<Loader/>}>
            <Page {...props}/>
        </Suspense>
        </>
    )
}

export default WrapperComponentToShowLoadingAnimationBeforeDataFetched;