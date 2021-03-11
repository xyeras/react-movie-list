const MovieList = ({movies}) => {

    const showDetails = movieId => {
        
        let foundMovie = movies.find(movie => movie.id === movieId);

        if (!foundMovie) {
            alert(`Sorry! Could not find your hero!`);
        } else {
            alert(`${foundMovie.name}: ${foundMovie.description}`)
        }

    };

    return (
        <div className="row">
            <div className="col-6 offset-3">
                <ul className='list-group'>
                    
            {movies.map((movie, index) => {
                return (
                <li className='list-group-item text-center' key={index}>
                    <a
                    href='javascript:void(0)'
                    onClick={() => showDetails(movie.id)}>
                    {movie.name}
                    </a><br></br>
                    {movie.genre}<br></br>
                    {movie.year}<br></br>
                    {movie.description}<br></br>
                    <img src={movie.imageLink}></img>
                </li>
                );
            })}

                </ul>
            </div>
        </div>
    );

};

export default MovieList

