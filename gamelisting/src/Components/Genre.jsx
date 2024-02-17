import { useEffect } from "react";
import GlobalApi from "../Services/GlobalApi";

const Genre = () => {
  const genreList = () => {
    GlobalApi.getGenreList.then((res) => {
      console.log(res.data. results);
    });
  };

  useEffect(() => {
    genreList();
  }, []);
  return <div>Genre</div>;
};

export default Genre;
