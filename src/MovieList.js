

const MovieList = ({movies}) => {

    const showDetails = movieId => {
        movies.find(movie => movie.id === movieId);

        if (!foundMovie) {
            alert(`Sorry! Could not find your hero!`);
        } else {
            alert(`${foundMovie}: ${foundMovie.description}`)
        }

    };

    return (
        <div className="row">
            <div className="col-6 offset-3">
                <ul className='list-group'>
                    
                    {movies.map((hero, index) => {
                        return (
                        <li className='list-group-item' key={index}>
                            <a
                            href='javascript:void(0)'
                            onClick={() => showDetails(movie.id)}>
                            {movie.name}
                            </a>
                        </li>
                        );
                    })}

                </ul>
            </div>
        </div>
    );

};

