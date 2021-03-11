
let movies = [
    {
        id: 0,
        name: "Howl's Moving Castle",
        year: 2004,
        genre: ['Animation', 'Adventure', 'Family'],
        description: "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
        imdbRating: 8.2
    },
    {
        id: 1,
        name: "Spirited Away",
        year: 2001,
        genre: ['Animation', 'Adventure', 'Family'],
        description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
        imdbRating: 8.6
    },
    {
        id: 2,
        name: "Final Fantasy VII: Advent Children",
        year: 2005,
        genre: ['Animation', 'Action', 'Adventure'],
        description: "An ex-mercenary is forced out of isolation when three mysterious men kidnap and brainwash the city's children afflicted with the Geostigma disease.",
        imdbRating: 7.2
    },
    {
        id: 3,
        name: "Violet Evergarden: The Movie",
        year: 2020,
        genre: ['Animation', 'Drama', 'Fantasy'],
        description: "After the aftermath of a war, a young girl who was used as a 'tool' for war learned to live. With the scars of burns , she goes back to her past to feel the true feelings of the Major's ,'I love you.'",
        imdbRating: 8.3
    },
    {
        id: 4,
        name: "Hetalia: Axis Powers - Paint It, White!",
        year: 2010,
        genre: ['Animation, Adventure, Comedy'],
        description: "The Axis Powers must band together to save the world from aliens who are painting everything white.",
        imdbRating: 6.6
    }
];

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

