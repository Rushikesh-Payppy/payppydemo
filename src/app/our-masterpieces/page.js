import axios from "axios";
import Footer from "../home/Footer";
import OurWorkPageHeader from "./OurWorkPageHeader";
import OurWorkSection from "./OurWorkSection";


async function fetchDataofClients()
{
    let baseURL='http://strapi.payppy.co/';

    try {
        let APIResponse= await axios.get(`${baseURL}api/case-studies?populate=*`);
        let data=APIResponse.data.data;
        return data;
    } catch (error) {
        console.log(error);
    }
}

async function Page()
{
    // let apidata=await fetchDataofClients();
    let apidata={};

    return(
         <>
         <OurWorkPageHeader/>
         <OurWorkSection apidata={apidata}/>
         <Footer/>

         </>
    )
}

export default Page;