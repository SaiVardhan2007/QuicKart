import React from 'react'
import instagramIcon from '../Assets/instagram_icon.png'
import whatsappIcon from '../Assets/whatsapp_icon.png'
import footerLogo from '../Assets/logo_big.png' 
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={footerLogo} alt='footer logo' />
        <p>QuicKart</p>
      </div>
    <ul className='footer-links'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Services</a></li>
        <li><a href='#'>Contact</a></li>
    </ul>
    <div className='footer-socials'>
        <div className='social-icon'>
            <img src={instagramIcon} alt='Instagram' />
        </div>
        <div className='social-icon'>
            <img src={whatsappIcon} alt='WhatsApp' />
        </div>
    </div>
    <div className='footer-bottom'>
        <hr />
        <p>Copyright @ 2025 - All rights reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
    </div>
    </div>
  )
}

export default Footer
