import React from 'react'
import { Outlet } from 'react-router-dom'
import something from '../assets/people.png'
import arrow from '../assets/arrow.png'

const Home = () => {
  return (
    <div>
      <div>
        <img className='homeimg' src={something} alt="people image" />
        <div className='home-intro'>
          <h3>
            Featured
          </h3>
          <h2>
          Breaking into Product Design:<br/>
          Advice from Untitled Founder, Frankie
          </h2>
          <p>
            Let`s get one thing out of the way:you don`t need a fancy<br/>
            Bachelor`s Degree to get into Product Design.We sat down<br/>
            with Frankie Sallivan to talk about gatekeeping in product<br/>
            design and who anyone can get into this growing industry.
          </p>
          <img className='arrowimg' src={arrow} alt="people image" />
        </div>
      </div>
      
    <Outlet />
    </div>
  )
}

export default Home