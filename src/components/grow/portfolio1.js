import React, { useEffect,useState } from 'react'
import './portfolio1.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import AOS from 'aos'
import'aos/dist/aos.css'

function DisplayComponent() {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    const [displayText, setdisplayText] = useState('')
    const [displayText1, setdisplayText1] = useState('')
    const [displayText2, setdisplayText2] = useState('')
    const [displayText3, setdisplayText3] = useState('')
    const [Opacity, setOpacity] = useState('0')
    const [backgroundColor, setBackgroundColor] = useState('rgba(255,255,255,.0)')
    const [border, setBorder] = useState('1px solid rgba(255,255,255,0)')
    const handleClick = () => {
        setdisplayText('Full Stack Development')
        setdisplayText1('Ethical Hacking')
        setdisplayText2('Attending a Full Stack Development workshop in November 2022 at our college must have been an insightful experience. Workshops like these often provide hands-on learning opportunities, exposure to industry-relevant technologies, and a chance to enhance practical skills.')
        setdisplayText3('Participating in an ethical hacking workshop in October 2023 and gaining knowledge about Kali Linux sounds like a valuable experience. Learning about ethical hacking and using tools like Kali Linux can be crucial for understanding cybersecurity practices.')
        setBackgroundColor('rgba(255,255,255,0)')
        setOpacity('1')
        setBorder('2px solid  rgb(7, 161, 238)')
    }
    return (
        <>
            <button className='m0' onClick={handleClick} data-aos="fade-down"><i className="fa fa-caret-down" aria-hidden="true"></i></button>
            <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
                <div className='n0' data-aos="fade-right" style={{ backgroundColor: backgroundColor, border: border, opacity: Opacity }}><p className='p01'><mark style={{ backgroundColor: ' rgb(7, 161, 238)' }}>{displayText}</mark></p>
                    <p className='p012'>{displayText2}</p>
                </div>
                <div className='n01' data-aos="fade-left" style={{ backgroundColor: backgroundColor, border: border, opacity: Opacity }}><p className='p01'><mark style={{ backgroundColor: ' rgb(7, 161, 238)' }}>{displayText1}</mark></p>
                    <p className='p012'>{displayText3}</p>
                </div>
            </div>
        </>
    )
}
function Portfolio2() {
    useEffect(() => {
        AOS.init({duration: 2000});
      },[]);
    return (
        <>
            <div className='i5' style={{ display: 'flex', flexDirection: 'column',position:"relative"}}>
                <h2 className='a0' data-aos="fade-down">Education.</h2>
                <div className='i89'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h5 className='he' data-aos="fade-down" style={{  marginTop: '-3vw', color: 'white', letterSpacing: '.02em', fontFamily: "Calibri" }}>Education</h5>
                        <div className='i9' data-aos="fade-down">
                            <div className='b0'>
                                <p className='c0'></p>
                                <p className='d0'>2021-2025</p>
                            </div>
                            <div style={{display:'flex',flexDirection:'column'}}>
                            <h5 className='e0'>B.E - Velammal Engineering College(Computer Science)</h5>
                            <p className='g0'>As a computer science student at Velammal Engineering College,Leveraging the experiences can enhance my practical skills and programming concepts within the computer science community.<b style={{ color: ' rgb(7, 161, 238)', marginTop: '1%', marginLeft: '27%' }}>GPA:8.53%</b></p>
                            </div>
                           </div>
                        <div className='i90' data-aos="fade-down" style={{ marginTop: '1.5%' }}>
                            <div className='b0'>
                                <p className='c0'></p>
                                <p className='d0'>2020 - 2021</p>
                            </div>
                            <h5 className='e0'>12th standard - Holy child matric.hr.sec.school</h5>
                            <p className='g0'>Completed my 12th standard at Holy Child mat.hr.sec School was a challenging yet enriching experience. The combination of biology and math provided a well-rounded academic foundation.<b style={{ color: ' rgb(7, 161, 238)', marginTop: '1%', marginLeft: '20%' }}>Percentage:92.6%</b></p>
                        </div>
                        <div className='i90' data-aos="fade-down" style={{ marginTop: '1.5%' }}>
                            <div className='b0'>
                                <p className='c0'></p>
                                <p className='d0'>2018 - 2019</p>
                            </div>
                            <h5 className='e0'>10th standard - Holy child matric.hr.sec.school</h5>
                            <p className='g0'>Completed my 10th grade at Holy Child School laid a solid foundation for my SSLC preparation. The school's dedicated teachers and conducive learning environment played a crucial role in shaping my academic journey.<b style={{ color: ' rgb(7, 161, 238)', marginTop: '1%', marginLeft: '40%' }}>Percentage:89%</b></p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h5 className='i79' data-aos="fade-down">Internship's</h5>
                        <div className='i91' data-aos="fade-down">
                            <div className='b0'>
                                <p className='c0'></p>
                                <p className='d0'>27 June 2023 - 13 july 2023</p>
                            </div>
                            <h5 className='e0'>Eagle tech Company <mark style={{ backgroundColor: '  rgb(7, 161, 238)' }}>(JAVA Domain)</mark></h5>
                            <p className='g0'>Understanding basic Java concepts is foundational. Ensure to grasp fundamentals like variables, data types and so on.Practice coding exercises to strengthen these skills, and gradually delve into more advanced topics.</p>
                        </div>
                        <div className='i92' data-aos="fade-down" style={{ marginTop: '1.5%' }}>
                            <div className='b0'>
                                <p className='c0'></p>
                                <p className='d0'>14 December 2023 - 28 December 2023</p>
                            </div>
                            <h5 className='e0'>Stream troops Innovation Labs <mark style={{ backgroundColor: '  rgb(7, 161, 238)' }}>(Web Development Domain)</mark></h5>
                            <p className='g0'>In stream troops, I'm created the web apps using Flask, consider expanding your skills by exploring more advanced features like handling RESTful APIs, incorporating authentication systems, and implementing real-time functionality.</p>
                        </div>
                        <div>
                            <h5 className='wo' data-aos="fade-right" style={{ marginLeft: '15%', marginTop: '8%', color: 'white', letterSpacing: '.02em',fontFamily: "Calibri" }}>Workshops</h5>
                            <DisplayComponent />
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}
export { Portfolio2, DisplayComponent }