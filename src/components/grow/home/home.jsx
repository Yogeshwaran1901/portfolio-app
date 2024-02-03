import React, { useEffect, useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { Portfolio, Portfolio1 } from '../portfolio'
import { Portfolio2 } from '../portfolio1'
import { Portfolio3 } from '../portofolio2'
import { Portfolio4 } from '../portfolio3'
import AOS from 'aos'
import 'aos/dist/aos.css'


function Tab() {
  const [isvis, vis] = useState(false);
  const [tr, settr] = useState('all 5s ease-in');
  const handleToggle = () => {
    vis(!isvis);
    settr('all 5s ease-in');
  }
  return (
    <>
      <i className='navo fa fa-bars' aria-hidden="true" onClick={handleToggle}></i>
      {isvis && <div className='c' style={{ transition: tr }} >
        <div className='toggle-content c67' style={{ transition: tr }}>
          <a className='a26' href="#home">Home</a>
          <a className='a26' href="#about">About</a>
          <a className='a26' href="#edu">Education</a >
          <a className='a26' href="#skills">Skills</a >
          <a className='a26' href="#contact">Contact</a >
        </div>
      </div>}
    </>

  )
}

function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className='a'>
        <header >
          <h1 className='b'>Yogesh.</h1>
          <div className='c'>
            <a className='a2' href="#home">Home</a >
            <a className='a2' href="#about">About</a >
            <a className='a2' href="#edu">Education</a >
            <a className='a2' href="#skills">Skills</a >
            <a className='a2' href="#contact">Contact</a >

          </div>
          <Tab />
        </header>
        <div className='hid2'>
          
                            <div style={{ paddingTop: '3%', display: 'flex', alignItems: 'start', flexDirection: 'column' }}>
                              <div id='home' data-aos="fade-left"> <Portfolio /></div>
                              <div id='about' data-aos="fade-right"> <Portfolio1 /></div>
                              <div id='edu' data-aos="fade-left"><Portfolio2 /></div>
                              <div id='skills' data-aos="fade-right"><Portfolio3 /></div>
                             
                              <div id='contact' data-aos="fade-left"><Portfolio4 /></div>
                          </div>
                          </div>
                        </div>
                    
    </>
  )
}
export default Home