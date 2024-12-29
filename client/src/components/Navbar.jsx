import React from "react";
import navbarItems from "../data/navbarItems";

const Navbar = () => {
  return (
    <nav className="h-12">
      <div className="bg-slate-300 h-full">
        <ul className="hidden lg:flex items-center justify-evenly h-full text-sm font-semibold">
          {navbarItems.map((item, index) => (
            <NavItem
              key={`nav-${index}-${item.title}`}
              item={item}
              index={index}
              totalItems={navbarItems.length}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({ item, index, totalItems }) => {
  const rightItem = index >= totalItems - 2 ? "right-0 bg-pink-400" : "left-0 bg-cyan-300";
  const rightChildItem = index >= totalItems - 2 ? "right-full bg-red-400" : "left-full bg-emerald-400";

  return (
    <li className="h-full group/item flex items-center cursor-pointer relative hover:text-white">
      {item.title}
      {item.children && (
        <ul
          className={`z-20 group-hover/item:flex absolute top-12 ${rightItem} hidden text-black flex-col items-center text-nowrap`}
        >
          {item.children.map((child, childIndex) => (
            <li
              key={`nav-${childIndex}-${child.title}`}
              className="group/child hover:text-white text-sm font-semibold relative w-full hover:bg-orange-300 bg-orange-400 py-3 px-5"
            >
              {child.title}
              {child.children && (
                <ul className={`group-hover/child:flex hidden text-black flex-col items-center absolute top-0 ${rightChildItem}`}>
                  {child.children.map((subChild, subChildIndex) => (
                    <li
                      key={`nav-${subChildIndex}-${subChild.title}`}
                      className="text-sm font-semibold py-3 px-5 hover:bg-emerald-300 hover:text-white w-full"
                    >
                      {subChild.title}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Navbar;
