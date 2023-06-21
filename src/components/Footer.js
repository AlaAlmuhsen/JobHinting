import React from 'react'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import linkedin from '../images/linkedin.svg'
import phone from '../images/telephone-fill.svg'
import location from '../images/geo-alt-fill.svg'
function Footer() {
  return (
    <div id='footer'>
    <div className='logo'>JobHuntly</div>
    <div id='list-footer'>
        <p className='items-footer'>Home</p>
        <p className='items-footer'>Find Job</p>
        <p className='items-footer'>Browse Company</p>
    </div>
    <div className='socialMedia'>
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram"/>
        <img src={linkedin} alt="linkedin"/>
        <img src={phone} alt="phone"/>
        <img src={location} alt="location"/>
    </div>
    <div className='CopyRight'>
      <h6>JobHuntly2023@CopyRight</h6>
    </div>
    </div>
  )
}

export default Footer
