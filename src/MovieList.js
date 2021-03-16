const MovieList = ({moviesData}) => {
  const showDetails = movieName => {
    let foundMovie = moviesData.find(movie => moviesData.name === movieName);
      if (!foundMovie) {
        alert(`Error`);
      } else {
        alert(`${foundMovie.name}: ${foundMovie.description}`)
      };
};

    const removeMovie = (movieName) => {
        let filteredMovies = moviesData.filter(movie => {
            return movie.name !== movieName;
        });
        moviesData = filteredMovies;
        console.log(moviesData);
    };


   return (
        <div className="container">
            <table className="table table-striped text-center">
                <thead>
                    <tr>
                        {/* <th scope="col">ID</th> */}
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

                    {moviesData.map ((movie,index) => {
                        return (
                        <tr>

                            {/* <th>{movie.id}</th> */}

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
                                <button className="btn btn-primary btn-block" onClick={() => showDetails(movie.name)}>Description</button>
                            </td>
                            
                            <td>
                                <button className="btn btn-primary btn-block" onClick={() => removeMovie(movie.name)}>Delete</button>
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