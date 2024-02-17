import { useContext, useEffect, useState } from "react";
import logo from "../assets/images/gameLogo.png";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiMoon } from "react-icons/hi2";
import { HiOutlineSun } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";

const Header = () => {
  // const [toggle, setToggle] = useState(false);
  const {theme,setTheme} = useContext(ThemeContext)

  useEffect(()=>{

  },[])
  return (
    <div className="flex items-center gap-2 p-3">
      <img src={logo} alt="logo" width={60} height={60} />
      <div className="flex bg-slate-200 p-2 w-full items-center gap-3 rounded-full">
        <HiMagnifyingGlass />

        <input
          type="text"
          className="bg-transparent outline-none w-full"
          placeholder="Search Games"
        />
      </div>
      <div>
        {theme=='light' ? (
          <HiMoon
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheme('dark');
              localStorage.setItem("theme",'dark')
            }}
          />
        ) : (
          <HiOutlineSun
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheme('light');
              localStorage.setItem("theme",'light')
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
