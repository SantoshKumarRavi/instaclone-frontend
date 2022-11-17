import React from 'react'
import {Link} from 'react-router-dom';
const LandingPage = () => {
  return (
    <div className='landpage-container'>
        <div className='left-container'>
            <div className='land-image-container'>
                 <img src={require("../../assets/images/landingpage.png")} alt="brand-img"></img>
            </div>
        </div>
        <div className='right-container'>
            <div className='brand-name child'>
                welcome to 10x ..
            </div>
            <div className='child'>
                <Link className='link-container' to="/Postview"><button className='btn-container'>Enter</button></Link>
            </div>
        </div>
    </div>
  )
}

export default LandingPage