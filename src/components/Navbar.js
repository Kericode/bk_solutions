import React, { useState } from "react";
//import { Button } from './Button';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {

    const [click, setClick] = useState(false);
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
    

  return (
    <>
      <nav className='navbar navbar-expand-sm bg-dark'>
        <div className='container-fluid'>
          <Link to='/' className='navbar-brand' onClick={closeMobileMenu}>
            Logo
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapsibleNavbar' onClick={handleClick}
          >
             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </button>
          <div className='collapse navbar-collapse' id='collapsibleNavbar'>
            <ul className={click ? 'navbar-nav active' : 'navbar-nav'}>
              <li className='nav-item'>
                <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/about' className='nav-link' onClick={closeMobileMenu}>
                  About Us
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/services' className='nav-link' onClick={closeMobileMenu}>
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/products' className='nav-link' onClick={closeMobileMenu}>
                  Products
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/contact' className='nav-link' onClick={closeMobileMenu}> 
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>   
        </div>
      </nav>
    </>
  );
}

export default Navbar;
