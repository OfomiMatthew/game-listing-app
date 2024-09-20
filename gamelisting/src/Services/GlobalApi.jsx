import axios from "axios";

const key = "73cb0d77918d4638864b3ca75c0c4a40";

const axiosApi = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosApi.get("/genres?key=" + key);
const getAllGames = axiosApi.get("/games?key="+key)
const getGameListByGenreId = (id)=>axiosApi.get('/games?key='+key+'&genres='+id)
export default {
  getGenreList,
  getAllGames,
  getGameListByGenreId,
};
