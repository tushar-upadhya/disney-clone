import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const KEY = "0edcb55da40f8f65f8ee494d59b40aea";

const fetchTrendingVideos = async () => {
    try {
        const response = await axios.get(
            `${URL}/trending/all/day?api_key=${KEY}`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching trending videos:", error);
        return null;
    }
};

export default {
    fetchTrendingVideos,
};
