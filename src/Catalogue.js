import axios from "axios";
import { useEffect, useState } from "react";
// import the Link component to allow us to build out new Links
import { Link } from "react-router-dom";

const Catalogue = () => {

  // Set up movie state
  const [movies, setMovies] = useState([]);

  // aaffc5a6b929641c415807c6f0cdcbc9

  // On component mount (useEffect)...
  useEffect(() => {
    // Fetch list of popular movies for a specific year from TMDB API with Axios
    axios({
      url: 'https://api.themoviedb.org/3/discover/movie',
      params: {
        api_key: 'aaffc5a6b929641c415807c6f0cdcbc9',
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_adult: 'false',
        include_video: 'false',
        page: 1,
        primary_release_year: 1989,
      }
    }).then((res) => {
      console.log(res.data.results);
      // Store those movies in state (useState)
      setMovies(res.data.results);
    })

  }, []);


  return (
    // Map through the movies state to render JSX with the movie posters (movie component?)
    <ul className='catalogue'>
      {
        movies.map((movie) =>
          // We are using the ES6 function's implicit return here instead of the typical function block (ie. "return ()")
          <li key={movie.id}>
            {/* Link is a similar process to adding an anchor tag around an image in regular html. */}
            <Link to={`/movie/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`Poster for ${movie.original_title}`} />
            </Link>
          </li>
        )
      }
    </ul >
  )


}

export default Catalogue;