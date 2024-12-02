import React, { useMemo, useState } from "react";
import navbarItems from "../data/navbarItems";
import { Divide as Hamburger } from "hamburger-react";

const getChildMenuPositionClass = (index, totalItems) =>
  index >= totalItems - 2 ? "-left-44" : "left-56";
const getParentMenuPositionClass = (index, totalItems) =>
  index >= totalItems - 1 ? "right-0" : "left-0";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav
      className={`${
        toggleMenu
          ? `bg-gray-800 text-slate-100 w-full h-dvh text-nowrap`
          : `bg-gray-800 text-slate-100 w-full h-12 text-nowrap`
      }`}
    >
      <div
        className={`${
          toggleMenu
            ? `h-12 w-12 flex items-center justify-center lg:hidden absolute top-0 left-0`
            : `h-full w-12 flex items-center justify-center lg:hidden`
        }`}
      >
        <Hamburger size={20} toggled={toggleMenu} toggle={setToggleMenu} />
      </div>
      <ul
        className={`${
          toggleMenu
            ? `flex flex-col w-full h-full items-center justify-evenly`
            : `hidden w-full h-full items-center justify-evenly lg:flex`
        }`}
      >
        {navbarItems.map((item, itemIndex) => (
          <NavItem
            key={`navbar-${itemIndex}-${item.title}`}
            item={item}
            itemIndex={itemIndex}
            totalItems={navbarItems.length}
            toggleMenu={toggleMenu}
          />
        ))}
      </ul>
    </nav>
  );
};

const NavItem = ({ item, itemIndex, totalItems, toggleMenu }) => {
  const parentMenuClass = useMemo(
    () => getParentMenuPositionClass(itemIndex, totalItems),
    [itemIndex, totalItems]
  );
  const childMenuClass = useMemo(
    () => getChildMenuPositionClass(itemIndex, totalItems),
    [itemIndex, totalItems]
  );

  return (
    <li
      className={`${
        toggleMenu
          ? `w-56 text-center group/item relative flex flex-col justify-center text-sm font-medium cursor-pointer`
          : `group/item relative h-full flex items-center text-sm font-medium cursor-pointer`
      }`}
    >
      {item.title}
      {item.children && (
        <ul
          className={`${
            toggleMenu
              ? `bg-gray-700`
              : `bg-gray-700 text-white absolute top-12 ${parentMenuClass} flex flex-col items-center justify-evenly`
          }`}
        >
          {item.children.map((child, childIndex) => (
            <li
              key={`navbar-${itemIndex}-${childIndex}-${child.title}`}
              className="group-hover/item:flex hidden relative w-56 text-sm font-normal py-3 px-6 hover:bg-gray-600 transition-all duration-100 group/child z-10"
            >
              {child.title}
              {child.children && (
                <ul
                  className={`bg-gray-700 absolute w-44 top-0 ${childMenuClass} flex-col hidden group-hover/child:flex z-20`}
                >
                  {child.children.map((grandChild, grandChildIndex) => (
                    <li
                      key={`navbar-${itemIndex}-${childIndex}-${grandChildIndex}-${grandChild.title}`}
                      className="py-3 px-6 hover:bg-gray-600 transition-all duration-100"
                    >
                      {grandChild.title}
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
