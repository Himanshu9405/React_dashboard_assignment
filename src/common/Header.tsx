import React, { useState, useEffect } from "react";
// import { BellIcon, UserIcon, LogoutIcon } from '@heroicons/react/outline';
import { IoIosNotifications } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useNavigate } from "react-router";

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const localSelectedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(localSelectedTheme);
  const navigate = useNavigate();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");

    }
  }, [theme]);

  const toggleThemeButton = () => {
    setTheme((prev: string) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <header className="flex justify-between items-center shadow-md shadow-blue-500/50 dark:shadow-none p-4 bg-white-800 text-black dark:bg-gray-800 dark:text-white">
      {/* Logo or Brand */}
      <div className="text-2xl font-bold">Your App</div>

      {/* Right section: Profile , Notifications and Dark/light Mode */}
      <div className="flex items-center space-x-4 h-[35px]">
        <div className=" h-[10px] mt-[7px]">
          <button className="text-gray-400 " onClick={toggleThemeButton}>
            {theme === "dark" ? (
              <CiLight size={20} />
            ) : (
              <MdDarkMode size={20} />
            )}
          </button>
        </div>

        {/* Notifications Bell */}
        <div className=" h-[10px] mt-[7px]">
          <button className="text-gray-400 ">
            <IoIosNotifications size={20} />
          </button>
        </div>

        {/* Profile Dropdown */}
        <div className="relative h-[10px]">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center space-x-2 text-grey-400 dark:text-white "
          >
            <CiUser size={20} />
            <span>John Doe</span>
            <FaChevronDown />
          </button>
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg dark:text-white dark:bg-gray-800">
              <ul>
                <li
                  className="p-2 cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  Dashboard
                </li>
                <li
                  className="p-2 cursor-pointer"
                  onClick={() => navigate("/setting")}
                >
                  Settings
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
