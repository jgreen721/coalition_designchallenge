import React from 'react'
import {Navbar} from "../components"

const Dashboard = () => {
  return (
    <div className="page-parent">
        <div className="header">
        <Navbar backgroundColor="transparent-bg" showHeader={false} textColor="text-white"/>
        <div className="header-content">
        <h2 className="text-black uppercase less-space">LosAngeles</h2>
        <h2 className="text-darkblue uppercase grow-space">Mountains</h2>
        </div>
        <img className="bg-img background-img" src="./assets/bluesky.avif" alt="" />
        <img className="bg-img foreground-img" src="./assets/mountainforeground.png" alt="" />
        </div>
        <h5 className="dash-p-blurb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad eveniet dolor maiores at praesentium itaque in culpa debitis sit deleniti sequi provident excepturi totam, sunt dolorem, blanditiis veritatis, adipisci quaerat. Doloribus explicabo temporibus sint eveniet quidem nisi illum incidunt voluptates repellendus distinctio, atque commodi neque similique? Distinctio enim similique obcaecati rem quod numquam! Esse ducimus odio magni nobis, quia voluptatibus. Temporibus distinctio sed facere. Nesciunt architecto ipsum modi laborum expedita! Repellendus voluptatibus neque ratione quasi harum voluptates mollitia nisi, quaerat, itaque sequi in laboriosam, facilis doloremque impedit dicta deserunt provident aspernatur numquam quae aperiam aliquam asperiores eos. Laboriosam amet officiis saepe tenetur commodi minus iure quas minima eius porro corrupti, doloremque eveniet neque quod necessitatibus aliquid. Non veritatis provident, fugit consectetur totam inventore ducimus voluptatibus odio consequuntur, blanditiis accusantium sint </h5>
    </div>
  )
}

export default Dashboard