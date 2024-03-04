import React from "react";
import {
  MdDashboard,
  MdDirectionsBike,
  MdEventAvailable,
  MdForum,
} from "react-icons/md";
import { IoBed, IoLogOut } from "react-icons/io5";
import { GiBuyCard } from "react-icons/gi";
export default function Sidenav() {
  return (
    <div style={{position: 'fixed',
      height:"100%",
      overflowY: 'auto',
      zIndex:"1000"}}>
      <div
        className="d-flex z-5 flex-column flex-shrink-0 p-3 text-white bg-dark"
        style={{ width: "280px", height: "585px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4">CampusConnect</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="/" className="nav-link active" aria-current="page">
              <MdDashboard className="bi me-2" width="16" height="16" />
              Home
            </a>
          </li>
          <li>
            <a href="/bike_buddy" className="nav-link text-white">
              <MdDirectionsBike className="bi me-2" width="16" height="16" />
              Bike Buddy
            </a>
          </li>
          <li>
            <a href="/studyout" className="nav-link text-white">
              <MdEventAvailable className="bi me-2" width="16" height="16" />
              Event Management
            </a>
          </li>
          <li>
            <a href="/buy_sell" className="nav-link text-white">
              <GiBuyCard className="bi me-2" width="16" height="16" />
              Trade Old Equipment
            </a>
          </li>
          <li>
            <a href="/roomfinderlist" className="nav-link text-white">
              <IoBed className="bi me-2" width="16" height="16" />
              Room Sharing
            </a>
          </li>
          <li>
            <a href="/dashboard" className="nav-link text-white">
              <MdForum className="bi me-2" width="16" height="16" />
              Forum
            </a>
          </li>
          <li>
            <a href="/users/logout" className="nav-link text-white">
              <IoLogOut className="bi me-2" width="16" height="16" />
              Logout
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
