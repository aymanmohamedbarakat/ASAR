import { ChevronRight, CircleX } from "lucide-react";
import React, { useEffect } from "react";
import { useLinks, useSideHeader } from "../../Hooks/uiStore";
import { NavLink, useNavigate } from "react-router-dom";

export default function SideBar() {
  const { closeSideHeader } = useSideHeader();
    const { links, setLinks } = useLinks();
  const navigate = useNavigate();
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeSideHeader();
      }
    };
    window.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "visible";
    };
  }, [closeSideHeader]);

  const navigateTo = (path) => {
    navigate(path);
    closeSideHeader();
  };
  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Full screen sidebar */}
      <div className="w-full bg-white shadow-xl flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">القائمة</h2>
          <button
            onClick={closeSideHeader}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <CircleX className="text-gray-600" />
          </button>
        </div>

        {/* Links */}
        <div className="flex-grow overflow-y-auto">
          <div className="py-2">
            {/* <h3 className="px-4 py-2 text-sm font-medium text-gray-500">Navigation</h3> */}
            {links.map((link, index) => (
              <NavLink
                to={link.url}
                key={index}
                className={({ isActive }) =>
                  `flex items-center justify-between py-3 px-4 cursor-pointer border-b border-gray-100 
                  ${isActive ? "bg-gray-50 font-medium" : "hover:bg-gray-50"}`
                }
                onClick={closeSideHeader}
              >
                <span>{link.name}</span>
                <ChevronRight className="text-xs text-gray-400 rotate-180" />
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
