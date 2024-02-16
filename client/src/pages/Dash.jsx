import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import NavbarSidebar from "../components/Navbar";
import {
  MdDashboard,
  MdDirectionsBike,
  MdEventAvailable,
  MdForum,
} from "react-icons/md";
import { IoBed, IoLogOut } from "react-icons/io5";
import { GiBuyCard } from "react-icons/gi";

const HomePage = () => {
  useEffect(() => {
    // You can include any logic you want to execute on component mount here
  }, []);

  return (
    <div>
      <div id="wrapper">
        <NavbarSidebar />
        {/* /. NAV SIDE  */}
        <div id="page-wrapper">
          <div id="page-inner">
            <div className="row"></div>
            {/* /. ROW  */}
            <div className="row">
              <div className="col-lg-12 ">
                <div className="alert alert-info">
                  <strong>Welcome To VITConnect</strong>
                </div>
              </div>
            </div>
            {/* /. ROW  */}
            <div className="row text-center pad-top">
              <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                <div className="div-square">
                  <a href="/bikebud">
                    <MdDirectionsBike size={64} />
                    <h5 style={{ color: "black", textDecoration: "none" }}>
                      Bike Buddy
                    </h5>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                <div className="div-square">
                  <a href="/studyout">
                    <MdEventAvailable size={64} />
                    <h5 style={{ color: "black", textDecoration: "none" }}>
                      Study
                    </h5>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                <div className="div-square">
                  <a href="/buy_sell">
                    <GiBuyCard size={64} />
                    <h5
                      style={{ color: "black", textDecoration: "none" }}
                      alt="room mate icon"
                    >
                      Buy/Sell
                    </h5>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                <div className="div-square">
                  <a href="/roommate">
                    <IoBed size={64} />
                    <h5
                      style={{ color: "black", textDecoration: "none" }}
                      alt="logout icon"
                    >
                      Room
                    </h5>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                <div className="div-square">
                  <a href="/index">
                    <MdForum size={64} />
                    <h5
                      style={{ color: "black", textDecoration: "none" }}
                      alt="room mate icon"
                    >
                      Forum
                    </h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
