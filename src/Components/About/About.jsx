import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing tomorrow's leaders today</h2>
            <p>deleniti perferendis tempora? Minima quam est molestias quisquam veniam, possimus velit fugit obcaecati autem!</p>
            <p>deleniti perferendis tempora? Minima quam est molestias quisquam veniam, possimus velit fugit obcaecati autem!</p>
            <p>deleniti perferendis tempora? Minima quam est molestias quisquam veniam, possimus velit fugit obcaecati autem!</p>
        </div>
    </div>
  )
}

export default About