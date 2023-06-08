import Genres from "../constant/Genres";
import Movies from "./Movies";

const GenreMovie = () => {
    return (
        <div>
            {Genres.genre.map(
                (item, index) =>
                    index <= 4 && (
                        <div className="p-8 px-8 md:px-16">
                            <h2 className="text-[20px] text-white font-bold">
                                {item.name}
                            </h2>

                            <Movies id={item.id} />
                        </div>
                    )
            )}
        </div>
    );
};

export default GenreMovie;
