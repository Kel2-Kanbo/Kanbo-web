import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

import NavItem from "../NavItem";

import "./NavbarStyle.css"
import SearchNavbar from "../SearchNavbar";

export default function Navbar({ fixed }) {
  
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <>
      <div className="flex flex-wrap fixed justify-end md:w-10/12 w-8/12 bg-primary-white right-0 rounded-l">
        <div className="">
          <nav className=" flex flex-wrap right-0 items-center justify-between px-2 py-3 bg-primary-white rounded-l-lg">
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
    
  </>
  );
}

// export default Navbar;