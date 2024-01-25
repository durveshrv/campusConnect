import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import DashNav from "./DashNav";
import { FaHamburger } from "react-icons/fa";
import { Link as LinkIcon } from "react-bootstrap-icons";
import { Redirect } from "react-router-dom/cjs/react-router-dom";

const NavBar = ({ user, isSellButtonVisible, history }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sellClick = () => {
    // Use the history object for programmatic redirect
    history.push("/sell");
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        {/* Hamburger Icon */}
        <FaHamburger
          onClick={toggleSidebar}
          style={{
            fontSize: "2rem",
            color: "#ffffff",
            cursor: "pointer",
          }}
        />
        <NavLink className="mt-3 navbar-brand" to="/">
          campusConnect
        </NavLink>

        <div className={`collapse navbar-collapse row ${isSidebarOpen ? "show" : ""}`} id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link ml-3" to="/">
                Home
              </NavLink>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            {!user && (
              <React.Fragment>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/users/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/users/register">
                    Register
                  </NavLink>
                </li>
              </React.Fragment>
            )}

            {user && (
              <React.Fragment>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/me">
                    Hi {user.username}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/users/logout">
                    LogOut
                  </NavLink>
                </li>
              </React.Fragment>
            )}

            {/* Move the Sell button to the right */}
            <li className="nav-item ml-auto">
              <button
                type="button"
                className={`btn btn-primary mx-4 mt-3 ${isSellButtonVisible ? "visible" : "invisible"}`}
                onClick={sellClick}
              >
                Sell
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {isSidebarOpen && <DashNav onClose={() => setIsSidebarOpen(false)} />}
    </div>
  );
};

// Wrap the component with withRouter to access the history object
export default withRouter(NavBar);
