import React from 'react'
import About from './About'
import Banner from './Banner'
import Features from './Features'
import Newsletter from './Newsletter'
import Ourparent from './Ourparent'
import Popularclass from './Popularclass'
import Teacher from './Teacher'

function Home() {
  return (
    <>
      <Banner />
      <Features/>
      <About/>
      <Popularclass/>
      <Teacher/>
      <Ourparent/>
      <Newsletter/>
    </>
  )
}

export default Home
