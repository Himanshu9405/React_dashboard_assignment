import React, {useState} from "react";
import { MdClose } from "react-icons/md";
import { GoSidebarCollapse } from "react-icons/go";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { open } from "../redux/slices.js/sidebarSlice.tsx";


const Sidebar = () => {
  const { sidebarOpen } = useSelector((state: RootState) => state.sidebar);
  const [isOpen, setIsOpen] = useState(sidebarOpen);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
    dispatch(open(!isOpen));
  };

  return (
      <div
      className={`bg-white-800 mt-[4.2rem] shadow-md shadow-blue-500/50 dark:shadow-none text-black h-[93%] dark:bg-gray-800 dark:text-white  ${
        isOpen
          ? 'sm:w-48 md:w-56 lg:w-64'
          : 'sm:w-12 md:w-14 lg:w-16'
      } transition-all duration-300`}
      >
        <div className="flex items-center justify-between p-4">
          <h1 className={`text-lg font-bold ${!isOpen && 'hidden'}`}>
            Dashboard
          </h1>
          <button
            onClick={handleSidebarToggle}
            className="text-gray-400 hover:text-white"
          >
            {isOpen ? <MdClose  /> : <GoSidebarCollapse  />}
          </button>
        </div>
        <nav className="mt-4">
          <ul>
            <li
              className={`p-4 hover:bg-gray-700 hover:text-white dark:hover:text-gray-700 dark:hover:bg-white  ${
                !isOpen && 'flex justify-center'
              }`}
              onClick = {() => navigate('/')}
            >
              <span className={`${!isOpen && 'hidden ' }`}>Dashboard</span>
            </li>
            <li
              className={`p-4 hover:bg-gray-700 hover:text-white dark:hover:text-gray-700 dark:hover:bg-white ${
                !isOpen && 'flex justify-center'
              }`}
              onClick = {() => navigate('/setting')}
            >
              <span className={`${!isOpen && 'hidden'}`}>Settings</span>
            </li>
          </ul>
        </nav>
      </div>

  );
};

export default Sidebar;
