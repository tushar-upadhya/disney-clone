import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const KEY = "0edcb55da40f8f65f8ee494d59b40aea";

const Genre_URL =
    "https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf";

const fetchTrendingVideos = axios.get(URL + "/trending/all/day?api_key=" + KEY);
const GenreId = (id) => axios.get(Genre_URL + "&with_genres=" + id);

export default {
    fetchTrendingVideos,
    GenreId,
};
