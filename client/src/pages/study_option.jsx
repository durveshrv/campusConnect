import React from "react";
import DashNav from "../components/DashNav";

const Studyoption = () => {
  return (
    <div style={{display:"flex"}}>
      {/* <DashNav /> */}
      <div id="wrapper" className="bg-gray-100 w-full min-h-screen">
        {/* /. NAV SIDE */}
        <div id="page-wrapper">
          <div id="page-inner">
            <div className="row"></div>
            {/* /. ROW */}
            <div className="row">
              <div className="col-lg-12 "></div>
            </div>
            {/* /. ROW */}
            <div className="row m-5 text-center mt-10 p-5">
              <div className="col-lg-6">
                <div className="div-square">
                  <a href="/studyinput">
                    <div className="card mx-5 border border-gray-300 rounded-lg h-100 shadow-lg p-4">
                      <i className=" fa fa-solid fa-book  fa-4x"></i>
                      <h5 className="text-black mt-2">Do you want to take a lecture?</h5>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="div-square">
                  <a href="/studyout">
                    <div className="card border mx-5 border-gray-300 h-100 rounded-lg shadow-lg p-4">
                      <i className="fa fa-solid fa-users fa-4x"></i>
                      <h5 className="text-black mt-2">Do you want to join the lecture?</h5>
                    </div>
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

export default Studyoption;
