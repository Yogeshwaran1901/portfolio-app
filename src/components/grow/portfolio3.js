import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Portfolio4() {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, []);
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', position: 'relative',height:'56vw' }}>
        <h2 className='j5' data-aos="fade-down">Contact.</h2>
        <div className='m5' >
          <form action="https://api.web3forms.com/submit" method="POST">

            <div className='n5'>
              <input data-aos="flip-left" type="hidden" name="access_key" value="378a764c-c55b-4ed2-926b-d843fc5a32be" />
              <input data-aos="flip-left" type='text' name='name' placeholder='Full Name' required />
              <input data-aos="flip-left" type='email' name='email' placeholder='Email Address' required />
            </div>
            <div className='n51'>
              <input data-aos="flip-left" type='number' name='phone no.' placeholder='Mobile No.' required />
              <input data-aos="flip-left" type='text' name='subject' placeholder='Email Subject' required />
            </div>
            <textarea data-aos="flip-left" placeholder='Type your Message...' name='message' required></textarea>
            <input type="hidden" name="redirect" value="https://web3forms.com/success"></input>
            <button className='i4'>Submit</button>
          </form>
        </div>

      </div>
    </>
  )
}

export { Portfolio4 }