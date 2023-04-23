import React from 'react'
import heroImage from '../assets/Layer 2.png'

export default function Hero() {
  return (
    <div className='hero'>
        <div className='hero-left'>
        <h1 className='heading'>
            Exchange Energy Effeciently
        </h1>
        <p>A better and unique way to exchange enery for a better future</p>
        <button className='metamask-connect heroButton'>Trade Now</button>
        </div>
        <img className='heroImage' src={heroImage} alt="" />
    </div>
  )
}
