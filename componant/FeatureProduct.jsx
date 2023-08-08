import React, { useState } from 'react'
import { BsArrowRight } from "react-icons/bs";
import Product from './Product';

const FeatureProduct = () => {
    const [tabActive, setTabActive] = useState("Cell Phones")
    const handleActive =(name)=>{
        setTabActive(name)
    }
    return (
        <>
        <div className="container d-flex align-items-center justify-content-between mt-5 tab p-0 mb-2">
            <div className="tab--wrap d-flex align-items-center justify-content-between mb-3">
                <h5 className='fw-bold'>Featured Products</h5>
                <ul className="tab--wrap-item d-flex align-items-center justify-content-between">
                    {tab.map((list, index)=>{
                        return(
                           <React.Fragment key={index}>
                           <li className={`${list.name === tabActive? "active" : ""}`} onClick={()=>handleActive(list.name)}>{list.name}</li>
                           </React.Fragment>
                        )
                    })}
                   
                </ul>
            </div>
            <p className='hide--mobile'>View All <BsArrowRight /></p>
        </div>
        <Product/>
        </>
    )
}

export default FeatureProduct

const tab =[
    {
        name:"Cell Phones"
    },
    {
        name:"HeadPhones"
    },
    {
        name:"Sports & Outdoors"
    }
]