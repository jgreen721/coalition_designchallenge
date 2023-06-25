import React, {useState} from 'react'
import {Navbar} from "../components"

const Teams = () => {
  const [isSelected, setIsSelected] = useState(false)
  return (
    <div className="team-parent">
      <div className="img-bg-overlay">
        <img className="team-bg-img" src={isSelected ? "assets/teambg.jpeg" : "assets/teamsbgimg2.jpeg"} alt="" />
      </div>
      <div className="team-content-container">
        <Navbar showHeader={false} textColor="text-black" backgroundColor="transparent-bg"/>
        <div className="team-hero">
        <header className="team-header">
          <div className="team-header-content">
          <div className="flex-bottom">

          <h1 className="text-black uppercase text-gray faded absolute-bottom shadow-black">02</h1>
          <div>
            <h3 className="uppercase text-darkblue">Climb</h3>
            <div className="square gray-bg shadow-gray"></div>
          </div>
            </div>
        
          <div className="blurb-div">
          <p className="header-blurb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laboriosam ullam consectetur, tempora officiis facilis maiores sed iusto fuga. Modi saepe nisi ratione quo tempore.</p>
          </div>
          </div>
         
        </header>
        <div className="bg-img-selection-row">
          <div className="bg-img-selection-content">
          <h4 onClick={()=>setIsSelected(true)} className={isSelected ? 'uppercase selected-img-text selection-bg-h4' : "uppercase text-gray selection-bg-h4"}>Mountain1</h4>
          <h4 onClick={()=>setIsSelected(false)} className={!isSelected ? 'uppercase selected-img-text selection-bg-h4' : "uppercase text-gray selection-bg-h4"}>Mountain2</h4>
          </div>
        </div>
        </div>

        <div className="schedule-card">
          <div className="schedule-card-bg-overlay"></div>
          <div className="schedule-card-content">
          <h4 className="uppercase">Schedule</h4>
          <ul className="schedule-list">
            <li className="schedule-item">
              <p className="thin">25 Nov 2016</p>
              <p className="thin">Vestibulum viverra</p>
            </li>
            <li className="schedule-item">
              <p className="thin">28 Nov 2016</p>
              <p className="thin">Vestibulum viverra</p>
            </li>
            <li className="schedule-item">
              <p className="thin">18 Dec 2016</p>
              <p className="thin">Vestibulum viverra</p>
            </li>
            <li className="schedule-item">
              <p className="thin">7 Jan 2017</p>
              <p className="thin">Vestibulum viverra</p>
            </li>
          </ul>
          </div>
        </div>
        <footer className="team-footer">
          <div className="team-footer-content">
        <div className="nav-logo">
            <img className="nav-logo-img" src="assets/mountainforeground.png" alt="" />
             <div className="nav-header">
               <h4 className="text-black uppercase hide-mobile">LosAngeles</h4>
               <h4 className="text-blue uppercase hide-mobile">Mountains</h4>
            </div>
        </div>
        <div className="footer-copywrite-div">
          <h5 className="text-gray uppercase">Copyright 2014, all rights reserved</h5>
        </div>
        </div>
        </footer>
      </div>
    </div>
  )
}

export default Teams