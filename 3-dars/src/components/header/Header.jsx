import React from 'react'
import "../header/Header.css"
import logo from "../../assets/Frame 1109.svg"
import logos from "../../assets/logos.png"

function Header() {
    return (
        <div className='container'>

            <div>
            <img src={logo} alt="" />
            </div>
            <div>
                <ul className='ul'>
                    <li className='li'><a className='a' href="#">Home</a></li>
                    <li><a href="#">service</a></li>
                    <select >
                        <option value="Menu">Menu</option>
                        <option value="Burger">Burger</option>
                        <option value="lavash">Lavash</option>
                        <option value="pizza">Pizza</option>
                    </select>
                    <li><a href="#">Help</a></li>


                </ul>
            </div>
            <div>
                <img src={logos} alt="" />
            </div>
        </div>
    )
}

export default Header