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
            video: disneyVideo,
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

    return <></>;
};

export default Production;
