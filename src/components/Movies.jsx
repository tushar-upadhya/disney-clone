import { useEffect } from "react";
import api from "../api/api";

const Movies = ({ id }) => {
    useEffect(() => {
        movieByGenreId();
    });

    const movieByGenreId = () => {
        api.getGenreById(id).then((response) => {
            console.log("response:", response.data.results);
        });
    };

    return <div>Movies</div>;
};

export default Movies;
