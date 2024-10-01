import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.modulus.css'

const Navbar = () => {
    return(
        <nav className='navbar'>
            <Link to='/' className='logo'><h2>News<span>Detect</span></h2></Link>
            <div className='nav-items'>
                <Link to='/' className='nav-item'>Home</Link>
                <Link to='/about' className='nav-item'>About</Link>
                <Link to='/predictor' className='nav-item'>Service</Link>
            </div>  
            <button><i className='ri-phone-fill'></i> Contact Us</button>
        </nav>
    )
}
export default Navbar