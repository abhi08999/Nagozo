import React from 'react'
import "../../Css/card.css"
function NovelCard({title,price,rating}) {
    return (

          <div class="content">
        <img src={`https://picsum.photos/id/${price}/500/300`}/>
        <h3>{title}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <h6>₹{price}</h6>
        <ul>
        {[...Array(rating)].map((x, i) =>
          <li><i class="fa fa-star" aria-hidden="true"></i></li>
          
        )}

          
          </ul>
        <button class="buy-1">Buy Now</button>
      </div>
        
         )
}

export default NovelCard
