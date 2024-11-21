
import React from 'react'
import Header from './components/Header/header'
import HeroSection from './components/Hero/heroSection'
import About from './components/About-section/about'
import AboutBottomImage from './components/About-section/AboutbottomImage/aboutbottomimage'
import Portfoilo from './components/portfolio/portfoilo'
import Services from './components/Services-section/services'
import Testimonial from './components/Testimonial/testimonial'
import Contactus from './components/contactus/contactus'
import Footer from './components/Footer/footer'

function Home() {
  return (
    <div>
      <Header/>
       <HeroSection/>
      <About/>
      <AboutBottomImage/>
      <Portfoilo/>
      <Services/>
      <Testimonial/>
      < Contactus/>
      < Footer/> 
    </div>
  )
}

export default Home
