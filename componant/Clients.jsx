import Image from 'next/image'
import React from 'react'

const Clients = () => {
    const clientList = [
        {
            img: "/assets/c1.png",
            alt: ""
        },
        {
            img: "/assets/c2.png",
            alt: ""
        },
        {
            img: "/assets/c3.png",
            alt: ""
        },
        {
            img: "/assets/c4.png",
            alt: ""
        },
        {
            img: "/assets/c5.png",
            alt: ""
        },
        {
            img: "/assets/c6.png",
            alt: ""
        }
    ]
    return (
        <div className="container clients px-0">
            <ul className='d-flex align-items-center justify-content-between'>
                {clientList.map((list, index) => {            
                       return( 
                       <li key={index} className='col'>
                         <img src={list.img} alt=""/>
                        </li>
                       )
                    
                })}

            </ul>
        </div>
    )
}

export default Clients

