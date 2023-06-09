const image = "https://image.tmdb.org/t/p/original";

const MovieCart = ({ movies }) => {
    return (
        <div>
            <img src={image + movies.poster_path} alt="banner" />
        </div>
    );
};

export default MovieCart;
