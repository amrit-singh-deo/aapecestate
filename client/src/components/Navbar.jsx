import React, { useMemo } from "react";
import navbarItems from "../data/navbarItems";


const getChildMenuPositionClass = (index, totalItems) => (index >= totalItems - 2 ? "-left-44" : "left-56");
const getParentMenuPositionClass = (index, totalItems) => (index >= totalItems - 1 ? "right-0" : "left-0");


const Navbar = () => {
  const totalItems = navbarItems.length;

  return (
    <nav className="bg-gray-800 text-slate-100 w-full h-10 text-nowrap">
      <ul className="hidden lg:flex w-full h-full items-center justify-evenly">
        {navbarItems.map((item, itemIndex) => (
          <NavItem
            key={`navbar-${itemIndex}-${item.title}`}
            item={item}
            itemIndex={itemIndex}
            totalItems={totalItems}
          />
        ))}
      </ul>
    </nav>
  );
};


const NavItem = ({ item, itemIndex, totalItems }) => {
  const parentMenuClass = useMemo(() => getParentMenuPositionClass(itemIndex, totalItems), [itemIndex, totalItems]);
  const childMenuClass = useMemo(() => getChildMenuPositionClass(itemIndex, totalItems), [itemIndex, totalItems]);

  return (
    <li className="group/item relative h-full flex items-center text-sm font-medium cursor-pointer">
      {item.title}
      {item.children && (
        <ul className={`bg-gray-700 text-white absolute top-10 ${parentMenuClass} flex flex-col items-center justify-evenly`}>
          {item.children.map((child, childIndex) => (
            <li key={`navbar-${itemIndex}-${childIndex}-${child.title}`} className="group-hover/item:flex hidden relative w-56 text-sm font-normal py-3 px-6 hover:bg-gray-600 transition-all duration-100 group/child z-10">
              {child.title}
              {child.children && (
                <ul className={`bg-gray-700 absolute w-44 top-0 ${childMenuClass} flex-col hidden group-hover/child:flex z-20`}>
                  {child.children.map((grandChild, grandChildIndex) => (
                    <li key={`navbar-${itemIndex}-${childIndex}-${grandChildIndex}-${grandChild.title}`} className="py-3 px-6 hover:bg-gray-600 transition-all duration-100">
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
