import React from 'react'
import './Member.css';

function Member() {
  return (
    <div className='body'>
      <div className='Wrap'>
          <img src="https://ncdex.com/public/images/trade.jpg" alt=""/>
          <div className='TextA'>
            
          
           <h2>TRADE WITH NCDEX. BECOME A MEMBER</h2>
           <p>
           National Commodity & Derivatives Exchange Limited (NCDEX) is a nation-level, technology -driven online commodity Exchange with an independent Board of Directors and professional management. It is committed to provide a world-class commodity Exchange platform for market participants to trade in a wide spectrum of commodity derivatives driven by best global practices, professionalism and transparency.
          </p>   

          <button type="button" class="btn btn-outline-warning">Become a member</button>
          </div>
       
      </div>
    </div>
  )
}

export default Member