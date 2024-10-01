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
function TermsSection()
{

    
    return(
        <>  

        <div className={" "+plus_jakarta_sans.className}>
            
            {/* section 1 */}
            <section className="px-5 pt-20 pb-10 sm:px-10 flex justify-center items-center">
                <div className="privacy-section-content" >      
                    <h5 className="common-h5-heading mb-5" data-aos="fade-up">Welcome to our website payppy.in</h5>
                    <p className="common-paragraph text-custom-almostblack" data-aos="fade-up">
                    Continuing to browse and use this website or our other websites payppy.in shall be treated as your agreement to comply with and abide by the following terms and conditions of use. These terms govern our relationship with you. It’s absolutely your personal right to go through our website and is non-transferable to any other person or entity.
                    <br /><br />
                    Here, the terms -“We” / “Us” / “Our”/”Company” individually or collectively refer to Payppy and the terms “Visitor” & “User” refer to the users.
                    </p>
                </div>
            </section>

            {/* section 2  */}

            <section className="flex flex-col justify-center items-center  px-5 py-10 sm:px-10 ">
                    
                    <div className="privacy-section-content flex flex-col gap-5 sm:gap-10" >
                        <h5 className="common-h5-heading text-custom-almostblack " data-aos="fade-up">I. Copyright</h5>     
                        
                        <p className="common-paragraph text-custom-almostblack " data-aos="fade-up">
                        All contents, software, information, documents, products, forms, pictures, features and services published on this website represent the copyright of © PAYPPY PRIVATE LIMITED. We reserve them all rights.
                        The content on our website pages is for general information and personal use only. It is subject to change without any notice. This website contains trademarks, logos, content, images and any other material, which are owned by or licensed to Payppy only. This property includes but is not limited to, the design, the layout, the banners, the appearance and the graphics. You shall not sell or modify our content or properties, as the reproduction/ selling/ displaying/ publicly performing/ distributing of any of these is strictly prohibited, except for those who have got permission to use them. Any copyright infringements of this website content and other copyrighted material will result in prosecution according to international copyright law.
                        </p>
                    </div>

            </section>

             {/* section 3  */}

             <section className="flex flex-col justify-center items-center  px-5 py-10 sm:px-10 ">

                    <div className="privacy-section-content flex flex-col gap-5 sm:gap-10" >
                        <h5 className="common-h5-heading text-custom-almostblack" data-aos="fade-up">II. Acceptable Website Use</h5>     
                        
                        <p className="common-paragraph text-custom-almostblack" data-aos="fade-up">
                            <strong>a&#41; Security Rules</strong> <br />
                            Online visitors are strictly prohibited from breaching the security of our website, which can be: <br />
                            1&#41; accessing data/ information not intended for such user or logging into a server or account which the user is not authorised to access
                            2&#41; attempting to probe, scan or test the vulnerability of our server, system or network or firewall for security or authentication measures without proper authorisation
                            3&#41; interfering with service to any user, host or network, including, without limitation, via means of implanting a virus or “Trojan horse” to the Website, overloading, “flooding”, “mail bombing” or “crashing” or
                            4&#41; sending unsolicited promotional and/or advertising of services emails. The infringement of system, database, server or network security shall be considered a civil or criminal liability. Our company and incorporated subsidiaries or, associate entities shall have the right to examine vulnerability instances that they suspect as violations. Hence, we all shall have the right to involve, and cooperate with, law enforcement authorities and further the prosecution activities against the suspect(s).
                            <br />
                            <strong>b&#41; General Rules</strong>
                            The users shall not transmit, distribute, store or destroy our material/ property: <br />
                            1&#41; that could encourage criminal conduct, such as violating any applicable law or regulation
                            2&#41; in a manner that will infringe the copyright, trademark, trade secret or other intellectual property rights of others or breach the privacy or publicity of other personal rights of others, or
                            3&#41; that is derogatory, defamatory, pornographic, profane, obscene, threatening, abusive or hateful.
                        </p>

                    </div>

            </section>

             {/* section 4  */}

             <section className="flex flex-col justify-center items-center  px-5 py-10 sm:px-10 ">

                    <div className="privacy-section-content flex flex-col gap-5 sm:gap-10">
                        <h5 className="common-h5-heading text-custom-almostblack" data-aos="fade-up">III. Links to Other Websites</h5>     
                        
                        <p className="common-paragraph text-custom-almostblack" data-aos="fade-up">
                            From time to time this website may establish links to other websites which is not under the control of Payppy. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them. You may not create a link to this website from another website or document without prior written consent from us.
                        </p>

                    </div>

            </section>

             {/* section 5  */}

             <section className="flex flex-col justify-center items-center  px-5 py-10 sm:px-10 ">

                    <div className="privacy-section-content flex flex-col gap-5 sm:gap-10">
                        <h5 className="common-h5-heading text-custom-almostblack" data-aos="fade-up">IV. Governing Law</h5>     
                        
                        <p className="common-paragraph text-custom-almostblack" data-aos="fade-up">
                        The unauthorized use of this website may give rise to a claim for damages and/or a criminal offence. Your use of this website and any dispute arising out of such use are subject to the international as well as laws of Delhi jurisdiction, India.
                        </p>

                    </div>

            </section>

              {/* section 6  */}

             <section className="flex flex-col justify-center items-center  px-5 py-10 sm:px-10 ">

                    <div className="privacy-section-content flex flex-col gap-5 sm:gap-10">
                        <h5 className="common-h5-heading text-custom-almostblack" data-aos="fade-up">V. Liability Disclaimer</h5>     
                        
                        <p className="common-paragraph text-custom-almostblack" data-aos="fade-up">
                        The contents, software, information, documents, products, forms, pictures, features and services published on this website may include technical inaccuracies or typographical errors. Your use of any information or materials on this website is entirely at your own risk. Though every effort is made to keep the website up and running smoothly, at times, it may be temporarily unavailable due to technical issues beyond our control. Payppy exercises its right to make improvements and/or changes to this website at any time, which may result in the website being out of service.
                        Consequently, the owners, suppliers, consultants, advertisers, affiliates, partners, employees or any other associated entities, all collectively referred to as associated entities hereafter shall be free from being liable for bearing any direct/indirect/ incidental/ special consequential or /exemplary damage to a user or a member or any third party, even if that termination/interruption of service was justified or not, negligent or intentional, inadvertent or advertent.
                            <br /><br />
                            In a nutshell, the company’s total liability to the user for bearing whole or a part of damages/ losses/ causes of action won’t exceed the amount paid by the user to us in any condition or case.
                            Besides, neither the company nor its group of companies, subsidiaries, officers or employees shall be liable for compensating against any director/and indirect or/and incidental or/and special or/and consequential or/and exemplary damages, arising from the use or/and the inability to use the service or/and for the cost of procurement of substitute services or any data or/and information or/and services purchased or/and obtained or/and messages received or/and transactions entered into through or/and from the service or/and resulting from unauthorized access.
                        </p>

                    </div>

            </section>

               {/* section 7  */}

             <section className="flex flex-col justify-center items-center  px-5 py-10 sm:px-10 ">

                    <div className="privacy-section-content flex flex-col gap-5 sm:gap-10">
                        <h5 className="common-h5-heading text-custom-almostblack" data-aos="fade-up">VI. Indemnification</h5>     
                        
                        <p className="common-paragraph text-custom-almostblack" data-aos="fade-up">
                        Our company and/or the respective associated entities make no representations about the suitability of the contents, software, information, documents, products, forms, pictures, features and services on this website for any purpose. It is provided “as is” without warranty of any kind and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
                        <br /><br />
                        In no event shall Payppy and/or its associated entities be liable for any direct, indirect, punitive, incidental, special or consequential damages arising out of or in any way connected with the use of this website or with the delay or inability to use this website, or for any contents, software, information, documents, products, forms, pictures, features and services obtained through this website, whether based on contract, tort, strict liability or otherwise, even if our company or any of our associated entities has been advised of the possibility of damages. The users unilaterally agreed to indemnify on this term.
                        </p>

                    </div>

            </section>

            {/* section 8  */}

             <section className="flex flex-col justify-center items-center  px-5 py-10 sm:px-10 ">

                    <div className="privacy-section-content flex flex-col gap-5 sm:gap-10">
                        <h5 className="common-h5-heading text-custom-almostblack" data-aos="fade-up">VII. Disclaimer</h5>     
                        
                        <p className="common-paragraph text-custom-almostblack" data-aos="fade-up">
                        Our company and/or the respective associated entities make no representations about the suitability of the contents, software, information, documents, products, forms, pictures, features and services on this website for any purpose. It is provided “as is” without warranty of any kind and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
                        <br /><br />
                        In no event shall Payppy and/or its associated entities be liable for any direct, indirect, punitive, incidental, special or consequential damages arising out of or in any way connected with the use of this website or with the delay or inability to use this website, or for any contents, software, information, documents, products, forms, pictures, features and services obtained through this website, whether based on contract, tort, strict liability or otherwise, even if our company or any of our associated entities has been advised of the possibility of damages. The users unilaterally agreed to indemnify on this term.
                        </p>

                    </div>

            </section>

              {/* section 8  */}

             <section className="flex flex-col justify-center items-center  px-5 py-10 sm:px-10 ">

                    <div className="privacy-section-content flex flex-col gap-5 sm:gap-10">
                        <h5 className="common-h5-heading text-custom-almostblack" data-aos="fade-up">VIII. Violation Penalty</h5>     
                        
                        <p className="common-paragraph text-custom-almostblack" data-aos="fade-up">
                        Any unauthorized copy or duplicity of the website or its properties shall be executable. We will pursue all legal causes of action, including filing the lawsuit & seeking an injunction to protect our interests. Such users shall have to compensate against the damages and also be liable to bear the attorney’s hefty fees and costs incurred by us.
                        </p>

                    </div>

            </section>

               {/* section 9  */}

             <section className="flex flex-col justify-center items-center  px-5 pt-10 pb-20 sm:px-10 ">

                    <div className="privacy-section-content flex flex-col gap-5 sm:gap-10">
                        <h5 className="common-h5-heading text-custom-almostblack" data-aos="fade-up">IX. Amendments​</h5>     
                        
                        <p className="common-paragraph text-custom-almostblack" data-aos="fade-up">
                        Payppy reserves the right to amend or completely change any or all of the contents, software, information, documents, products, forms, pictures, features, and services published with terms and conditions.
                        </p>

                    </div>

            </section>
            <TextRevealComponent/>
        </div>
        </>
    )
}
export default TermsSection;