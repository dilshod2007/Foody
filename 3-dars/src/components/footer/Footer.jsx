import React from 'react'
import "../footer/Footer.css"
import logo from "../../assets/Frame 1109.svg"
import logoss from "../../assets/logoss.png"

function Footer() {
    return (
        <>
        <div className='footer'>
            <div className='footer-content'>
                <img src={logo} alt="" />
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Blog </a></li>
                    <li><a href="#">CantactUs</a></li>

                </ul>
                <img src={logoss} alt="" />
            </div>
            <hr />
            <div className='footer-text'>
                <p>© Copyright 2022, All Rights Reserved</p>
                <br />
                <p>Privacy Policy   </p>
                <br />
                <p>Terms & Conditions</p>
            </div>
        </div>
        
        
        </>
    )
}



export default Footer
