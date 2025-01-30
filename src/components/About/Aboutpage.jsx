import React from 'react'
import About from '../Home/About'
import Features from '../Home/Features'
import Newsletter from '../Home/Newsletter'
import Ourparent from '../Home/Ourparent'
import Teacher from '../Home/Teacher'
import Aboutbreadcrums from './Aboutbreadcrums'

function Aboutpage() {
  return (
    <>
     <Aboutbreadcrums/> 
     <Features/>
     <About/>
     <Teacher/>
     <Ourparent/>
     <Newsletter/>
    </>
  )
}

export default Aboutpage
