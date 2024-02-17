import axios from "axios";

const key = "73cb0d77918d4638864b3ca75c0c4a40";

const axiosApi = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosApi.get("/genres?key=" + key);
export default {
  getGenreList,
};
