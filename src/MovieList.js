

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
                <li className='list-group-item' key={index}>
                    <a href={movie.imdbLink} rel='noreferrer' target='_blank'>{movie.name}</a>




                    <button btn btn-primary btn-sm
                    onClick={() => showDetails(movie.id)}>
                    Description
                    </button>
                </li>
                );
            })}

                </ul>
            </div>
        </div>
    );

};

export default MovieList

