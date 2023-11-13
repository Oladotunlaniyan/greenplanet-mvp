import React from 'react'
import {Link} from 'react-router-dom'
import Image from '../assets/images/home-img.png'

const MainHeader = () => {
  return (
    <header className='main__header'>
        <div className="container main_header-container">
          <div className="main_header-left">
            <h4>#100daysofcleaning</h4>
            <h1>Join the heroes of the environment</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              In, aut aliquid eligendi accusantium quidem earum?
            </p>
          <Link to= '/explore' className='btn lg'>Get Started </Link>
          </div>
          <div className="main_header-right">
            <div className="main_header-circle">
              <div className="main_header-image">
              <img src={Image} alt="header image" />
              </div>
            </div>
          </div>
        </div>
    </header>
  )
}

export default MainHeader
