import React from 'react';
import './Slider.css';
import './Slider';
 const Detail = () => {
    
    (function Detail(){
    ('#theCarousel').carousel();

      }());

      (function(){
        ('.carousel-showmanymoveone .item').each(function(){
          var itemToClone = (this);

          for (var i=1;i<3;i++) {
            itemToClone = itemToClone.next();

            // wrap around if at end of item collection
            if (!itemToClone.length) {
              itemToClone = (this).siblings(':first');
            }

            // grab item, clone, add marker class, add to collection
            itemToClone.children(':first-child').clone()
              .addClass("cloneditem-"+(i))
              .appendTo((this));
          }
        });
  }());
  
(function() {
('.carousel-showmanymoveone').carousel({
  interval: false
}); 
}());
    
}


export default Detail;