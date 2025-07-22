import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle='our program' title='what we offer'/>
        <Programs/>
        <About/>
        <Title subTitle='gallery' title='campus photos'/>
        <Campus />
        <Title subTitle='testimonials' title='what students say'/>
        <Testimonials/>
        <Title subTitle='contact us' title='get in touch'/>
        <Contact/>
        <Footer/>
      </div>

      
    </div>
  )
}

export default App