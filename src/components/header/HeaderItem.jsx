const HeaderItem = ({ name, Icon }) => {
    return (
        <div class="text-white flex items-center gap-2 text-sm font-semibold">
            <Icon class="cursor-pointer h-4 w-4" />
            <h2 class="hidden md:block text-base cursor-pointer hover:underline underline-offset-8 duration-300">
                {name}
            </h2>
        </div>
    );
};

export default HeaderItem;
