import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-40 h-44'>
        <img className='w-full h-full rounded-md' src={`${IMG_CDN_URL}${posterPath}`} alt="movie-poster" />
    </div>
  )
}

export default MovieCard