import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Headers from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import './AboutPage.css'
import Timeline from '../../Component/Timeline/Timeline'

const AboutPage = props => {
  
  return (
    <div>
      <Headers />
      <div className='about-title'>About Hison</div>
      <div className='aboutContainer'>
        <div className='about'>
          <p>I am a dedicated developer originally from Hong Kong. In August 2022, my family and I relocated to Vancouver, and we are currently residing in Coquitlam. I am eagerly looking forward to the opportunities and experiences that lie ahead.</p>
          <p>My professional journey began in Hong Kong, where I spent 10 years as a Financial Planning Manager. This role honed my skills in self-learning, analysis, and management, and equipped me with strong self-discipline and effective communication abilities.</p>
          <p>In April 2024, I graduated from Vancouver Community College, driven by a passion for creating websites and software applications. Throughout my studies and various projects, I have developed expertise in the entire software development lifecycle, with a particular focus on user interface design and integration with web and mobile applications. My experience with databases has further enabled me to add depth and interactivity to my projects.</p>
          <p>Outside of my professional life, I am a father of two and enjoy exploring the world with my children. I am also an avid sports enthusiast, participating in basketball, football, and badminton. Additionally, I am passionate about continuously studying and mastering various development technologies.</p>
          <p>I am committed to lifelong learning and self-improvement, and I eagerly anticipate embracing new challenges and opportunities in the future.</p>
        </div>
        <div className='aboutImage'>
          <img src='photo.jpg' alt='hison'/>
        </div>
      </div>
      <div className="timeline">
        <Timeline />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>

  )
}

AboutPage.propTypes = {

}

export default AboutPage
