import { useState } from 'react'

const MovieForm = ({ addNewMovie }) => {
  // initialize my variable and state hooks first
  const [movieId, setMovieId] = useState(9);
  const [movieName, setMovieName] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [movieGenre, setMovieGenre] = useState('');
  const [movieDescription, setMovieDescription] = useState('');
  const [movieImageLink, setMovieImageLink] = useState('');
  const [movieImdbRating, setMovieImdbRating] = useState('');
  const [movieImdbLink, setMovieImdbLink] = useState('');

  // initialize my functions
  const handleSubmit = event => {
    event.preventDefault();
    // debugger;

    let newMovie = {
      // id: movieId,
      name: movieName,
      year: movieYear,
      genre: movieGenre,
      description: movieDescription,
      imageLink: movieImageLink,
      imdbRating: movieImdbRating,
      imdbLink: movieImdbLink
    };
    console.log(newMovie);
    addNewMovie(newMovie);
    clearForm();
  };

  const clearForm = () => {
    // setMovieId(0);
    setMovieName('');
    setMovieYear(1000);
    setMovieGenre('');
    setMovieDescription('');
    setMovieImdbRating(0.0);
    setMovieImageLink('');
    setMovieImdbLink('');
  };

  return (
    <div className='row mb-5'>
      <div className='col-6 offset-3'>

        <form action='submit' id='hero-form' onSubmit={handleSubmit}>

          <div className='form-group'>
            <label htmlFor='movieName'>Movie Name</label>
            <input
              type='text'
              id='movieName'
              className='form-control'
              value={movieName}
              onChange={event => {
                setMovieName(event.target.value);
              }}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='movieYear'>Year</label>
            <input
              type='number'
              className='form-control'
              id='movieYear'
              value={movieYear}
              onChange={event => {
                setMovieYear(event.target.value);
              }}
            />
          </div>

        <div className='form-group'>
            <label htmlFor='movieGenre'>Genre</label>
            <input
            type='text'
            id='movieGenre'
            className='form-control'
            value={movieGenre}
            onChange={event => {
                setMovieGenre(event.target.value);
            }}
            />
        </div>

        <div className='form-group'>
            <label htmlFor='movieDescription'>Description</label>
            <input
            type='text'
            className='form-control'
            id='movieDescription'
            value={movieDescription}
            onChange={event => {
                setMovieDescription(event.target.value);
            }}
            />
        </div>

        <div className='form-group'>
            <label htmlFor='imdbRating'>IMDb Rating</label>
            <input
            type='number'
            className='form-control'
            id='imdbRating'
            value={movieImdbRating}
            onChange={event => {
                setMovieImdbRating(event.target.value);
            }}
            />
        </div>

        <div className='form-group'>
            <label htmlFor='movieImageLink'>Poster Link</label>
            <input
            type='text'
            className='form-control'
            id='movieImageLink'
            value={movieImageLink}
            onChange={event => {
                setMovieImageLink(event.target.value);
            }}
            />
        </div>

        <div className='form-group'>
            <label htmlFor='movieImdbLink'>IMDb Link</label>
            <input
            type='text'
            className='form-control'
            id='movieImdbLink'
            value={movieImdbLink}
            onChange={event => {
                setMovieImdbLink(event.target.value);
            }}
            />
        </div>

          <button className='btn btn-primary btn-block'>Save</button>
        </form>
      </div>
    </div>
  );
};

export default MovieForm;