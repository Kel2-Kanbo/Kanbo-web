import React, { useState } from "react";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

import NavItem from "../NavItem";

import SearchNavbar from "../SearchNavbar";

export default function Navbar({ fixed }) {
  const [showNav, setShowNav] = useState(false);

  const [open, setOpen] = useState(false);
  
  const [menuOpen, setMenuOpen] = React.useState(false);
  
  return (
    <>
      <div className="flex flex-wrap fixed justify-end md:w-9/12 w-8/12 right-0">
        <div className="md:w-full">
          <nav className="relative flex flex-wrap right-0 items-center justify-between px-2 py-3 bg-primary-white rounded-l-lg">
            <div className="container px-6 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex left-8 justify-end lg:w-auto lg:static lg:block ">
                <button
                  className="text-primary-blue cursor-pointer text-xl leading-none px-3 py-1 rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                  >
                    <HiOutlineMenuAlt3/>
                </button>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " row" : " hidden")
                }
                id="example-navbar-info"
                >
                <SearchNavbar/>
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-primary-blue hover:opacity-75"
                      href="#pablo"
                    >
                      Discover
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-primary-blue hover:opacity-75"
                      href="#pablo"
                    >
                      Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-primary-blue hover:opacity-75"
                      href="#pablo"
                    >
                      Settings
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    {/* <nav className=" fixed md:flex justify-between items-center right-0 sm:w-9/12 w-6/12 ">
        <div className=" flex justify-end items-center">
         {showNav ? (
           <HiOutlineMenuAlt2
             onClick={() => setShowNav(!showNav)}
             className=" md:hidden w-10 h-10 p-2 cursor-pointer"
           />
         ) : (
           <HiOutlineMenuAlt3
             onClick={() => setShowNav(!showNav)}
             className=" md:hidden block w-10 h-10 p-2 cursor-pointer"
           />
         )}
       </div>
          
       <ul
         className={
           (showNav ? " right-0" : " -right-full") + " shadow-lg shadow-primary-gray3 rounded-l-lg md:static fixed bottom-0 top-8 md:flex md:space-x-7 items-center sm:bg-transparent bg-primary-white bg-opacity-90 md:w-full w-10/12 text-primary-blue md:space-y-0 space-y-5 p-2 transition-left "
         }
       >
         <SearchNavbar />
         <NavItem content="Home" href="/" />
         <NavItem content="Shop" href="/shop" />
         <NavItem content="Contact" href="/contact" />
         <NavItem content="About" href="/about" />
       </ul>
     </nav> */}
  </>
  );
}

// export default Navbar;