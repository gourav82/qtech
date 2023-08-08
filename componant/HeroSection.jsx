import React from 'react'
import Slider from 'react-slick';

const HeroSection = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        
    };
    return (
            <Slider {...settings} className="container mt-4 mb-5 px-0">
                {heroDetails.map((item,index)=>{
                    return(

                <div className='hero position-relative d-flex align-items-center justify-content-center' key={`hero-${index}`}>
                    <img src="/assets/slider-14.jpg" alt=""/>
                    <span className='hero--content  text-center'>
                        <span className='premier'>{item.heighLight}</span>         
                        <h1 className='text-white'>{item.heading}</h1>
                        <span className='text-white-50 mt-1 installation'>{item.text}</span>
                        <p className='text-white'><small>${item.mrp}</small> ${item.saling_price}</p>
                    </span>
                </div>
                    )
                })}

            </Slider>
    )
}

export default HeroSection

const heroDetails = [
    {
     heighLight: "This Week only for World Premier",
     heading: "Mobile Accessrories for All Your Needs",
     text: "Installation of parts in the services of, our partners . Limited time offer for only new customer, also get free shipping on orders",
     mrp: "197.00",
     saling_price: "157.00"
    },
    {
        heighLight: "This Week only for World Premier",
        heading: "Mobile Accessrories for All Your Needs",
        text: "Installation of parts in the services of, our partners . Limited time offer for only new customer, also get free shipping on orders",
        mrp: "197.00",
        saling_price: "157.00"
       },
       {
        heighLight: "This Week only for World Premier",
        heading: "Mobile Accessrories for All Your Needs",
        text: "Installation of parts in the services of, our partners . Limited time offer for only new customer, also get free shipping on orders",
        mrp: "197.00",
        saling_price: "157.00"
       },
]