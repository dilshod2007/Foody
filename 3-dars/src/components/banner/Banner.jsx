import React from 'react'
import "../banner/Banner.css"
import Fast from "../../assets/Fast.png"
import burger from "../../assets/burger.png"
import cheese from "../../assets/cheese.svg"

function Banner() {
    return (
        <div className='banner' >
            <div>
                <img src={Fast} alt="" />
                <br />
                <h1>
                Fastest
                <br />
                <span>Delivery</span> & 
                <br />
                 Esay <span>Pickup</span>.
                </h1>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Imperdiet tempus felis vitae sit est quisque.</p>
            <br /> <br />   
              <button className='order'>Order Now</button>
                <button className='watch'>Watch Video</button>
            </div>
             
            <div>
                <img src={burger} alt="" />
                <img className='cheese' src={cheese} alt="" />
            </div>
        </div>
    )
}

export default Banner