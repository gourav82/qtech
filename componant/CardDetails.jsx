import React from 'react'
import { BsStar, BsCart, BsBoxSeam, BsXSquare,BsStarFill } from "react-icons/bs";


const CardDetails = ({ item }) => {
    const review = [0, 1, 2, 3, 4];
    return (
        <div className="container cardDetails mt-3">
            <p className='fw-bold cardDetails--head'>{item.title}</p>
            <span className='cardDetails--star d-flex align-items-center'>
                <ul className='d-flex align-items-center'>
                    {
                        review.map((rev, index) => {
                            if (index <= item.avg_review)
                                return (
                                    <li key={`lin-${index}`} className='star-active'><BsStarFill /></li>
                                )
                            else {
                                return (
                                    <li key={`lin-${index}`}><BsStar /></li>
                                )
                            }
                        })
                    }

                </ul>
                <span>{item.cont_review} review</span>
            </span>
            <div className="cardDetails--price d-flex align-items-center justify-content-between mt-1 mb-1">
                <span className='d-flex align-items-center flex-column'>
                    {
                        item.variable ? <><span className=''>{item.currency + item.min_price}</span>
                            <span>-</span>
                            <span className=''>{item.currency + item.max_price}</span></>:<>
                            {
                                item.selling_price < item.mrp ? <> 
                                    <span className='actual'>{item.currency + item.mrp}</span>
                                    <span className='mrp'>{item.currency + item.selling_price}</span>
                                    </> 
                                : <span className='mrp'>{item.currency + item.selling_price}</span>

                            }</> 
                    }
                    
                </span>
                <span className='addToCart'><BsCart className='mb-1' /></span>
            </div>
            <div className="cardDetails--stock">
            {item.qty>0?
                <span className='inStock'><BsBoxSeam /> In Stock</span>:
                <span className='outStock'><BsXSquare /> Out of Stock</span>
            }
            </div>
        </div>
    )
}

export default CardDetails