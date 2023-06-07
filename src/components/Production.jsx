import disney from "../assets/disney.png";
import pixer from "../assets/pixer.png";
import national from "../assets/nationalG.png";
import startwar from "../assets/starword.png";
import marvel from "../assets/marvel.png";

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
        <div className="flex justify-center gap-2 md:gap-5 px-5 md:px-16">
            {productList.map((item) => (
                <div
                    key={item.id}
                    className="border-[2px] border-gray-500 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-xl shadow-gray-900"
                >
                    <img src={item.image} alt="banner" className="w-full" />
                </div>
            ))}
        </div>
    );
};

export default Production;
