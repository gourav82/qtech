import Image from 'next/image';
import React from 'react'
import { BsList, BsMenuDown, BsSearch, BsHeart, BsCart } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";



const HeaderSearch = () => {
  return (
        <>
        <div className="header-bottom">
      <div className="container search d-flex align-items-center mt-4 mb-4 px-0">
       <div className="search--logo col-2 d-flex align-items-center justify-content-between">
        <BsList className='fs-4 hide--mobile'/>
        <Image src="/assets/logo-dark.png" alt="logo" width={120} height={40}/>
        <BsMenuDown className='menudown fs-4'/>
       </div>
       <div className="search--input col-7 position-relative d-flex align-items-center justify-content-end mx-2">
       <input name="" type='text' placeholder='Search for products..'/>
       <BsSearch className='position-absolute search--input-icon'/>
       </div>
       <ul className="search--login col-3 d-flex justify-content-around">
         <li className='d-flex flex-column'>
            <span className='fw-bold'>My Account <BiChevronDown/></span>
            <span>Hello, Sign In</span>
         </li>
         <li className='position-relative'><BsHeart className='fs-4 mt-2'/>
         <span className='cart '>0</span>
         </li>
         <li className='position-relative'><BsCart className='fs-4 mt-2'/>
         <span className='cart '>0</span>
         </li>
         <li  className='d-flex flex-column'>
            <span>0 items</span>
            <span className='fw-bold'>$0.00</span>
         </li>
       </ul>
     </div>
     </div>
        </>
    )
}

export default HeaderSearch