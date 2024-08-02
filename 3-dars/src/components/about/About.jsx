import React from 'react'
import "../about/About.css"
import logos5 from "../../assets/logos5.png"
import  Oval from "../../assets/Oval.png"
import  Oval2 from "../../assets/Oval2.png"
import  Oval3 from "../../assets/Oval3.png"

function About() {
    return (
       <div className='about'>
        <h1 className='title-h1' >What our customer
            <br />
        say about this</h1>
       <div className='wrappers'>
       <div className='about-card'>
            <img src={logos5} alt="" />
            <br /><br />
            <p>“You made it so simple. My new site is so <br /> much faster and easier to work with than
            <br /> my old site. I just choose the page, make <br /> the change.”</p>
            <br />
            <div className='oval'>
                <img src={Oval} alt="" />
                <br />
                <h3 className='name'>Leslie Alexander</h3>
                <span className='founder'>Founder</span>
            </div>
        </div>
        <div className='about-card'>
            <img src={logos5} alt="" />
            <br /><br />
            <p>“You made it so simple. My new site is so <br /> much faster and easier to work with than
            <br /> my old site. I just choose the page, make <br /> the change.”</p>
            <br />
            <div className='oval'>
                <img src={Oval2} alt="" />
                <br />
                <h3 className='name'>Jacob Jones</h3>
                <span className='founder'>Co-Founder</span>
            </div>
        </div>
        <div className='about-card'>
            <img src={logos5} alt="" />
            <br /><br />
            <p>“You made it so simple. My new site is so <br /> much faster and easier to work with than
            <br /> my old site. I just choose the page, make <br /> the change.”</p>
            <br /><br />
            <div className='oval'>
                <img src={Oval3} alt="" />
                <br />
                <h3 className='name'>Jenny Wilson </h3>
                <span className='founder'>Chief Marketing Officer</span>
            </div>
        </div>
       </div>
       </div>
    )
}

export default About