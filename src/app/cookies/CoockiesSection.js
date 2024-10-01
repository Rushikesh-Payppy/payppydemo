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
function CookiesSection()
{
    return(
        <>  

        <div className={" "+plus_jakarta_sans.className}>
            
            {/* section 1 */}
            <section className="px-5 pt-20 pb-10 sm:px-10 flex justify-center items-center">
                    <p className="common-paragraph text-custom-almostblack privacy-section-content" data-aos="fade-up">
                      Our cookies policy is applicable on our all public Payppy branded websites, links and online services available on all other sites and services by default. Cookies are small text files that we place on your device when you access our website. This practice enables us to recognise your device & experience when you browse our website in the future. Simply say, we offer a better user experience using these cookies for statistical analysis of what you read and shared from here.
                    </p>
            </section>

            {/* section 2  */}

            <section className="flex flex-col justify-center items-center  px-5 py-10 sm:px-10 ">
                    
                    <div className="privacy-section-content flex flex-col gap-5 sm:gap-10">
                        <h4 className="common-h4-heading mb-4" data-aos="fade-up">Types of Cookies That Payppy Uses</h4>

                        <h5 className="common-h5-heading text-custom-almostblack " data-aos="fade-up">I. Performance Cookies</h5>     
                        
                        <p className="common-paragraph text-custom-almostblack " data-aos="fade-up">
                            Also known as analytics cookies, these collect data about your visits uniquely and autonomously. We get the aggregate numbers and trends through its report. Payppy allows third parties to set these cookies so that we understand and analyze our audience and improve its web experience accordingly. As we use Google Analytics- a web analytics service by Google, Inc., the search engine uses performance cookies. Whatever these carry inside, is transmitted to & and stored on Google servers in India and Asia. If you have activated anonymisation, your IP address will be truncated within the Indian-Asia Economic Area. The whole IP address is transferred to the Google server in only exceptional cases. We encode or anonymise your IP address before sending it to Google servers. The search engine uses it on behalf of the operator of our website so that it can (a) measure the use of our website (b) create reports on web activities for operators, and (c) provide web operators with other about web activity & internet usage. Google does not use your IP address information other than analysis of your web experience. You may prohibit the use of cookies by adjusting the settings on your browser. It’s noteworthy that restricted cookies disallow the use of full functionality of our websites.
                            <br /><br />    
                            Alternatively, you can prevent the vulnerability of Google Analytics by downloading & installing its Opt-Out Browser Add-On for your current web browser via
                            <br />
                            <Link href='http://tools.google.com/dlpage/gaoptout?hl=en.' data-aos="fade-up">http://tools.google.com/dlpage/gaoptout?hl=en.</Link>
                        </p>
                    </div>

            </section>

             {/* section 3  */}

             <section className="flex flex-col justify-center items-center  px-5 py-10 sm:px-10 ">

                    <div className="privacy-section-content flex flex-col gap-5 sm:gap-10">
                        <h5 className="common-h5-heading text-custom-almostblack" data-aos="fade-up">II. Functionality Cookies</h5>     
                        
                        <p className="common-paragraph text-custom-almostblack" data-aos="fade-up">
                            We may draw your preferences for operational settings on our websites via these cookies. It bars you from resetting your preferences whenever you browse our site. Let’s say, you mostly browse videos on our websites. These ones recall the optimum video streaming speed or volume setting or the sequence in which you look at the comments on one of our forums. These do not identify you as an individual.
                        </p>

                    </div>

            </section>

             {/* section 4  */}

             <section className="flex flex-col justify-center items-center  px-5 py-10 sm:px-10 ">

                    <div className="privacy-section-content flex flex-col gap-5 sm:gap-10">
                        <h5 className="common-h5-heading text-custom-almostblack" data-aos="fade-up">III. Social Media Cookies</h5>     
                        
                        <p className="common-paragraph text-custom-almostblack" data-aos="fade-up">
                            These cookies allow third-party organisations to recognize you when you access our websites through social media credentials. The third-party organizations may serve their own purpose through them. They may show up ads and content from us when you visit its websites or access applications. Besides, if you use a social sharing button or widget on our websites, that button records your action for serving its own purposes.
                            <br /><br />
                            You may discover more about every social media channel’s privacy and data protection policy to understand (a) how it uses cookies, (b) how it tracks you from our sites, and (c) how to control such cookies & buttons.
                        </p>

                    </div>

            </section>

             {/* section 5  */}

             <section className="flex flex-col justify-center items-center  px-5 py-10 sm:px-10 ">

                    <div className="privacy-section-content flex flex-col gap-5 sm:gap-10">
                        <h5 className="common-h5-heading text-custom-almostblack" data-aos="fade-up">IV. Targeting / Advertising Cookies</h5>     
                        
                        <p className="common-paragraph text-custom-almostblack" data-aos="fade-up">
                            These are the source of tracking & targeting your browsing experience for email marketing or any other online advertising that can benefit business and professional interests. If you register with our websites through any digital form, we may use your credentials to customize the emails corresponding to your interests. We may ask third-party advertising platforms and technology companies to show our ads on their interface, which defines “retargeting technology”. It helps us to fill up our websites with what you find interesting
                            <br /><br />
                            These cookies record anonymised movement patterns on a website, which helps to customize banner advertisements as per your interest. We keep these details completely anonymous and t draw statistical analysis only. We do not store your personal data. Neither do we use it for retargeting technology, as it is subjected to the applicable statutory data protection regulations. We are also associated with companies that reach out to visitors who haven’t visited our websites before. These don’t target you individually. Rather, a variety of other data, like behaviour across websites, information about individual devices and IP addresses, helps them to show up advertisements.
                        </p>

                    </div>

            </section>

              {/* section 6  */}

             <section className="flex flex-col justify-center items-center  px-5 py-10 sm:px-10 ">

                    <div className="privacy-section-content flex flex-col gap-5 sm:gap-10">
                        <h5 className="common-h5-heading text-custom-almostblack" data-aos="fade-up">V. Session Cookies​</h5>     
                        
                        <p className="common-paragraph text-custom-almostblack" data-aos="fade-up">
                            These cookies live as long as a web browsing session stays active. These files link your browsing actions with our website during the web journey and later, get expired at the end of that session. The user navigates secure parts of the web page through their assistance.
                        </p>

                    </div>

            </section>

               {/* section 7  */}

             <section className="flex flex-col justify-center items-center  px-5 py-10 sm:px-10 ">

                    <div className="privacy-section-content flex flex-col gap-5 sm:gap-10">
                        <h5 className="common-h5-heading text-custom-almostblack" data-aos="fade-up">VI. Persistent Cookies</h5>     
                        
                        <p className="common-paragraph text-custom-almostblack" data-aos="fade-up">
                            Unlike session cookies, the persistent cookie gets stored when the browsing session terminates. Being on the user’s device helps to recognise the preferences or actions of the user. It serves a variety of purposes, such as storing the language and regional preferences of the user at the end of each browsing session. Moreover, we access the services of the third-party analytics service provider for getting deep with cookies to know about users’ behaviour so that their experience could be more improved and convenient next time.
                            <br /><br />
                            Besides, it helps us to know what type of content the visitors like. This knowledge helps us to figure out what sort of content to be targeted. By default, the settings of the browser allow acceptance of cookies, which you may change or access to delete existing cookies. This is a way to prevent future cookies from being accepted by default. We would like to inform you that disabled cookies may disallow access to certain parts and functions of our website. If you need to know about cookies in detail, click here.
                        </p>

                    </div>

            </section>

            {/* section 8  */}

             <section className="flex flex-col justify-center items-center  px-5 py-10 sm:px-10 ">

                    <div className="privacy-section-content flex flex-col gap-5 sm:gap-10">
                        <h5 className="common-h5-heading text-custom-almostblack" data-aos="fade-up">VII. Third-Party Cookies</h5>     
                        
                        <p className="common-paragraph text-custom-almostblack" data-aos="fade-up">
                         These cookies are insight providers, which are based on users’ web experience. We run targeting advertising campaigns on these insights, upon measuring the effectiveness of our campaigns. These files guide us on how to make our ads more relevant to users. The third parties use them to drill information about users’ browsing activities, like page visits, links clicked and downloaded content etc., on our website. The third-party websites and their network websites display our adverts, which are based on your browsing history of our website. If you don’t want to receive those advertisements, you may set preferences on our partner websites. Or, you may also visit Network Advertising Initiative or Digital Advertising Alliance websites to do so.
                        </p>

                    </div>

            </section>

              {/* section 9 */}

             <section className="flex flex-col justify-center items-center  px-5 py-10 sm:px-10 ">

                    <div className="privacy-section-content flex flex-col gap-5 sm:gap-10">
                        <h5 className="common-h5-heading text-custom-almostblack" data-aos="fade-up">Why Do We Need Third-Party Cookies?</h5>     
                        
                        <p className="common-paragraph text-custom-almostblack" data-aos="fade-up">
                            As aforesaid, the aim of these cookies is to track and fulfil an online-advertising purpose. We track third-party companies’ websites, like Adobe, Google, Facebook, LinkedIn, YouTube & Twitter for achieving the following purposes:
                        </p>
                        <div className="pl-5">
                            <ul className='list-disc leading-10 common-paragraph' data-aos="fade-up">
                                <li data-aos="fade-up">Website Analytics</li>
                                <li data-aos="fade-up">Show targeted, relevant advertisements</li>
                                <li data-aos="fade-up">Show integrated videos on Payppy.co</li>
                                <li data-aos="fade-up">Tag Management to personalize the website experience</li>
                                <li data-aos="fade-up">Measure the effectiveness of web presence & advertising programs</li>
                                <li data-aos="fade-up">Advertisements for retargeting users of Payppy</li>
                                <li data-aos="fade-up">Re-purposing advertisements to visitors of Payppy</li>
                            </ul>
                        </div>

                    </div>

            </section>

               {/* section 10  */}

             <section className="flex flex-col justify-center items-center  px-5 py-10 sm:px-10 ">

                    <div className="privacy-section-content flex flex-col gap-5 sm:gap-10">
                        <h5 className="common-h5-heading text-custom-almostblack" data-aos="fade-up">How can you turn off cookies?</h5>     
                        
                        <p className="common-paragraph text-custom-almostblack" data-aos="fade-up">
                        Your browser generally allows you to turn it off or stop cookies. If you don’t get this option, explore settings to switch it off through the “options” or “preferences” menu of the browser on your desktop or other device. If these all tweaks do not work, you can go to the “help” option for catching its details. It’s noteworthy that turning them off may end up getting no better and more personalised experience than you intend.
                        <br />
                        In case you are concerned with any third-party platforms, or someone who monitors browsing history across unrelated websites, please visit the Network Advertising Initiative, i.e. <Link href='https://www.networkadvertising.org/' className='text-custom-primary hover:underline'>https://www.networkadvertising.org/</Link> . If you really want to turn them off, visit <Link href='http://www.networkadvertising.org/choices/.In' className='text-custom-primary hover:underline break-all'>http://www.networkadvertising.org/choices/.In</Link>  case you are opting in for target advertising through the European Interactive Digital Advertising Alliance, visit <Link href='http://www.youronlinechoices.eu' className='text-custom-primary hover:underline'>http://www.youronlinechoices.eu</Link>.
                        </p>

                    </div>

            </section>

              {/* section 11  */}

             <section className="flex flex-col justify-center items-center  px-5 pt-10 pb-20 sm:px-10 ">

                    <div className="privacy-section-content flex flex-col gap-5 sm:gap-10">
                        <h5 className="common-h5-heading text-custom-almostblack" data-aos="fade-up">Contact Us</h5>     
                        
                        <p className="common-paragraph text-custom-almostblack" data-aos="fade-up">
                        In case you have more queries about our privacy and cookies policies, contact us at 
                        <a href="mailto:hello@payppy.in" data-aos="fade-up"> hello@payppy.in</a>
                        </p>

                    </div>

            </section>
            <TextRevealComponent/>
        </div>
        </>
    )
}
export default CookiesSection;