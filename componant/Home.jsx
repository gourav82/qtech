import React from 'react'
import Banner from './Banner'
import Category from './Category'
import HeroSection from './HeroSection'
import FeatureProduct from './FeatureProduct'
import Clients from './Clients'

const Home = () => {
  return (
    <div className='home'>
    <HeroSection/>
    <Clients/>
      <Category />
      <FeatureProduct/>
      <Banner />
    </div>
  )
}

export default Home