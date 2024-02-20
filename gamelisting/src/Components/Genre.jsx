import { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

const Genre = () => {
  const [genre, setGenre] = useState([]);
  const [activeIndex,setActiveIndex] = useState(0)
  const genreList = () => {
    GlobalApi.getGenreList.then((res) => {
      setGenre(res.data.results);
      console.log(res.data.results);
    });
  };

  useEffect(() => {
    genreList();
  }, []);
  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white">Genre</h2>
      {genre.map((item,index) => {
        return (
          <div
            key={item.id}
            className="mb-3 flex items-center gap-3 hover:bg-gray-300 cursor-pointer p-3 rounded-lg hover:dark:bg-black group"
          >
            <img
              src={item.image_background}
              alt=""
              className="w-[50px] h-[50px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300"
            />
            <h3 className="text-[16px] font-semibold dark:text-white group-hover:scale-105 transition-all ease-out duration-300">
              {item.name}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default Genre;
