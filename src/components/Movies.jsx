import { useEffect } from "react";
import { getGenreById } from "../api/api";

const Movies = ({ id }) => {
    useEffect(() => {
        movieByGenreId();
    }, []);

    const movieByGenreId = () => {
        getGenreById(id).then((response) => {
            console.log("response:", response.data.results);
        });
    };

    return <div>Movies</div>;
};

export default Movies;
