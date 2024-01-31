import React, {useEffect} from 'react'
import './portfolio.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import profile1 from './pro2.png'
import profile from './pro.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Portfolio() {
  const yog = 'Yogeshwaran M';
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className='e19'>
        <div className='e20'>
        <div className='e' data-aos="fade-left">
          <h1 className='d' data-aos="fade-left" >Hi, I'm {yog}</h1>
          <h3 className='f' data-aos="fade-left">Web Developer</h3>
          <p className='p' data-aos="fade-left">As a web developer, my objectives revolve around mastering front-end technologies, including HTML, CSS, and JavaScript, to craft visually appealing and responsive web interfaces. I aim to explore and implement frameworks like React.js for efficient development and improved user experience. Ensuring cross-browser compatibility and responsive design is crucial in providing a consistent experience across various devices. Additionally, I seek to enhance my backend skills with technologies like Flask, manage databases, and integrate third-party APIs. Collaboration and effective communication with team members, along with a focus on user experience design principles, round out my objectives as a web developer.</p>
          <button className='i'>Download CV</button>
        </div>
        <img src={profile1} className='img' data-aos="fade-left"/>
         </div>
      </div>
      <div className='j' data-aos="fade-down" style={{ display: 'flex', flexDirection: 'row', marginTop: '6%' }}>
        <a href="https://github.com/Yogeshwaran1901" alt='github page' style={{height:'5vh',transition:'all 2s ease',fontSize:'.9em',transition:'all 2s ease'}}><i className='poi1 fa-brands fa-github fo' style={{color:'white',transition:'all 2s ease'}}></i></a>
        <a href="https://www.instagram.com/unreal_scavenger_y?igsh=OGQ5ZDc2ODk2ZA==" style={{height:'5vh',marginLeft:'3vw',transition:'all 2s ease',fontSize:'.9em',transition:'all 2s ease'}}><i className='poi fa-brands fa-instagram' style={{color:'white',transition:'all 2s ease'}}></i></a>
        <a href="https://www.linkedin.com/in/myogeshwaran19" style={{height:'5vh',marginLeft:'3vw',transition:'all 2s ease',fontSize:'.9em',transition:'all 2s ease'}}><i className='poi fa-brands fa-linkedin' style={{color:'white',transition:'all 2s ease'}}></i></a>
      </div>
    </>
  )
}
function Portfolio1() {
  return (
    <>
    <center>
    <div className="h" style={{ display: 'flex', flexDirection: 'row',width:'103vw' }}>
        <h2 data-aos="fade-up">About.</h2>
        <div className='li2' style={{ display: 'flex', flexDirection: 'row' }}>
        <img className='k' data-aos="flip-right" style={{zIndex:'5'}} src={profile} />
        <p className='li'></p>    
        </div>
        <div  style={{ display: 'flex', flexDirection: 'column' ,marginLeft:"2.1vw"}}>
        <h3 className='f1' data-aos="fade-down">Web Developer</h3>
        <p className='p1' data-aos="fade-down">As a web developer, you likely enjoy creating visually appealing and functional websites. You might have experience with version control systems like Git and collaboration platforms like GitHub. Familiarity with responsive design principles ensures your websites work well across various devices. Problem-solving and debugging skills are crucial for troubleshooting code issues.</p>
        <p className='p2' data-aos="fade-down">As a web developer, you likely enjoy creating visually appealing and functional websites. You might have experience with version control systems like Git and collaboration platforms like GitHub. Familiarity with responsive design principles ensures your websites work well across various devices. Problem-solving and debugging skills are crucial for troubleshooting code issues.</p>
      
       <a href="#edu" data-aos="fade-down" style={{textDecoration:'none'}} ><button className='i' style={{marginTop:'3vh'}}>Read More</button></a>
        </div>
       </div>
    </center>
    </>
  )
}

export { Portfolio, Portfolio1 }