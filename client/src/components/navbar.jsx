import React, { useContext, useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import DashNav from "./DashNav";
import { FaHamburger } from "react-icons/fa";
import { AuthContext } from "../Store/Context";
import { MdDirectionsBike } from "react-icons/md";

const NavBar = ({ user, history }) => {
  const { isSellButtonVisible, setIsSellButtonVisible } =
    useContext(AuthContext);
  const { havebikebtn } = useContext(AuthContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sellClick = () => {
    history.push("/sell");
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="sticky navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        {/* Hamburger Icon */}
        <FaHamburger
          onClick={toggleSidebar}
          className="text-white text-2xl cursor-pointer"
        />
        <NavLink className="navbar-brand" to="/">
          campusConnect
        </NavLink>
        
        <div
          className={`collapse navbar-collapse row ${
            isSidebarOpen ? "show" : ""
          }`}
          id="navbarColor03"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link ml-3" to="/">
                Home
              </NavLink>
            </li>
            {havebikebtn && (
              <li className="nav-item active">
                <NavLink
                  className="nav-link ml-3 flex items-center"
                  to="/have_bike"
                >
                  Do you have bike?
                  <MdDirectionsBike className="ml-1" size={20} />
                </NavLink>
              </li>
            )}
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
            {isSellButtonVisible && (
              <li className="nav-item ml-auto">
                <button
                  type="button"
                  className="btn btn-primary mx-4 "
                  onClick={sellClick}
                >
                  Sell
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
      {isSidebarOpen && <DashNav onClose={() => setIsSidebarOpen(false)} />}
    </div>
  );
};

// Wrap the component with withRouter to access the history object
export default withRouter(NavBar);
