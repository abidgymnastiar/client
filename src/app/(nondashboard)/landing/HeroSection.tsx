import React from 'react'
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative h-screen">
        <Image src="/landing-splash.jpg" alt='' fill className='object-cover object-center' priority/>
    </div>
  )
}

export default HeroSection