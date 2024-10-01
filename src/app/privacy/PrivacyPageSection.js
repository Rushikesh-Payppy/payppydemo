import '@/styles/tailwindcss.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';

import '@/styles/Typography.css';
import '@/styles/privacy/Privacy.css';
import TextRevealComponent from '../TextRevealComponent';



const plus_jakarta_sans=Plus_Jakarta_Sans({
    subsets:['latin'],
    display:'swap'
})
function PrivacySection()
{


    return(
        <>  

        <div className={" "+plus_jakarta_sans.className}>
            
            {/* section 1 */}
            <section className="px-5 pt-20 pb-10 sm:px-10 flex justify-center items-center" >
                {/* <div className="privacy-section-content">       */}
                    <p className="common-paragraph text-custom-almostblack privacy-section-content" data-aos="fade-up">
                    At Payppy, we always value your privacy and keep your information secure and confidential. This online privacy policy applies only to information collected through our website and not to information collected offline. By using our website “payppy.in,” you agree with our Privacy Policy. Please read the following ‘Questions and Answers’ to know more about it.
                    <br /><br />
                    Here, the terms “We” / “Us” / “Our”/”Company” individually and collectively refer to Payppy, and the terms “You” /”Your” / “Yourself” refer to the users.
                    <br /><br />
                    This policy complies with the Information Technology Act, 2000, which pertains to the collection, use, storage, and transfer of sensitive personal data or information. Therefore, the rules drafted herein and the amended provisions regarding electronic documents/records in various statutes come under it. It does not need any physical, electronic, or digital signature.
                    </p>
                {/* </div> */}
            </section>

            {/* section 2  */}

            <section className="flex flex-col justify-center items-center  px-5 py-10 sm:px-10 " >
                    
                    <div className="privacy-section-content flex flex-col gap-5 sm:gap-10">
                        <h5 className="common-h5-heading text-custom-almostblack " data-aos="fade-up">I. User Information</h5>     
                        
                        <p className="common-paragraph text-custom-almostblack " data-aos="fade-up">
                            When submitting Services Requests or Job Applications, as appropriate, the users are required to enter your information, such as Name, E-mail, Mailing Address, Sex, Age, PIN Code, Phone Number, or Debit/Credit Card with other information. However, you may visit our Website anonymously.
                            <br /><br />    
                            The aforementioned information shall not be considered as sensitive if you provide it voluntarily or if it is freely available and accessible in the public domain, as it is what the Right to Information Act, 2005, or any other law for the time being implemented state.
                            <br /><br />
                            We make suitable use of your personal and business information to improve the credibility of our Website and enhance Customer experience thereof. Any information collected from you may be used for improving the Customer Service(s) & Personalizing Experience & Evolving New Service(s) corresponding to your occupation, interest, and the likes.
                            <br /><br />
                            Your information will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever without your consent, except for the purpose expressed for delivering the service(s).
                        </p>
                    </div>

            </section>

             {/* section 3  */}

             <section className="flex flex-col justify-center items-center  px-5 py-10 sm:px-10 " >

                    <div className="privacy-section-content flex flex-col gap-5 sm:gap-10">
                        <h5 className="common-h5-heading text-custom-almostblack" data-aos="fade-up">II. Information Sharing</h5>     
                        
                        <p className="common-paragraph text-custom-almostblack" data-aos="fade-up">
                            In a few critical circumstances, we share the personally identifiable information with the third party provided that the data subject has granted permission prior. These critical cases can be the case when any government agency or authority essentially requires it to comply with the law. The purpose can be the verification of identity, prevention, detection, investigation, including cyber incidents, or for prosecution and punishment of offenses. We disclose it in good faith of law or the judiciary system.We share such sensitive information with the esteemed group of companies or officers or employees that coincide with the terms and conditions of our privacy policy, practices & GDPR compliance for taking appropriate security measures.
                        </p>

                    </div>

            </section>

             {/* section 4  */}

             <section className="flex flex-col justify-center items-center  px-5 py-10 sm:px-10 ">

                    <div className="privacy-section-content flex flex-col gap-5 sm:gap-10">
                        <h5 className="common-h5-heading text-custom-almostblack" data-aos="fade-up">III. Security</h5>     
                        
                        <p className="common-paragraph text-custom-almostblack" data-aos="fade-up">
                            We practice all security measures to ensure no unauthorized access, alteration, disclosure, or destruction of vital data. These can be internal reviews of our data collection, storage, and processing practices and security measures, like encryption and firewall settings.
                            <br /><br />
                            Our highly secured server creates an invulnerable layer of security around our database, which denies unauthorized access using the wrong password. The password authentication rings an alarm to inform about the malicious attempt.
                            <br /><br />                            
                            We take all security measures to shield your database from hackers. Although the frequently evolving IT security techniques & devices may challenge to keep it up and robust yet, we overcome this challenge by upgrading this security and come up with patches in time.
                            <br /><br />
                            We work on a variety of security procedures to safeguard your information. Your information is sensitive and transmitted through a secure server and then encrypted into our database to be only accessed by those authorized with special access rights to our systems and are required to keep the information confidential. Certainly, whatever information we collect from you remains consistent with the Privacy Policy, even if we revise it over time.
                        </p>

                    </div>

            </section>

             {/* section 5  */}

             <section className="flex flex-col justify-center items-center  px-5 py-10 sm:px-10 ">

                    <div className="privacy-section-content flex flex-col gap-5 sm:gap-10">
                        <h5 className="common-h5-heading text-custom-almostblack" data-aos="fade-up">IV. Cookies</h5>     
                        
                        <p className="common-paragraph text-custom-almostblack" data-aos="fade-up">
                            Cookies are small files that a Website or its Service
                            <br /><br />
                            Provider transfers to your computer through your Web browser. These automatically collect limited information about your browser or internet connection, tapping on your IP address when you visit our website. However, this IP address does not disclose your personal identity.
                            <br /><br />
                            It enables the Websites or Service Provider Systems to recognize your browser and capture and remember certain information. We use cookies to compile cumulative data about our Website traffic and Website interaction so that we can offer better Website experiences in the future.
                            <br /><br />
                            The cookies are effective in showing ways to improve the responsiveness of the sites for our users. We collect the unique browsing information of every user to get deep with his web experience & interests on the basis of the identified computer ID.
                            <br /><br />
                            The cookie cannot read data off your hard drive. Our advertisers may integrate their own cookies into your browser (if you click on their ads), which is beyond our control.
                        </p>

                    </div>

            </section>

              {/* section 6  */}

             <section className="flex flex-col justify-center items-center  px-5 py-10 sm:px-10 ">

                    <div className="privacy-section-content flex flex-col gap-5 sm:gap-10">
                        <h5 className="common-h5-heading text-custom-almostblack" data-aos="fade-up">V. Third Party Lines</h5>     
                        
                        <p className="common-paragraph text-custom-almostblack" data-aos="fade-up">
                            Digital promotions and connectivity establish links to other Websites which beyond the control of Payppy. We have no control over the nature, content, and availability of those Websites. These third-party Websites have separate and independent privacy policies. We, therefore, bear no responsibility or liability for the content and activities of these linked Websites.
                            <br /><br />
                            Nonetheless, we seek to protect the integrity of our Website that our privacy practices corresponding to the GDPR compliance define. Hence, we shall not be responsible for such sites in any way. But, we welcome any feedback about these Websites.
                        </p>

                    </div>

            </section>

               {/* section 7  */}

             <section className="flex flex-col justify-center items-center  px-5 py-10 sm:px-10 ">

                    <div className="privacy-section-content flex flex-col gap-5 sm:gap-10">
                        <h5 className="common-h5-heading text-custom-almostblack" data-aos="fade-up">VI. Confidentiality</h5>     
                        
                        <p className="common-paragraph text-custom-almostblack" data-aos="fade-up">
                            We use your information with Integrity, High Security, and Confidentiality. We do not share, transfer, or sell it to other parties except trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others’ rights, property, or safety.
                        </p>

                    </div>

            </section>

            {/* section 8  */}

             <section className="flex flex-col justify-center items-center  px-5 py-10 sm:px-10 ">

                    <div className="privacy-section-content flex flex-col gap-5 sm:gap-10">
                        <h5 className="common-h5-heading text-custom-almostblack" data-aos="fade-up">VII. Grievance Redressal</h5>     
                        
                        <p className="common-paragraph text-custom-almostblack" data-aos="fade-up">
                            As we are committed to listening to your grievances, the user can raise a concern via an email at privacy@payppy.in. Any complaint, abuse or concerns in respect of the content or comment or security breach shall be immediately addressed.
                        </p>

                    </div>

            </section>

              {/* section 8  */}

             <section className="flex flex-col justify-center items-center  px-5 pt-10 pb-20 sm:px-10 ">

                    <div className="privacy-section-content flex flex-col gap-5 sm:gap-10">
                        <h5 className="common-h5-heading text-custom-almostblack" data-aos="fade-up">VIII. Amendments</h5>     
                        
                        <p className="common-paragraph text-custom-almostblack" data-aos="fade-up">
                            Payppy reserves the right to amend or completely change any or all of the contents of the Privacy Policy listed on this Website. So, we request our Website users to view the ‘Privacy Policy’ from time to time. Any changes in this Privacy policy will be published with the ‘Modified date’ on the top.
                        </p>

                    </div>

            </section>
            <TextRevealComponent/>
        </div>
        </>
    )
}
export default PrivacySection;