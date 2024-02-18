import Genre from "../Components/Genre";

const Home = () => {
  return (
    <div className="grid grid-cols-4 px-5">
      <div className="hidden md:block">
        <Genre />
      </div>
      <div className="col-span-4 md:col-span-3 bg-blue-400">Game List</div>
    </div>
  );
};

export default Home;
