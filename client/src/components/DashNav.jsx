import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
// import "../assets/css/Navbar.css";
import Logout from "./logout";
import {
  FaDesktop,
  FaPersonBiking,
  FaBook,
  FaLightbulb,
  FaUsers,
  FaQuora,
  FaEdit,
} from "react-icons/fa";
import {
  MdDashboard,
  MdDirectionsBike,
  MdEventAvailable,
  MdForum,
} from "react-icons/md";
import { IoBed, IoLogOut } from "react-icons/io5";
import { GiBuyCard } from "react-icons/gi";
import "../assets/css/Navbar.css";

const DashNav = () => {
  useEffect(() => {
    // Include Bootstrap and jQuery script dynamically
    const script1 = document.createElement("script");
    script1.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    script1.crossOrigin = "anonymous";
    script1.integrity = "sha256-GLT2LmPk1FgPdG7sEC9C1b8tBWTafkdI1j03JmC4z5I=";
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src =
      "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js";
    script2.crossOrigin = "anonymous";
    script2.integrity =
      "sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCvnbB9PLc+ssAgcfUKFJFj/DAiSNa";
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div>
      <nav className="navbar-default" role="navigation">
        <div className="sidebar-collapse">
          <ul className="nav" id="main-menu">
            <li className="active-link">
              <NavLink className="nav-link ml-2" to="/">
                <MdDashboard />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link ml-2" to="/bike_buddy">
                <MdDirectionsBike />
                Bike Buddy
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link ml-2" to="/study_options">
                <MdEventAvailable />
                Event Management
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link ml-2" to="/buy_sell">
                <GiBuyCard />
                Trade Old Equipment
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link ml-2" to="/roommate">
                <IoBed />
                Room Sharing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link ml-2" to="/dashboard">
                <MdForum />
                Forum
              </NavLink>
            </li>
            <li>
              <a href="/users/logout">
                <IoLogOut />
                Logout
              </a>
            </li>
            {/* Add other list items as needed */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default DashNav;
