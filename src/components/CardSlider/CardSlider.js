import React from "react";
import Slider from "react-slick";
import "./CardSlider.css";
import BasicCard from "./CSMycard";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      NEXT
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      BACK
    </div>
  );
}

export default function CardSlider() {
  const slider = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,

    // customPaging: function (i) {
    //   return <p>{i + 1}</p>;
    // },

    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      {/* <h1 style={{ textAlign: "center", margin: "20px 0px" }}>
        REACT-SLICK CAROUSEL
      </h1> */}

      <div style={{ margin: 20 }}>
        <button onClick={() => slider?.current?.slickPrev()} id="bt">Prev</button>
        <button
          style={{ marginLeft: 20 }}
          onClick={() => slider?.current?.slickNext()}
        >
          Next
        </button>
      </div>

      <Slider ref={slider} {...settings}>
        {products?.map((item, index, image) => {
          return <BasicCard item={item }    />;
        })}
      </Slider>
    </div>
  );
}

const products = [
  {
    id: "Market Watch",
    image: "./images/MarketWatch.png",
  },
  {
    id: "Bhav Copy",
    image: "./images/BC.png",
  },
  {
    id: 3,
    image: "./images/FPOs.png",
  },
  {
    id: 4,
    image: "./images/TradeVerification.png",
  },

  {
    id: 5,
    image: "./images/ResearchReports.png",
  },
  {
    id: 6,
    image: "./images/InvestoGrievance.png",
  },
  {
    id: 6,
    image: "./images/Circulars.png",
  },
  {
    id: 6,
    image: "./images/CopyCalender.png",
  },
];