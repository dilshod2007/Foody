import React from 'react'
import "../products/Products.css";
import image from "../../assets/burger1.png"
import burger2 from "../../assets/burger2.png"
import burger3 from "../../assets/burger3.png"
import burger4 from "../../assets/burger4.png"  
import burger5 from "../../assets/burger5.png"
import burger6 from "../../assets/burger6.png"
import burger7 from "../../assets/burger7.png"
import burger8 from "../../assets/burger8.png"


function Products (){
    return (
      <>
    <div>
   <div className='card'>
   <h1>Special Menu for you</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus 
        nibh cursus integer dolor, commodo. Amet, aliquam condimentum.</p>
   </div>
       <div className='wrapper'>
       <div className='card-content'>
         <img className='image' src={image} alt="" />
         <br />
         <h1>McSpicy Special</h1>
         <br />
         <div className='card-delivery'>
         <span className='spann' >🚚 Free Delivery</span>
         <span className='spann' >⏰ 25-30 min</span>
          </div>
         <div>
         <button className="card-button">Order Now</button>
         </div>
         </div>
         <br />
       <div>
      
       </div>
         <div className='card-content'>
         <img className='image' src={burger2} alt="" />
         <br />
         <h1>McSpicy Special</h1>
         <br />
         <div className='card-delivery'>
         <span >🚚 Free Delivery</span>
         <span>⏰ 25-30 min</span>
          </div>
         <div>
         <button className="card-button">Order Now</button>
         </div>
         </div>
         <br />
      

         <div className='card-content'>
         <img className='image' src={burger3} alt="" />
         <br />
         <h1>McSpicy Special</h1>
         <br />
         <div className='card-delivery'>
         <span >🚚 Free Delivery</span>
         <span>⏰ 25-30 min</span>
          </div>
         <div>
         <button className="card-button">Order Now</button>
         </div>
         </div>
         <br />
        

         <div className='card-content'>
         <img className='image' src={burger4} alt="" />
         <br />
         <h1>McSpicy Special</h1>
         <br />
         <div className='card-delivery'>
         <span >🚚 Free Delivery</span>
         <span>⏰ 25-30 min</span>
          </div>
         <div>
         <button className="card-button">Order Now</button>
         </div>
         </div>
         <br />
       

         <div className='card-content'>
         <img className='image' src={burger5} alt="" />
         <br />
         <h1>McSpicy Special</h1>
         <br />
         <div className='card-delivery'>
         <span >🚚 Free Delivery</span>
         <span>⏰ 25-30 min</span>
          </div>
         <div>
         <button className="card-button">Order Now</button>
         </div>
         </div>
         <br />
        

         <div className='card-content'>
         <img className='image' src={burger6} alt="" />
         <br />
         <h1>McSpicy Special</h1>
         <br />
         <div className='card-delivery'>
         <span >🚚 Free Delivery</span>
         <span>⏰ 25-30 min</span>
          </div>
         <div>
         <button className="card-button">Order Now</button>
         </div>
         </div>
         <br />
        
         <div className='card-content'>
         <img className='image' src={burger7} alt="" />
         <br />
         <h1>McSpicy Special</h1>
         <br />
         <div className='card-delivery'>
         <span >🚚 Free Delivery</span>
         <span>⏰ 25-30 min</span>
          </div>
         <div>
         <button className="card-button">Order Now</button>
         </div>
         </div>
         <br />
        
         <div className='card-content'>
         <img className='image' src={burger8} alt="" />
         <br />
         <h1>McSpicy Special</h1>
         <br />
         <div className='card-delivery'>
         <span >🚚 Free Delivery</span>
         <span>⏰ 25-30 min</span>
          </div>
          <div>
         <button className="card-button">Order Now</button>
        </div>
         </div>
       

       </div>

    </div>
      </>
    )
}

export default Products
{/* <div className="card">
<img src={image} alt={title} className="card-image" />
<div className="card-content">
  <h3 className="card-title">{title}</h3>
  <div className="card-rating">
    <span>⭐️ 5.0</span>
  </div>
  <div className="card-delivery">
    <span>🚚 Free Delivery</span>
    <span>⏰ 25-30 min</span>
  </div>
  <button className="card-button">Order Now</button>
</div>
</div> */}