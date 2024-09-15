import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withTranslation } from 'react-google-multi-lang';


const AppBar = () => {
  const [open, setOpen] = useState(false);

  const menuClicked = () => {
    setOpen(!open);
  };

  const handleMenuItemClick = () => {
    setOpen(false);
  };

  return (
    <nav className="w-full bg-slate-600">
      <div className="flex text-white justify-between items-center w-5/6 mx-auto h-24 px-4">
        {/* Brand Name */}
        <div className="font-semibold  text-3xl">IRONWOOD</div>

        {/* Navigation Links (mobile view) */}
        <div
          className={`${
            open ? "block" : "hidden"
          } absolute inset-x-0 top-24 bg-slate-600 border-t-4 rounded-b-3xl z-10 xl:hidden`}
        >
          <div className="flex flex-col items-center py-4 pb-28">
            <ul className="space-y-9 text-xl">
              <li>
                <Link to="/" onClick={handleMenuItemClick} className="menu">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Restaurants" onClick={handleMenuItemClick} className="menu">
                  Restaurants
                </Link>
              </li>
              <li>
                <Link to="/Happy-Hours" onClick={handleMenuItemClick} className="menu">
                  Happy Hours
                </Link>
              </li>
              <li>
                <Link to="/Food-Shops" onClick={handleMenuItemClick} className="menu">
                  Food Shops
                </Link>
              </li>
              <li>
                <Link to="/Rentals" onClick={handleMenuItemClick} className="menu">
                  Rentals
                </Link>
              </li>
              <li>
                <Link to="/Spa" onClick={handleMenuItemClick} className="menu">
                  Spa
                </Link>
              </li>
              <li>
                <Link to="/SkiLifts" onClick={handleMenuItemClick} className="menu">
                  Ski Lifts
                </Link>
              </li>
              <li>
                <Link to="https://www.3bmeteo.com/meteo/livigno" target="_blank" onClick={handleMenuItemClick} className="menu">
                  Weather
                </Link>
              </li>
              <li>
                <Link to="https://www.livigno.eu/eventi" target="_blank" onClick={handleMenuItemClick} className="menu">
                  Events
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Burger Menu Button */}
        <button
          onClick={menuClicked}
          className="xl:hidden flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        {/* Navigation Links (desktop view) */}
        <div className="hidden xl:flex space-x-8">
          <Link to="/" onClick={handleMenuItemClick} className="menu">
            Home
          </Link>
          <Link to="/Restaurants" onClick={handleMenuItemClick} className="menu">
            Restaurants
          </Link>
          <Link to="/Happy-Hours" onClick={handleMenuItemClick} className="menu">
            Happy Hours
          </Link>
          <Link to="/Food-Shops" onClick={handleMenuItemClick} className="menu">
            Food Shops
          </Link>
          <Link to="/Rentals" onClick={handleMenuItemClick} className="menu">
            Rentals
          </Link>
          <Link to="/Spa" onClick={handleMenuItemClick} className="menu">
            Spa
          </Link>
          <Link to="/SkiLifts" onClick={handleMenuItemClick} className="menu">
            Ski Lifts
          </Link>
          <Link to="https://www.3bmeteo.com/meteo/livigno" target="_blank" onClick={handleMenuItemClick} className="menu">
            Weather
          </Link>
          <Link to="https://www.livigno.eu/eventi" target="_blank" onClick={handleMenuItemClick} className="menu">
            Events
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;
