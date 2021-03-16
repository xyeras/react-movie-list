import { useState } from 'react';

const MovieList = ({movies}) => {
  const showDetails = movieId => {
    let foundMovie = movies.find(movie => movie.id === movieId);
      if (!foundMovie) {
        alert(`Error`);
      } else {
        alert(`${foundMovie.name}: ${foundMovie.description}`)
      };
};

const removeMovie = (showId) => {
    movies.splice(showId, 1);
    console.log(movies)
};


   return (
        <div className="container">
            <table className="table table-striped text-center">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Year</th>
                        <th scope="col">IMDb Rating</th>
                        <th scope="col">Poster</th>
                        <th scope="col">Details</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {movies.map ((movie,index) => {
                        return (
                        <tr>
                            <th scope="row">
                                <a href={movie.imdbLink} rel='noreferrer' target='_blank'>
                                    {movie.name}
                                </a>
                            </th>
                            
                            <td>{movie.genre}</td>
                            
                            <td>{movie.year}</td>

                            <td>{movie.imdbRating}</td>
                            
                            <td>
                                <img src={movie.imageLink} alt="movie poster"></img>
                            </td>
                            
                            <td>
                                <button className="btn btn-primary btn-block" onClick={() => showDetails(movie.id)}>Description</button>
                            </td>
                            
                            <td>
                                <button className="btn btn-primary btn-block" onClick={() => removeMovie()}>Delete</button>
                            </td>
                        </tr>

                        );
                    })}
                    
                </tbody>
            </table>
        </div>
    );
};                


export default MovieList