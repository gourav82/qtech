import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import product from "../public/assets/json/product.json"

const Product = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <div className="container">

            <Slider {...settings}>
            {product.map((item,index)=>{
                return(
               <div key={`peoduct-${index}`} >
                    <Card item={item}/>
                </div>
                )
            })}
                               
            </Slider>


        </div>
    )
}

export default Product
