import { useEffect, useState } from "react";
import { getGenreById } from "../api/api";

import MovieCart from "./MovieCart";
import HrMovieCard from "./HrMovieCard";

const Movies = ({ id, index_ }) => {
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
        <div className="flex overflow-x-auto gap-8 scrollbar-none pt-5 px-3 pb-10">
            {movies.map((item, index) => (
                <>
                    {index_ % 3 == 0 ? (
                        <HrMovieCard movies={item} />
                    ) : (
                        <MovieCart movies={item} />
                    )}
                </>
            ))}
        </div>
    );
};

export default Movies;
