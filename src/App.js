import './App.css';
import { Routes, Route } from 'react-router-dom';
import Catalogue from './Catalogue';
import MovieDetails from './MovieDetails';
import ErrorPage from './ErrorPage';

const App = () => {


  return (
    <div className="wrapper">
      <header>
        <h1>Hackflix</h1>
      </header>
      {/* Create paths allowing us to render different things on the url */}
      <Routes>
        {/* Show catalogue in default path */}
        <Route path="/" element={<Catalogue />} />
        {/* Show the MovieDetails component on /movie/:movieID, passing it the movie ID */}
        {/* Load /movies/movieID (where movie ID is the movie's ID) */}
        {/* Load a component that calls our API with the movie's ID to get details about that movie */}
        {/* Put those details on the page */}
        {/* The colon is crucial to signalling that the link will not be "movieID" but rather an ID that we will find. If we write /23423, then the /23423 becomes our movieID. If we use /6464 then the /6464 becomes our movieID */}
        <Route path="/movie/:movieID" element={<MovieDetails />} />
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

// On component mount (useEffect)...
  // Fetch list of popular movies for a specific year from TMDB API with Axios
  // Store those movies in state (useState)
  // Map through the movies state to render JSX with the movie posters (movie component?)