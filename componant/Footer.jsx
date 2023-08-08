import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container d-flex footer--menu">
                <div className=" footer--menu-logo">
                    <Image src="/assets/logo-light.png" alt="logo" width={150} height={40} />
                    <h5 className='text-white mt-4'>Völogi deledes ponade eujäjurtad</h5>
                    <span className='text-light mt-3'>Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat. Pressa fåmoska. Aposkop redelingar nede, sektigt.</span>
                    <p className='text-danger mt-3'>info@example.com </p>
                </div>
                <div className="footer--menu-item">
                    <span className='text-white fw-bold'>Need Help?</span>
                    <h6 className='text-white mt-4'>(+800) 1234 5678 90</h6>
                    <span className='text-white'>Monday-Friday: 9:00-20:00 Saturady: 11:00-15:00</span>
                    <p className='text-danger'>support@example.com</p>
                </div>
                <div className="footer--menu-item">
                    <h5 className='text-white fw-bold'>Customer Service</h5>
                    <ul className='text-white'>
                        <li>Help Center</li>
                        <li>My account</li>
                        <li>Track Products</li>
                        <li>My Orders</li>
                        <li>Your Wishlist</li>
                        <li>Return Policy</li>
                        <li>Buy Gift Cards</li>
                    </ul>
                </div>
                <div className=" footer--menu-item">
                    <h5 className='text-white fw-bold'>Store Information</h5>
                    <ul className='text-white'>
                        <li>About Partdo Store</li>
                        <li>Best Sellers</li>
                        <li>Latest Products</li>
                        <li>New Discounts</li>
                        <li>Sale Products</li>
                        <li>Affiliate Program</li>
                        <li>Sell on Partdo</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer

