import React, { useEffect } from 'react'

const Banner = ({gameBanner}) => {

  useEffect(()=>{
    console.log(gameBanner)
  },[])
  return (
    <div className='ml-2 relative'>
    <div className='absolute bottom-5 p-5 '>
    <h2 className='text-[24px] font-bold dark:text-white rounded-lg p-2 mb-2'>{gameBanner.name}</h2>
    <button className='rounded-xl font-bold text-gray bg-white p-3'>Get Now</button>
    </div>
    <img src={gameBanner.background_image} alt="" className='md:h-[455px] w-full object-cover rounded-xl' />
    </div>
  )
}

export default Banner