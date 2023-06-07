import disney from "../assets/disney.png";
import pixer from "../assets/pixar.png";
import national from "../assets/nationalG.png";
import startwar from "../assets/starword.png";
import marvel from "../assets/Marvel Studios-Logo-PNG6.png";

const Production = () => {
    const productList = [
        {
            id: 1,
            image: disney,
        },
        {
            id: 2,
            image: pixer,
        },
        {
            id: 3,
            image: national,
        },
        {
            id: 4,
            image: startwar,
        },
        {
            id: 5,
            image: marvel,
        },
    ];

    return (
        <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
            {productList.map((item) => (
                <div className="border-[2px] border-gray-500 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
                    <img src={item.image} alt="banner" className="w-full " />
                </div>
            ))}
        </div>
    );
};

export default Production;
