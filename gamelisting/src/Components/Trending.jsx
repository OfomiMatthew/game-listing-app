import { useEffect } from "react";

const Trending = ({ gameList }) => {
  useEffect(() => {
    console.log(gameList);
  }, []);
  return (
    <div className="mt-5  dark:text-white p-5">
    <h2 className="text-[30px] font-bold">Trending Games</h2>
    <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7 ">
      {gameList.map(
        (game, index) =>
          index < 4 && (
            <div key={index} className=" bg-gray-600 rounded-xl p-2 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
              <img src={game.background_image} className="h-[270px] rounded-lg object-cover" />
              <h2 className="text-center darK:text-white font-bold">{game.name}</h2>
            </div>
          )
      )}
    </div>
    </div>
  );
};

export default Trending;
