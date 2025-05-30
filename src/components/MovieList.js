import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({title, movies}) => {
    console.log(movies);
    
  return (
    <div className='p-4 '>
        <div className='mb-3'>
            <h1 className='text-3xl '>{title}</h1>
        </div>
        <div className='flex overflow-x-scroll'>
          <div className='flex gap-2'>
              {movies && movies.map((movie) => <MovieCard key={movie.id} posterPath={movie.poster_path} />)} 
          </div>
        </div>
        
    </div>
  )
}

export default MovieList