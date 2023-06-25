import React, {useState} from 'react'
import {Link} from "react-router-dom";
import "./Navbar.css"

const Navbar = ({backgroundColor,showHeader,textColor}) => {
    const [showMobile,setShowMobile] = useState(false)

  const toggleMobileMenu=()=>{
      setShowMobile(!showMobile)

  }
  return (
    <nav className={`navbar ${backgroundColor}`}>
      <div className="navbar-content">
        <Link className="home-link" to="/">
        <div className="nav-logo">
            <img className="nav-logo-img" src="assets/mountainforeground.png" alt="" />
            {showHeader && <div className="nav-header"><h4 className="text-black uppercase">LosAngeles</h4><h4 className="text-darkblue uppercase">Mountains</h4></div>}
        
        </div>
        </Link>
        <ul className="nav-links">
                <li className="nav-item">
                    <Link className={`nav-link uppercase ${textColor} ${textColor == "text-white" ? "white-link-item" : "dark-blue-link-item"}`} to="/history"><span className="link-span">01.</span>History</Link>
                </li>
                <li className="nav-item">
                <Link className={`nav-link uppercase ${textColor} ${textColor == "text-white" ? "white-link-item" : "dark-blue-link-item"}`} to="/team"><span className="link-span">02.</span>Team</Link>

                </li>
            </ul>

            <div className="mobile-nav">
             
              

             <svg onClick={()=>setShowMobile(!showMobile)} className={!showMobile ? "burger" : "burger close-menu"}>
    <rect className="rect rect1" x="0" width="20" height="2" y="10"/>
    <rect className="rect rect2" x="0" width="20" height="2" y="15"/>
    <rect className="rect rect3" x="0" width="20" height="2" y="20"/>
    </svg>
    <div className={showMobile ? "mobile-menu" : "mobile-menu hide-mobile-menu"}>
      <Link to="/">
        <h4 className="text-gray mobile-item">Home</h4>
      </Link>
      <Link to="/history">
      <h4 className="text-gray mobile-item">History</h4>

      </Link>
      <Link to="/team">
      <h4 className="text-gray mobile-item">Team</h4>

      </Link>
    </div>
            </div>
            </div>
    </nav>
  )
}

export default Navbar