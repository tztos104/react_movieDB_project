import axios from "axios";

const instance = axios.create({
    baseURL:  "https://api.themoviedb.org/3",
    params: {
        api_key: "b8b005da7e1eeededcc24f29d83564ac",
        language: "ko-KR"
    }
});

export default instance;