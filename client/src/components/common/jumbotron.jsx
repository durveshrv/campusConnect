import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  MdDashboard,
  MdDirectionsBike,
  MdEventAvailable,
  MdForum,
} from "react-icons/md";
import { IoBed, IoLogOut } from "react-icons/io5";
import { GiBuyCard } from "react-icons/gi";
import DashNav from "../DashNav";
import { AuthContext } from "../../Store/Context";
import bg from "../../assets/img/bg.jpeg";
const Jumotron = () => {
  const { setIsSellButtonVisible } = useContext(AuthContext);
  
  return (
    <div style={{ display: "flex",backgroundImage: `url(${bg})`, height: '100vh'}}>
      {/* DashNav on the left */}
      {/* <DashNav /> */}
      <div id="wrapper" style={{width:"100%"}}>
        {/* /. NAV SIDE */}
        <div id="page-wrapper">
          <div id="page-inner">
            {/* /. ROW */}
            <div className="p-3">
                <div className="alert alert-info">
                  <strong>Welcome To campusConnect</strong>
                </div>
            </div>
            {/* /. ROW */}
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <div className="col-span-1">
                <div className="card rounded shadow-lg p-4" style={{height:"170px"}}>
                  <Link to="bike_buddy" className="card-body flex flex-col mx-auto">
                    <MdDirectionsBike size={48}/>
                    <h5 className="card-title mt-2">Bike Buddy</h5>
                  </Link>
                </div>
              </div>
              <div className="col-span-1">
                <div className="card rounded shadow-lg p-4" style={{height:"170px"}}>
                  <Link to="/studyout" className="card-body flex flex-col mx-auto">
                    <MdEventAvailable size={48} />
                    <h5 className="card-title mt-2">Study</h5>
                  </Link>
                </div>
              </div>
              <div className="col-span-1">
                <div className="card rounded shadow-lg p-4" style={{height:"170px"}}>
                  <Link
                    to="/buy_sell"
                    className="card-body flex flex-col mx-auto"
                    onClick={() => {
                      setIsSellButtonVisible(true);
                    }}
                  >
                    <GiBuyCard size={48} />
                    <h5 className="card-title mt-2">Buy/Sell</h5>
                  </Link>
                </div>
              </div>
              <div className="col-span-1">
                <div className="card rounded shadow-lg p-4" style={{height:"170px"}}>
                  <Link to="/roomfinderlist" className="card-body flex flex-col mx-auto">
                    <IoBed size={48} />
                    <h5 className="card-title mt-2">Room</h5>
                  </Link>
                </div>
              </div>
              <div className="col-span-1">
                <div className="card rounded shadow-lg p-4" style={{height:"170px"}}>
                  <Link to="/index" className="card-body flex flex-col mx-auto">
                    <MdForum size={48} />
                    <h5 className="card-title mt-2">Forum</h5>
                  </Link>
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
