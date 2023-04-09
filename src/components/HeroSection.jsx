import React from 'react'

const HeroSection = () => {
  return (
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="font-Gothic sm:text-5xl text-3xl mb-4 font-bold text-gray-900">Decentralized Marketplace for
        <br className="hidden lg:inline-block"/>Digital Assets
      </h1>
      <p className=" font-Roboto mb-8 leading-relaxed">Bleach Vault is the platform where you can sell,buy or share digital assets. Your intellectual property Your price!!</p>
      <div className="flex justify-center">
        <button className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Explore Now</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      
    </div>
  </div>

  )
}

export default HeroSection