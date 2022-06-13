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
    <div>
      <div className="md:w-full">
        <nav className="relative flex flex-wrap right-0 items-center justify-between px-2 py-3 bg-primary-white">
          <div className="container mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex left-8 justify-end lg:w-auto lg:static lg:block ">
              <button
                className="text-primary-blue cursor-pointer text-xl leading-none px-3 py-1 rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <HiOutlineMenuAlt3 />
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (menuOpen ? " row" : " hidden")
              }
              id="example-navbar-info"
            >
              <SearchNavbar />
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
  );
}

// export default Navbar;