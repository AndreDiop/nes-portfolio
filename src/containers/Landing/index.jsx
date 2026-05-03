import React from 'react'
import Andre from '../../assets/andreFull.png'
import Start from '../../assets/pressStart.png'
import '../Landing/styles.css'

const Landing = () => {
  return (
    <div id="bg">
      <div className='nes-container is-rounded' id='landingLogoContainer'>
        <p className='nes-balloon nes-pointer' id='logoBalloon'>
          <img
            src={Andre}
            id='landingLogo'
            alt='Andre Diop software developer stylized in 8-bit'
          />
          <section />
          <a href="#about">
            <img src={Start} id='pressStart' alt='Press start' />
          </a>
        </p>
      </div>
    </div>
  )
}

export default Landing
