import { useEffect } from "react";
import Genre from "../Components/Genre";
import GlobalApi from "../Services/GlobalApi";

const Home = () => {
  const getAllGames = () => {
    GlobalApi.getAllGames.then((res) => {
      console.log(res.data);
    });
  };

  useEffect(()=>{
    getAllGames()
  },[])
  return (
    <div className="grid grid-cols-4 px-5">
      <div className="hidden md:block">
        <Genre />
      </div>

      <div className="col-span-4 md:col-span-3 bg-blue-400  ">Game List</div>
    </div>
  );
};

export default Home;
