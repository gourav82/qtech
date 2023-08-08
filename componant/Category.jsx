import Image from 'next/image'
import React from 'react'
import { BsArrowRight } from "react-icons/bs";

const Category = () => {
  return (
      <div className="container category d-flex justify-content-between align-items-center px-0">
        <div className="col-4 category--wrap d-flex align-items-center">
        <Image src="/assets/category2.png" alt="logo" width={100} height={100}/>
        <span className='category--wrap-details'>
            <p className='fw-bold'>Cell Phones</p>
            <ul>
                <li>Phone Cases</li>
                <li>Phone Accessories</li>
                <li>Unlocked Phones</li>
                <li>iPhone</li>
            </ul>
            <button className='fw-bold'>All Cell Phone <BsArrowRight/></button>
        </span>
        </div>
        
        <div className="col-4 category--wrap d-flex align-items-center">
        <Image src="/assets/category.png" alt="logo" width={100} height={100}/>
        <span className='category--wrap-details'>
            <p className='fw-bold'>Cell Phones</p>
            <ul>
                <li>Phone Cases</li>
                <li>Phone Accessories</li>
                <li>Unlocked Phones</li>
                <li>iPhone</li>
            </ul>
            <button className='fw-bold'>All Headphones <BsArrowRight/></button>
        </span>
        </div>

        <div className="col-4 category--wrap d-flex align-items-center">
        <Image src="/assets/category1.png" alt="logo" width={100} height={100}/>
        <span className='category--wrap-details'>
            <p className='fw-bold'>Cell Phones</p>
            <ul>
                <li>Phone Cases</li>
                <li>Phone Accessories</li>
                <li>Unlocked Phones</li>
                <li>iPhone</li>
            </ul>
            <button className='fw-bold'>All Phone Displays <BsArrowRight/></button>
        </span>
        </div>
      </div>
    )
}

export default Category