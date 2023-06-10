const image = "https://image.tmdb.org/t/p/original";

const MovieCart = ({ movies }) => {
    return (
        <>
            <img
                src={image + movies.poster_path}
                alt="banner"
                className="w-[110px] cursor-pointer shadow-lg shadow-slate-900  md:w-[220px] rounded-l hover:border-[3px] border-gray-400 hover:scale-110 transition-all  ease-in "
            />
        </>
    );
};

export default MovieCart;
