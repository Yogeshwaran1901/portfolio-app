import React, {useEffect} from 'react'
import './portofolio2.css'
import AOS from 'aos'
import'aos/dist/aos.css'

function Portfolio3() {
  useEffect(() => {
    AOS.init({ duration: 2000 })
}, []);
  return (
    <>
      <div className="c5">
        <h2 className='a5' data-aos="fade-left">Skills.</h2>
        <div className='box' style={{ display: 'flex', flexDirection: 'column',marginRight:'47vw' }}>
          <h5 class="tech" data-aos="fade-left">Technical Skills</h5>
          <div className='b5' data-aos="zoom-in">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="f5">
            <div  style={{ display: 'flex',justifyContent:'space-between',marginTop:'4vh' }}>
           <h6 className='d5'>C</h6>
           <h6 className='d50'>75%</h6>
           </div>
           <progress style={{backgroundColor:'black'}} className='pro' max='100' value='75'></progress>
            </div>
            <div className="f5">
            <div  style={{ display: 'flex', justifyContent:'space-between',marginTop:'4vh' }}>
           <h6 className='d5'>Python</h6>
           <h6 className='d50'>80%</h6>
           </div>
           <progress style={{backgroundColor:'black'}} className='pro' max='100' value='80'></progress>

            </div>
            <div className="f5">
      <div  style={{ display: 'flex',justifyContent:'space-between',marginTop:'4vh' }}>
           <h6 className='d5'>Java</h6>
           <h6 className='d50'>70%</h6>
           </div>
           <progress style={{backgroundColor:'black'}} className='pro' max='100' value='70'></progress>
          </div>
          <div className="f5">
           <div  style={{ display: 'flex',justifyContent:'space-between',marginTop:'4vh' }}>
           <h6 className='d5'>Web</h6>
           <h6 className='d50'>82%</h6>
           </div>
           <progress style={{backgroundColor:'black'}} className='pro' max='100' value='82'></progress>
         
          </div>
          </div>

          </div>
        </div>


        <div style={{ display: 'flex', flexDirection: 'column' }}>

          <h5 className='tech' data-aos="fade-left">Soft Skills</h5>
          <div className='b5'  data-aos="zoom-in">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="f5">
            <div  style={{ display: 'flex', justifyContent:'space-between',marginTop:'4vh' }}>
           <h6 className='d5'>Communication</h6>
           <h6 className='d50'>70%</h6>
           </div>
           <progress style={{backgroundColor:'black'}} className='pro' max='100' value='70'></progress>
            </div>
            <div className="f5">
            <div  style={{ display: 'flex',justifyContent:'space-between',marginTop:'4vh' }}>
           <h6 className='d5'>Teamwork</h6>
           <h6 className='d50'>80%</h6>
           </div>
           <progress style={{backgroundColor:'black'}} className='pro' max='100' value='80'></progress>

            </div>
            <div className="f5">
      <div  style={{ display: 'flex', display: 'flex',justifyContent:'space-between',marginTop:'4vh' }}>
           <h6 className='d5' style={{width:'20vw'}}>Problem_Solving</h6>
           <h6 className='d50'>75%</h6>
           </div>
           <progress style={{backgroundColor:'black'}} className='pro' max='100' value='75'></progress>
          </div>
          <div className="f5">
          <div  style={{ display: 'flex', display: 'flex',justifyContent:'space-between',marginTop:'4vh' }}>
           <h6 className='d5' style={{width:'20vw'}}>Adaptability</h6>
           <h6 className='d50'>85%</h6>
           </div>
           <progress style={{backgroundColor:'black'}} className='pro' max='100' value='85'></progress>
          </div>
          </div>
          </div>
</div>
      </div>
    </>
  )
}

export { Portfolio3 }