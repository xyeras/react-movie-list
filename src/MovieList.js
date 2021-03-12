const MovieList = ({movies}) => {

    const showDetails = movieId => {
        
        let foundMovie = movies.find(movie => movie.id === movieId);

        if (!foundMovie) {
            alert(`Sorry! Could not find your hero!`);
        } else {
            alert(`${foundMovie.description}`)
        }

    };

    return (
        <table class="table table-striped text-center">
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Year</th>
                    <th scope="col">Poster</th>
                    <th scope="col">Details</th>
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
                        
                        <td scope="row">{movie.genre}</td>
                        
                        <td scope="row">{movie.year}</td>
                        
                        <td scope="row">
                            <img src={movie.imageLink}></img>
                        </td>
                        
                        <td scope="row">
                            <button className="btn btn-primary btn-block" onClick={() => showDetails(movie.id)}>Description</button>
                        
                        </td>
                    </tr>

                    );
                })}
                
            </tbody>
        </table>
    );

};

export default MovieList

