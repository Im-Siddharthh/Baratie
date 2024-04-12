import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className="footer-logo" src={assets.logo} alt="" />
            <p>Thank you for visiting Baratie. Also here is something my friend has to say to you</p>
            
            {/* <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div> */}
        </div>
        <div className="footer-content-center">
            <h2>From my Friend</h2>
            <ul>
                <li>"You want my treasure, you can have it.</li>
                <li>I left everything I gathered together in one place.</li>
                <li>Now, you just have to find it."</li>
                <li>  - Gol D. Roger.</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
            <div className="footer-social-icons">
                <a href='https://www.linkedin.com/in/siddharth2119chauhan/' target='blank'><img src="/linkedin.png" alt=""/></a>
                <a href='mailto:siddharth2119chauhan@gmail.com' target='blank'><img src="/google.png" alt="email" /></a>
                <a href='https://github.com/Im-Siddharthh' target='blank'><img src="/github.png" alt="gthub"  /></a>
            </div>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Designed With💓 By Siddharth Chauhan</p>
    </div>
  )
}

export default Footer
