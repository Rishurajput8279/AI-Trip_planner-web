import React from 'react'
import { Button } from '../button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-7'>
        <h1
        className='font-extrabold text-[28px] text-center mt-16'>
            <span className='text-[#f56551]'>Discover Your New Adventure with AI:</span> Personalized Itineraries at your Fingertips          
        </h1>
        <p className='text-sm text-gray-500 text-center'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget</p>
        <Link to={'/create-trip'}>
                <Button className="z-10 relative">Get Started, It's Free</Button>
        </Link>

        <img src="/Landing1.png" alt="" className='-mt-20'/>
    </div>
  )
}

export default Hero