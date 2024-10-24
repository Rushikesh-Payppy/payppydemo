import axios from "axios";

import CaseStudyHeader from "./CaseStudyHeader";
import CaseStudySection from "./CaseStudySection";
import Footer from "@/app/home/Footer";
import Loader from "@/app/LoaderComponent";

let apiFetched=false;
async function getCaseStudyInfo(id)
{
    let baseURL='https://strapi.payppy.co/';
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

    return(
        <>
         {data?
         <>
            <CaseStudyHeader apiData={data}/>
            <CaseStudySection apiData={data}/> 
            <Footer/>
         </>:
            <Loader/>
        }
        </>
    )
}

export default Page;