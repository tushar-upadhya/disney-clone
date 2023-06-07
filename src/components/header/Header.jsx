import logo from "../../assets/disney.png";
import user from "../../assets/user.jpg";

import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv,
} from "react-icons/hi2";

import { HiPlus, HiDotsVertical } from "react-icons/hi";

import HeaderItem from "./HeaderItem";

const Header = () => {
    const menu = [
        {
            name: "HOME",
            icon: HiHome,
        },
        {
            name: "SEARCH",
            icon: HiMagnifyingGlass,
        },
        {
            name: "WATCH LIST",
            icon: HiPlus,
        },
        {
            name: "ORIGINALS",
            icon: HiStar,
        },
        {
            name: "MOVIES",
            icon: HiPlayCircle,
        },
        {
            name: "SERIES",
            icon: HiTv,
        },
    ];

    return (
        <div class="flex items-center justify-between p-5 ">
            <div class="flex gap-8 items-center">
                <img
                    class="w-20 md:w-32 object-cover hidden sm:block "
                    src={logo}
                    alt="logo"
                />
                {menu.map((item) => (
                    <HeaderItem name={item.name} Icon={item.icon} />
                ))}
            </div>
            <img src={user} alt="user_image" class="w-10 rounded-full " />
        </div>
    );
};
export default Header;
