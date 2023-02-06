import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Catalogue = () => {
    // Set up movie state
    const [movies, setMovies] = useState([]);

    // On component mount (useEffect)...
    useEffect(() => {
        // Fetch list of popular movies for a specific year from TMDB API with axios (npm install axios)
        axios({
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: 'de748f44776aa9557153ebe1c7ace565',
                language: 'en-US',
                sort_by: 'popularity.desc',
                include_adult: 'false',
                include_video: 'false',
                page: 1,
                primary_release_year: 2007,
            }
        }).then((response) => {
            setMovies(response.data.results);
        })
    }, [])
    return(
        // Map through the movies state to render JSX with the movie posters (movie component?) 
        <ul className="catalogue">
            {
                movies.map((movie) =>
                    // Using the ES6 function's implicit return here instead of the function block {}
                    <li key={movie.id}>
                        <Link to={`/movie/${movie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`Poster for ${movie.original_title}`} />
                        </Link>
                    </li>
                )
            }
        </ul>
    )
}

export default Catalogue;