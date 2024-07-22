import React from 'react'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services';
import About from '../components/About';
import ContactUs from '../components/ContactUs';
const Home = () => {
  return (
    <>
      <HeroSection />
      <Services/>
      <About/>
      <ContactUs/>
    </>
  )
}

export default Home;