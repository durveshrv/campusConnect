import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
// import "../../assets/css/bootstrap.css";
import "../../assets/css/font-awesome.css";
import "../../assets/css/custom.css";
import "../../assets/css/style.css";
// import "../../assets/css/utilities.css";
import {
  MdDashboard,
  MdDirectionsBike,
  MdEventAvailable,
  MdForum,
} from "react-icons/md";
import { IoBed, IoLogOut } from "react-icons/io5";
import { GiBuyCard } from "react-icons/gi";
import DashNav from "../../components/DashNav";


const Jumotron = ({setIsSellButtonVisible}) => {
  
  return (
    <div >
      <div>
        <div id="wrapper">
          <DashNav />
          {/* /. NAV SIDE  */}
          <div id="page-wrapper">
            <div id="page-inner">
              {/* /. ROW  */}
              <div className="">
                <div className="col-lg-12">
                  <div className="alert alert-info">
                    <strong>Welcome To campusConnect</strong>
                  </div>
                </div>
              </div>
              {/* /. ROW  */}
              <div className="row text-center pad-top">
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="bike_buddy">
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
                    <Link to="/buy_sell" onClick={()=>{
                      setIsSellButtonVisible(true);
                    }}>
                      <GiBuyCard size={64} />
                      <h5
                        style={{ color: "black", textDecoration: "none" }}
                        alt="room mate icon">
                        Buy/Sell
                      </h5>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                  <div className="div-square">
                    <a href="/roommate">
                      <IoBed size={64} />
                      <h5
                        style={{ color: "black", textDecoration: "none" }}
                        alt="logout icon">
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
                        alt="room mate icon">
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
    </div>
  );
};

export default Jumotron;
