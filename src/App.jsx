import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Links from './sections/Links'
import Clients from './sections/Clients'
import Footer from './components/Footer'
import Contact from './sections/Contact'

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Links />
    <Clients />
    <Contact />
    <Footer />
    </>
  )
}

export default App