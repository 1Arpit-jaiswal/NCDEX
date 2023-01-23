import React from "react";
import "./HNFD.css";
// import { FcComboChart } from "react-icons/fc";

function Testi() {
  return (
    <div class="body">
      <div class="wrapper">
        <header>
          <h1>HNFD</h1>
        </header>

        <section class="cols">
          <div class="col" id="box1">
            <p id="p1">
                
              <h1 id="h11" >Heatmap</h1>
              <span id="spann" >Understand the market movements at commodity level</span>
            </p>
          </div>

          <div class="col" id="box1">
            <p id="p1">
              <h1 id="h11">N-Charts</h1>
              <span  id="spann">
                Explore the feature-rich charting tool with live/delayed quotes,
                reports, circulars and best of the class analytical tools.
              </span>
            </p>
          </div>
        </section>
        <section class="cols" >
          <div class="col" id="box1">
            <p id="p1">
              <h1 id="h11">FPOs</h1>
              <span  id="spann">Transforming lives of farmers. Read on to know more.</span>
            </p>
          </div>

          <div class="col" id="box1">
            <p id="p1">
              <h1 id="h11">Datafeed</h1>
              <span  id="spann">
                Stream Live Futures and Options market data from NCDEX and
                capitalize on the opportunities as they unfold.
              </span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Testi;
