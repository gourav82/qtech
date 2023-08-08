import Image from 'next/image'
import React from 'react'
import { BsArrowRight } from "react-icons/bs";


const Banner = () => {
  return (
       <div className="container d-flex banner justify-content-between px-0 py-5">
        <div className='banner--content position-relative d-flex justify-content-start align-items-center'>
        <img src="/assets/banner-45.jpg" alt="banner" />
           <span className='banner--content-details'> 
           <span className='sale'>On Sale This Week</span>
           <h4 className='mt-1'>Cell Phone Parts You Can Use as Backup</h4>
           <button className='mt-1 fw-bold'>Shop Now <BsArrowRight/></button>
           </span>
        </div>
        <div className='banner--content position-relative d-flex justify-content-start align-items-center'>
        <img src="/assets/banner-46.jpg" alt="banner" />
           <span className='banner--content-details'> 
           <span className='sale'>On Sale This Week</span>
           <h4 className='mt-1 text-white'>Phone Parts You Can Find at Affordable Price</h4>
           <button className='mt-1 text-white fw-bold'>Shop Now <BsArrowRight/></button>
           </span>
        </div>
       </div>
    )
}

export default Banner