import React from "react";
import { useLinks, useSideHeader } from "../../Hooks/uiStore";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../../assets/frontend_assets/assets";
import SideBar from "../SideBar/SideBar";
import Agencies from "./Agencies";

export default function Header() {
  const { links, setLinks } = useLinks();
  const { openSideHeader , index } = useSideHeader();
  return (
    <>
    <div className="flex items-center justify-between py-4 font-medium">
      <Link to="/">
        <img src={assets.logo} className="w-15" alt="" />
      </Link>

      <ul className="hidden sm:flex items-center gap-5 text-sm text-gray-700 flex-1 justify-end">
        {links.map((link, index) => (
          <NavLink
            to={link.path}
            key={index}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 ${
                isActive ? "text-blue-500" : "text-gray-700"
              }`
            }
          >
            <p>{link.name}</p>
            {/* <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" /> */}
          </NavLink>
        ))}
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-5">
        <img
          onClick={openSideHeader}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>

      {/* SideBar */}
      {index && <SideBar />}
    </div>

    <Agencies />
    </>
  );
}
