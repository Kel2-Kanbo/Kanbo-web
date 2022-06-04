import React from "react";
import { NavLink } from "react-router-dom";

import { IoMenu } from "react-icons/io5";

const Sidebar = () => {
  return (
    <>
      <input type="checkbox" id="sidebar-toggle" />
      <div className="sidebar">
        <div className="sidebar-header">
          <h3 className="brand">
            <span className="brand-title">Kanbo</span>
          </h3>
          <label htmlFor="sidebar-toggle"><IoMenu/></label>
        </div>
        
        <div className="sidebar-menu">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "side-link active" : "side-link"
                }
              >
                <i className=""></i>
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/room"
                className={({ isActive }) =>
                  isActive ? "side-link active" : "side-link"
                }
              >
                <i className="fa-solid fa-map-location-dot"></i>

                <span>Room</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/order"
                className={({ isActive }) =>
                  isActive ? "side-link active" : "side-link"
                }
              >
                <i className="fa-regular fa-newspaper"></i>
                <span>Order</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;