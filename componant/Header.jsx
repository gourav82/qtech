import Link from 'next/link';
import React from 'react'
import { BiChevronDown } from "react-icons/bi";
import {BsList} from "react-icons/bs";
import Drawer from 'react-modern-drawer'

import HeaderSearch from './HeaderSearch';
import Image from 'next/image';
const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
  return (
    <>
      <div className="container-fluid header d-flex align-items-center">
        <div className="container d-flex justify-content-between align-items-end header--menu">
            <ul className='d-flex header--menu-item mb-1 hide--mobile'>
                {menu.map((item,index)=> {
                    return(
                        <React.Fragment key={index}>
                        <li><Link href={item.link}> {item.page}</Link></li>
                        </React.Fragment>
                    )
                })}               
            </ul>
            <BsList className='fs-2 fw-bold hide--desktop' onClick={toggleDrawer}/>
            <ul className='d-flex header--menu-item'>
                {lang.map((list,index)=>{
                    return(
                        <React.Fragment key={index}>
                         <li><Link href={list.link}>{list.name}<BiChevronDown className='fs-4 mb-1'/></Link></li>
                         </React.Fragment>
                    )
                })}
            </ul>
        </div>
      </div>
        <HeaderSearch/>

        <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='bla bla bla'
            >
                 <Image src="/assets/logo-dark.png" alt="logo" width={120} height={40} className='mt-4 mx-4'/>
               <ul className='d-flex header--menu-item flex-column mt-5 fs-2 mb-1'>
                {menu.map((item,index)=> {
                    return(
                        <React.Fragment key={index}>
                        <li><Link href={item.link}> {item.page}</Link></li>
                        </React.Fragment>
                    )
                })}               
            </ul>
            </Drawer>
        </>
    )
}

export default Header


const menu = [
       {
        page:"About Us",
        link:"/about"
       },
       {
        page:"My Account",
        link:"/about"
       },
       {
        page:"Order Tracking",
        link:"/about"
       },
       {
        page:"Wishlist",
        link:"/about"
       },
];

const lang = [
    {
        name:"English",
        link:""
    },
    {
        name:"USD",
        link:""
    },
]