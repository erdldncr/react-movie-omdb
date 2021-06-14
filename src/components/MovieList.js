import React from 'react'


export default function MovieList(props) {
    const FavoutiteComponent=props.favoruiteComponent
    const handleFavouritesClick=props.handleFavouritesClick
    return (
        <>
         {props.movies?.map((movie,idx)=>(
             <div  key={movie.idx} className="d-flex justify-content-start m-3 image-container">
                     <img src={movie.Poster} alt="moviePoster"/>
                 <div 
                 onClick={()=>handleFavouritesClick(movie)}
                 className="overlay d-flex align-items-center justify-content-center">
                   <FavoutiteComponent  />
                     </div>    
             </div>
         ))}   
        </>
    )
}
