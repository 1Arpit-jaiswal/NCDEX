import React from "react";
import "./Flex.css";

function Flex() {
  return (
    <div class="body">
      <div class="wrapper">
        <header>
          <h2>THE NCDEX IMPACT</h2>
        </header>
        <section class="cols">
          <div class="col">
            <p>Boosting Agri-ecosystem of the country <br/>
            <strong>82%</strong> Agri Marketshare</p>
          </div>

          <div class="col">
            <p>
              Transforming lives for farmers<br/>
              <strong> 470 FPOs </strong> onboarded <br/>
               <strong>16 States</strong> covered <br/>
              <strong>10,48,491</strong> Farmer base  <br/>
              <strong>1,15,175 </strong> MT quantity traded <br/>
               <strong>4,31,418</strong> Farmers
            </p>
          </div>

          <div class="col">
            <p>
            NCDEX Mandi is the solution to all farming-related problems. Get all
            your questions related to farming answered here. go to
            <span><a href="https://ncdexmandi.com/gu/" target="_blank"> <strong>ncdexmandi.com</strong></a></span>
            </p>

          </div>
        </section>
      </div>
    </div>
  );
}

export default Flex;