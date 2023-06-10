const image = "https://image.tmdb.org/t/p/original";

const HrMovieCard = ({ movies }) => {
    return (
        <section>
            <img
                src={image + movies.backdrop_path}
                alt="banner"
                className="w-[110px] cursor-pointer shadow-lg shadow-slate-900  md:w-[220px] rounded-l hover:border-[3px] border-gray-400 hover:scale-110 transition-all  ease-in "
            />
            <h2>{movies.title}</h2>
        </section>
    );
};

export default HrMovieCard;
