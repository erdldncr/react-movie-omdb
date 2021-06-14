import React from 'react'

export default function MovieList({movies}) {
    return (
        <>
         {movies.map(movie=>(
             <div className="d-flex justify-content-start m-3">
                     <img src={movie.Poster} alt="moviePoster"/>
             </div>
         ))}   
        </>
    )
}
