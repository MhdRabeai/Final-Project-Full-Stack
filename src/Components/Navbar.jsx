import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { GoSun } from "react-icons/go";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-[#4f9451] text-sm py-5 shadow-2xl mb-8 dark:drop-shadow-[0_5px_10px_rgba(255,255,255,0.5)]">
      <nav className="max-w-[86rem] w-full mx-auto px-4 sm:flex items-baseline sm:justify-between ">
        <div className="flex items-center justify-between">
          <a
            className="flex-none text-xl font-semibold text-white focus:outline-none focus:opacity-80"
            href="/"
          >
            Logo
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-2 rounded-lg border border-white/20 font-medium bg-[#4aa34d] text-white shadow-sm align-middle hover:bg-white/10 focus:outline-none focus:bg-white/10 text-sm"
              id="hs-navbar-primary-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-primary"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-primary"
            >
              <svg
                className="hs-collapse-open:hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="hs-navbar-primary"
          className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
          aria-labelledby="hs-navbar-primary-collapse"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5 sm-pb-4 md-pb-0">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "active font-medium text-white focus:outline-none"
                  : "font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white"
              }
              to="/"
              aria-current="page"
            >
              Home
            </NavLink>
            <NavLink
              // className="font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white"
              className={({ isActive }) =>
                isActive
                  ? "active font-medium text-white focus:outline-none"
                  : "font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white"
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "active font-medium text-white focus:outline-none"
                  : "font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white"
              }
              to="/team"
            >
              Team
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "active font-medium text-white focus:outline-none"
                  : "font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white"
              }
              to="/blogs"
            >
              Blogs
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "active font-medium text-white focus:outline-none"
                  : "font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white"
              }
              to="/contact"
            >
              Contact
            </NavLink>
            <button onClick={toggleTheme} className="  p-1 sm:pr-2">
              {isDark ? (
                <MdDarkMode className="fill-white scale-150" />
              ) : (
                <GoSun className="fill-white scale-150" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;