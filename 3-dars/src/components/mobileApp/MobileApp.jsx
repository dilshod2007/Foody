import React from 'react'
import "../mobileApp/mobileApp.css"
import app from "../../assets/app.png"
import play from "../../assets/play.png"
import iphone from "../../assets/iphone.png"

function Mobile() {
    return (
        <div className='mobile'>
          <div className='content'>
          <div className='app-images'>
                <h1>Download our Mobile App</h1>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer dolor, commodo. Amet, aliquam condimentum.</p>
                <div>
                    <img src={app} alt="" />
                    <img src={play} alt="" />
                </div>
            </div>
            <div>
                <img src={iphone} alt="" />
            </div>
          </div>
        </div>
    )
}

export default Mobile