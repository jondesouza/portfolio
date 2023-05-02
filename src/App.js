import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Services from './components/Services'
import About from './components/About'
import Footer from './components/Footer'
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Projects />
      <Services />
      <About />
      <Footer />
    </>
  )
}

export default App;
