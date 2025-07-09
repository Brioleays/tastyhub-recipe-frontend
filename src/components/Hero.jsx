import React from 'react'

const Hero = () => {
  return (
    <div className='container flex justify-between items-center px-8 py-16 bg-background'>
        <div className=' gap-6 w-1/2 '>
            <h1 className='text-primary text-6xl font-extrabold my-6'>Healthy eating <br /> made easy</h1>
            <p className='text-secondary text-sm mb-10'>Discover delicious and nutritious recipes that will help you eat healthy without sacrificing flavor.</p>
            <button className="bg-accent px-4 py-2 rounded-md text-white">Get Started</button>
        </div>
        <div>

            <img src="https://placehold.co/400" alt="" srcset="" className='' />
        </div>
    </div>
  )
}

export default Hero