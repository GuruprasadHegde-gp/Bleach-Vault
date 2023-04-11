import { ConnectButton } from "@rainbow-me/rainbowkit";
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useState, useRef, useEffect } from "react";

const NavBar = () => {
  const [items, addItems] = useState([
    "Art & Drawing",
    "Podcast",
    "Articles",
    "Films",
    "Education",
  ]);
  const [isClicked, setClick] = useState(false);
  const dropdownRef = useRef(null);

  const renderItems = () => {
    return (
      <ul
        ref={dropdownRef}
        className={`font-Gothic dropdown-menu absolute w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${isClicked ? "block" : "hidden"
          }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu">
        {items.map((item, index) => {
          return (
            <li key={index} className="px-4 py-2 text-lg border-b-2 border-white hover:border-pink-500 transition-border duration-700">
              {item}
            </li>
          );
        })}
      </ul>
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setClick(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="bg-heroColor flex items-center justify-between flex-row px-4 py-2 font-Gothic border-b-2 border-black">
      {/* Logo */}
      <div className="text-2xl font-bold cursor-pointer font-Gothic border-b-2 border-white hover:border-pink-500 transition-border duration-700"> 3LEACH VAULT</div>
      <ul className="flex items-center justify-between flex-row space-x-8 cursor-pointer text-lg">
        <li className="border-b-2 border-white hover:border-pink-500 transition-border duration-700 hover:scale-110">Music</li>
        <li className="border-b-2 border-white hover:border-pink-500 transition-border duration-700 hover:scale-110">Ebooks</li>
        <li className="border-b-2 border-white hover:border-pink-500 transition-border duration-700 hover:scale-110">Animation</li>
        <li className="flex">
          <button
            onClick={() => {
              console.log("Button Clicked");
              setClick(!isClicked);
            }}
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2"
          >
            <span className="sr-only">Open options</span>
            <RxHamburgerMenu />
          </button>
          {isClicked && renderItems()}
        </li>
      </ul>
      <div className="border-l-2 border-black px-4 font-Gothic h-full">
        <ConnectButton />
      </div>
    </div>
  );
};

export default NavBar;
