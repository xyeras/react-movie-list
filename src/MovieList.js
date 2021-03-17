const MovieList = ({movies}) => {

    const showDetails = movieName => {
        
        let foundMovie = movies.find(movie => movie.name === movieName);

        if (!foundMovie) {
            alert(`Sorry! Could not find your movie!`);
        } else {
            alert(`${foundMovie.name}: ${foundMovie.description}`)
        }

    };

    return (
        <div className="container">
            <table class="table table-striped text-center">
                <thead>
                    <tr>
                        {/* <th scope="col">ID</th> */}
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Year</th>
                        <th scope="col">IMDb Rating</th>
                        <th scope="col">Poster</th>
                        <th scope="col">Details</th>
                    </tr>
                </thead>
                <tbody>

                    {movies.map ((movie,index) => {
                        return (
                        <tr>

                            {/* <th>#{movie.id}</th> */}

                            <th>
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
                        </tr>

                        );
                    })}
                    
                </tbody>
            </table>
        </div>
    );

};

export default MovieList

