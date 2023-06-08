import disney from "../assets/image/disney.png";
import pixer from "../assets/image/pixar.png";
import nationalG from "../assets/image/nationalG.png";
import starWar from "../assets/image/starWar.png";
import marvel from "../assets/image/marvel.png";

import disneyVideo from "../assets/video/disney.mp4";
import pixerVideo from "../assets/video/pixar.mp4";
import nationalGVideo from "../assets/video/national-geographic.mp4";
import starWarVideo from "../assets/video/star-wars.mp4";
import marvelVideo from "../assets/video/marvel.mp4";

const Production = () => {
    const productList = [
        {
            id: 1,
            image: disney,
            video: disneyVideo,
        },
        {
            id: 2,
            image: pixer,
            video: pixerVideo,
        },
        {
            id: 3,
            image: nationalG,
            video: nationalGVideo,
        },
        {
            id: 4,
            image: starWar,
            video: starWarVideo,
        },
        {
            id: 5,
            image: marvel,
            video: marvelVideo,
        },
    ];

    return (
        <>
            <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
                {productList.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-lg shadow-gray-800"
                        >
                            <video
                                src={item.video}
                                autoPlay
                                loop
                                playsInline
                                muted
                                className="absolute z-0 top-0 rounded-md opacity-0 hover:opacity-50"
                            />

                            <img
                                src={item.image}
                                alt="image"
                                className="w-full z-[1] opacity-100"
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Production;
