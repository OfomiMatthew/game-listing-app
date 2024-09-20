import { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

const Genre = ({genreId,selectedGenresName}) => {
  const [genre, setGenre] = useState([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const genreListing = () => {
    GlobalApi.getGenreList.then((res) => {
      setGenre(res.data.results);
      console.log(res.data.results);
    });
  };

  useEffect(() => {
    genreListing();
  }, []);
  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white">{selectedGenresName} Genre</h2>
      {genre.map((item, index) => {
        return (
          <div
            onClick={() => {
              
                setActiveIndex(index);
                genreId(item.id);
                selectedGenresName(item.name);

              
            }}
            key={item.id}
            className={`mb-3 flex items-center gap-3 hover:bg-gray-300 cursor-pointer p-3 rounded-lg hover:dark:bg-black group ${
              activeIndex == index ? "bg-gray-300 dark:bg-gray-600" : null
            }`}
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
