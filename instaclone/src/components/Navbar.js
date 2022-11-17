import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav-bar'>
        <div className='nav-left'>
            <div className='logo'>🧿</div>
            <h2>InstaClone</h2>
        </div>
        <Link className='link-container nav-right' to="/PostForm">📷</Link>
        {/* <div className=''>
        </div> */}
    </div>
  )
}

export default Navbar