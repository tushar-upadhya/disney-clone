import React, { useEffect, useRef, useState } from "react";

import { fetchTrendingVideos } from "../api/api";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const image = "https://image.tmdb.org/t/p/original";

const screenWidth = window.innerWidth;

const Slider = () => {
    const [movieList, setMovieList] = useState([]);

    const ref = useRef();

    const getTrendingMovie = async () => {
        try {
            const response = await fetchTrendingVideos();
            console.log("response:", response.data.results);
            setMovieList(response.data.results);
        } catch (error) {
            console.error("Error fetching trending movies:", error);
            setMovieList([]);
        }
    };

    useEffect(() => {
        getTrendingMovie();
    }, []);

    const right = (e) => {
        e.scrollLeft += screenWidth - 110;
    };
    const left = (e) => {
        e.scrollLeft -= screenWidth - 110;
    };

    return (
        <div>
            <HiChevronLeft
                className="hidden md:block  text-white  test-[30px] bg-transparent absolute mx-8 mt-[150px] cursor-pointer"
                onClick={() => left(ref.current)}
            />
            <HiChevronRight
                className="hidden md:block text-white test-[30px] bg-transparent absolute mx-8 mt-[150px] cursor-pointer right-0"
                onClick={() => right(ref.current)}
            />

            <div
                className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth
                "
                ref={ref}
            >
                {movieList.map((item, index) => (
                    <img
                        key={index}
                        src={image + item.backdrop_path}
                        alt={`Movie ${index}`}
                        className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[3px] border-gray-100 transition-all duration-100 ease-in"
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
