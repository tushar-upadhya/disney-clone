import { useEffect, useState } from "react";
import { getGenreById } from "../api/api";

import MovieCart from "./header/MovieCart";

const Movies = ({ id }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        movieByGenreId();
    }, []);

    const movieByGenreId = () => {
        getGenreById(id).then((response) => {
            // console.log("response:", response.data.results);
            setMovies(response.data.results);
        });
    };

    return (
        <div>
            {movies.map((item, index) => (
                <MovieCart movies={item} />
            ))}
        </div>
    );
};

export default Movies;
