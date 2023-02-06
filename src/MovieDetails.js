import { useState, useEffect } from "react";
import axios from "axios";
// allows component to access the param it was passed
import { useParams, Link } from "react-router-dom";

const MovieDetails = () => {
    // store the param in a variable
    const { movieID } = useParams();
    // create state to store movie details
    const [movie, setMovie] = useState({});
    // on component mount...
    useEffect(() => {
        // make axios api call to get movie details using movieID param
        axios({
            url: `https://api.themoviedb.org/3/movie/${movieID}`,
            params: {
                api_key: 'de748f44776aa9557153ebe1c7ace565'
            }
        }).then( (response) => {
            setMovie(response.data);
        })
    }, []);

    const { original_title, tagline, overview, poster_path} = movie;

    return (
        <>
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
            <Link to={'/'}>
                <h2>back...</h2>
            </Link>
        </>
    )   
}

export default MovieDetails;