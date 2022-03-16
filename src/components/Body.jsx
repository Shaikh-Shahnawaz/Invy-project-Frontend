import React from 'react'
import styles from '../css/body.module.css'
import Banner from './body-components/Banner'
import MultipleCard from './body-components/MultipleCard'
import ReviewCard from './body-components/ReviewCard'
import TwoCard from './body-components/TwoCard'
const Body = () => {
  return (
    <>
    <Banner/>
    <TwoCard/>
    <MultipleCard/>
    <ReviewCard/>
    </>
  )
}

export default Body