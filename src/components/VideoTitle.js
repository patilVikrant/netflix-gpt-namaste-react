import React from 'react'

const VideoTitle = ({title, overview}) => {

  return (
    <div className='w-screen aspect-video text-white bg-gradient-to-r from-black pt-[20%] px-12 absolute'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='text-lg py-6 w-1/3'>{overview}</p>
      <div>
        <button className='px-6 py-3 mr-1 bg-white text-xl text-black rounded-sm hover:bg-opacity-80'>  Play</button>
        <button className='px-6 py-3 ml-1 bg-gray-400 text-xl text-white rounded-sm bg-opacity-50'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
