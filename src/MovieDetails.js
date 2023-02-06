import axios from "axios";
import { useEffect, useState } from "react";
// Allow the component to access the param it was passed
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const MovieDetails = () => {
  // Store the param in a variable ({} around movieID is destructuring becuase there could be more than one Param)
  const { movieID } = useParams();
  // Create state to store our movie details
  const [movie, setMovie] = useState({});
  // On component mount...
  useEffect(() => {
    axios({
      url: `https://api.themoviedb.org/3/movie/${movieID}`,
      params: {
        api_key: 'aaffc5a6b929641c415807c6f0cdcbc9'
      }
    }).then((res) => {
      // console.log(res.data);
      setMovie(res.data);
    })
  }, [movieID]);
  // Make an axios call to get movie details using the movieID param
  // Set Details to State

  const { original_title, tagline, overview, poster_path } = movie;

  // put the moveID on the page
  return (
    <>
        <Link to={'/'}>
          <h2>Back...</h2>
        </Link>
      <div className="poster">
        <div className="description">
          <h2>{original_title}</h2>
          <h3>{tagline}</h3>
          <p>{overview}</p>
        </div>
        <div className="poster-image">
          <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={`Poster for ${original_title}`} />
        </div>
      </div>
    </>
  )
}

export default MovieDetails;