import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';
import { BsHeart, BsArrowRepeat, BsEye } from "react-icons/bs";
import CardDetails from './CardDetails';

const Card = ({item}) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <>
            <div className="product-card mb-5">
                <div className='product mt-1'>
                    <Slider {...settings} className='pb-5'>
                        {item.images.map((img, index)=>{
                            return(
                          <div className="product--cardimg" key={`image-${index}`}>
                            <Image src={img} alt="" width={240} height={300} className='p-1'/>
                            <ul className='d-flex flex-column product--cardimg-icon align-items-center justify-content-end'>
                                <li><BsHeart /></li>
                                <li><BsArrowRepeat /></li>
                                <li><BsEye /></li>
                            </ul>
                        </div>
                            )
                        })}
                        
                        
                    </Slider>
                </div>
                <CardDetails item={item}/>
            </div>
        </>
    )
}

export default Card