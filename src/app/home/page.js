import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import "aos/dist/aos.css";
import AOS from "aos";


function Page() {
  return (
    <>
    <div className="payppy-homepage-2-main-container">
            <Header/>
            <Section/>
            <Footer/>
    </div>
    </>
  )
}


export default Page;