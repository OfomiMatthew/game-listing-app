import { useEffect, useState } from "react";
import Genre from "../Components/Genre";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Components/Banner";
import Trending from "../Components/Trending";
import GenreId from "../Components/GenreId";

const Home = () => {
  const [allGames, setAllGames] = useState([]);
  const [gameListByGenres,setGameListByGenres] = useState([])
const [selectedGenresName,setSelectedGenresName]=useState('Action');
  useEffect(() => {
    getAllGames();
    getGameListByGenresId(4);
  }, []);

  const getAllGames = () => {
    GlobalApi.getAllGames.then((res) => {
      console.log(res.data.results);
      setAllGames(res.data.results);
    });
  };

const getGameListByGenresId =(id)=>{
 
  GlobalApi.getGameListByGenreId(id).then((resp)=>{
   
 setGameListByGenres(resp.data.results)
  })
}

  return (
    <div className="grid grid-cols-4 px-5">
      <div className="hidden md:block">
        <Genre genreId={(genreId)=>getGameListByGenresId(genreId)} selectedGenresName={(name)=>setSelectedGenresName(name)}/>
      </div>

      <div className="col-span-4 md:col-span-3">
        {allGames.length > 0 ? (
          <div>
            <Banner gameBanner={allGames[0]} />
            <Trending gameList={allGames} />
            <GenreId gameList={allGames} selectedGenresName={selectedGenresName} />
          </div>
        ) : null}
        <div>{}</div>
      </div>
    </div>
  );
};

export default Home;
