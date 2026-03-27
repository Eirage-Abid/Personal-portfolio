import React from 'react'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import NavBar from './components/NavBar.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Experience from './sections/Experience.jsx'
import TechStack from './sections/TechStack.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Contact from './sections/Contact.jsx'
import AnimatedCounter from './components/AnimatedCounter.jsx'

const App = () => {
  return (
    <>
    <NavBar />
    < Hero />
    <AnimatedCounter />
    <Experience />
    {/* {/* <ShowcaseSection /> */}
    <FeatureCards />
    <TechStack /> 
    {/* <Testimonials /> */}
    {/* <Contact /> */}
    </>
  )
}

export default App