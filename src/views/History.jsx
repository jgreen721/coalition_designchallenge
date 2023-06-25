import React, {useState} from 'react'
import {Navbar} from "../components"

const History = () => {
  const [bgImg,setBgImg] = useState("./assets/historymountainebg.avif")
  return (
      <div className="history-container">

        <Navbar backgroundColor="white-bg" showHeader={true} textColor="text-darkblue"/>
        <div className="history-content">

            <div className="history-header">
              <h1 className="text-black uppercase text-darkblue faded absolute-bottom shadow-white">01</h1>
              <div>
                <h3 className="uppercase text-darkblue">History</h3>
                <div className="square faded darkblue-bg"></div>
              </div>
            </div>
          <p className="history-blurb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde maxime at amet similique reprehenderit, tempore eligendi dolore nobis! Qui quibusdam saepe, fugit ad consectetur dolores commodi itaque illum ex tenetur architecto earum incidunt doloribus optio ea facilis. Cum maxime ea nostrum, aliquid impedit beatae sed facere. Neque, porro ipsa cum amet repellat voluptatem maiores nulla pariatur quaerat itaque rem vitae dolores voluptates dignissimos eaque quibusdam sint assumenda explicabo perferendis dolore?</p>
        </div>
        <img className="history-bg-img" src={bgImg} alt="" />
        <div className="carousel">
          <div className="carousel-bg-overlay"></div>
          <ul className="carousel-list">
            <li onClick={()=>setBgImg("/assets/carouselimg.jpeg")} className="carousel-item">
              <img className="carousel-img" src="/assets/carouselimg.jpeg" alt="" />
            </li>
            <li onClick={()=>setBgImg("/assets/carouselimg2.jpeg")} className="carousel-item">
              <img className="carousel-img" src="/assets/carouselimg2.jpeg" alt="" />
            </li>
            <li onClick={()=>setBgImg("/assets/carouselimg.jpeg")} className="carousel-item">
              <img className="carousel-img" src="/assets/carouselimg.jpeg" alt="" />
            </li>
            <li onClick={()=>setBgImg("/assets/carouselimg2.jpeg")} className="carousel-item">
              <img className="carousel-img" src="/assets/carouselimg2.jpeg" alt="" />
            </li>
          </ul>
        </div>
        </div>
  )
}

export default History