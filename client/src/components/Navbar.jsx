import React, { useMemo } from "react";
import navbarItems from "../data/navbarItems";


const getChildMenuPositionClass = (index, totalItems) => (index >= totalItems - 2 ? "-left-44" : "left-56");
const getParentMenuPositionClass = (index, totalItems) => (index >= totalItems - 1 ? "right-0" : "left-0");


const Navbar = () => {
  const totalItems = navbarItems.length;

  return (
    <nav className="w-full h-20 text-nowrap">
      <div className="h-1/2 flex items-center justify-evenly font-semibold">
        <div>Landed Properties</div>
        <div>Suppliers</div>
      </div>
      <ul className="flex w-full h-1/2 items-center justify-evenly">
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
    <li className="group/item relative h-full flex items-center font-semibold cursor-pointer">
      {item.title}
      {item.children && (
        <ul className={`bg-slate-200 absolute top-10 ${parentMenuClass} flex flex-col items-center justify-evenly`}>
          {item.children.map((child, childIndex) => (
            <li key={`navbar-${itemIndex}-${childIndex}-${child.title}`} className="group-hover/item:flex hidden relative w-56 text-sm py-3 px-6 hover:bg-slate-100 group/child z-10">
              {child.title}
              {child.children && (
                <ul className={`bg-slate-200 absolute w-44 top-0 ${childMenuClass} flex-col hidden group-hover/child:flex z-20`}>
                  {child.children.map((grandChild, grandChildIndex) => (
                    <li key={`navbar-${itemIndex}-${childIndex}-${grandChildIndex}-${grandChild.title}`} className="py-3 px-6 hover:bg-slate-100">
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
