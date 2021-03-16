import { useState } from 'react';

import MovieForm from './MovieForm'
import MovieList from './MovieList'
import './App.css';

const App = () => {

    const [movies, setMovies] = useState(moviesData);
    const [success, setSuccess] = useState(false);

    let title = `Welcome to our movie list!`

    const addNewMovie = movie => {

        setMovies([...movies, movie]);

        setSuccess(true);
        setTimeout(() => {
        setSuccess(false);
        }, 3000);

    }
  
    return (
        <div>
            <h1 className="display-4 text-center my-5">{title}</h1>

            <MovieForm addNewMovie={addNewMovie} />

            {success ? (
                <div className='row'>
                <div className='col-6 offset-3'>
                    <div class='alert alert-success text-center' role='alert'>
                    You've successfully added a new movie!
                    </div>
                </div>
                </div>
            ) : (
                ''
            )}

            <MovieList movies={movies}/>
        </div>
    );

}

let moviesData = [
  {
      id: 0,
      name: "Howl's Moving Castle",
      year: 2004,
      genre: 'Animation, Adventure, & Family',
      description: "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
      imdbRating: 8.2, 
      imageLink: 'https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0347149/?ref_=nv_sr_srsg_0'
  },
  {
      id: 1,
      name: "Spirited Away",
      year: 2001,
      genre: 'Animation, Adventure & Family',
      description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
      imdbRating: 8.6, 
      imageLink: 'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0245429/?ref_=fn_al_tt_1'
  },
  {
      id: 2,
      name: "Final Fantasy VII: Advent Children",
      year: 2005,
      genre: 'Animation, Action, & Adventure',
      description: "An ex-mercenary is forced out of isolation when three mysterious men kidnap and brainwash the city's children afflicted with the Geostigma disease.",
      imdbRating: 7.2, 
      imageLink: 'https://m.media-amazon.com/images/M/MV5BNTk4NjBhZTUtN2MwMy00MzIyLWFhN2ItMmUwYzQ4MWQxODM3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_UY268_CR3,0,182,268_AL_.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0385700/?ref_=nv_sr_srsg_3'
  },
  {
      id: 3,
      name: "Violet Evergarden: The Movie",
      year: 2020,
      genre: 'Animation, Drama, & Fantasy',
      description: "After the aftermath of a war, a young girl who was used as a 'tool' for war learned to live. With the scars of burns , she goes back to her past to feel the true feelings of the Major's ,'I love you.'",
      imdbRating: 8.3, 
      imageLink: 'https://m.media-amazon.com/images/M/MV5BYTJmNzc5YTEtNTBmNy00YmUxLWFlNzktYjZjMTg3OGY3ZDhkXkEyXkFqcGdeQXVyMzUzMzgxNA@@._V1_UY268_CR3,0,182,268_AL_.jpg',
      imdbLink: 'https://www.imdb.com/title/tt8652818/?ref_=nv_sr_srsg_3'
  },
  {
      id: 4,
      name: "Hetalia: Axis Powers - Paint It, White!",
      year: 2010,
      genre: 'Animation, Adventure, & Comedy',
      description: "The Axis Powers must band together to save the world from aliens who are painting everything white.",
      imdbRating: 6.6, 
      imageLink: 'https://m.media-amazon.com/images/M/MV5BMDAxNDg4MzEtZGU3ZS00ZDQyLTg3OGEtMDk4MzNhMDZjZjg2XkEyXkFqcGdeQXVyNjY5MDk4NDI@._V1_UY268_CR3,0,182,268_AL_.jpg',
      imdbLink: 'https://www.imdb.com/title/tt2653882/?ref_=nv_sr_srsg_3'
  },
  {
    id: 5,
    name: 'Godzilla',
    year: '2014',
    genre: 'Action, Adventure, & Sci-Fi', 
    description: 'The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity.',
    imdbRating: 6.4,
    imageLink: 'https://m.media-amazon.com/images/M/MV5BZDFmYTM4NzAtNWM0ZC00MGJlLWEyYzQtYzA3ZTFiNzc1YjllXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_UX182_CR0,0,182,268_AL_.jpg',
    imdbLink: 'https://www.imdb.com/title/tt0831387/?ref_=fn_al_tt_1'
},
{
    id: 6,
    name: 'Pacific Rim',
    year: '2013',
    genre: 'Action, Adventure, & Sci-Fi', 
    description: 'As a war between humankind and monstrous sea creatures wages on, a former pilot and a trainee are paired up to drive a seemingly obsolete special weapon in a desperate effort to save the world from the apocalypse.',
    imdbRating: 6.9,
    imageLink: 'https://m.media-amazon.com/images/M/MV5BMTY3MTI5NjQ4Nl5BMl5BanBnXkFtZTcwOTU1OTU0OQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    imdbLink: 'https://www.imdb.com/title/tt1663662/?ref_=rvi_tt'
},
{
    id: 7,
    name: 'Avengers: Endgame',
    year: '2019',
    genre: 'Action, Adventure, & Drama', 
    description: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe.',
    imdbRating: 8.4,
    imageLink: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
    imdbLink: 'https://www.imdb.com/title/tt4154796/?ref_=rvi_tt'
},
{
    id: 8,  
    name: 'Star Trek: Into Darkness',
    year: '2013',
    genre: 'Action, Adventure, & Sci-Fi', 
    description: 'After the crew of the Enterprise find an unstoppable force of terror from within their own organization, Captain Kirk leads a manhunt to a war-zone world to capture a one-man weapon of mass destruction.',
    imdbRating: 7.7,
    imageLink: 'https://m.media-amazon.com/images/M/MV5BMTk2NzczOTgxNF5BMl5BanBnXkFtZTcwODQ5ODczOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    imdbLink: 'https://www.imdb.com/title/tt1408101/?ref_=rvi_tt'
},
{
    id: 9,
    name: 'The Nightmare Before Christmas',
    year: '1993',
    genre: 'Animation, Family, & Fantasy', 
    description: 'Jack Skellington, king of Halloween Town, discovers Christmas Town, but his attempts to bring Christmas to his home causes confusion.',
    imdbRating: 8.0,
    imageLink: 'https://m.media-amazon.com/images/M/MV5BNWE4OTNiM2ItMjY4Ni00ZTViLWFiZmEtZGEyNGY2ZmNlMzIyXkEyXkFqcGdeQXVyMDU5NDcxNw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    imdbLink: 'https://www.imdb.com/title/tt0107688/?ref_=rvi_tt'
},
];

export default App;
