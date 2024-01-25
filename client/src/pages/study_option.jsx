import React from 'react';
import DashNav from "../components/DashNav";

const Studyoption = () => {
  return (
    <div>
      <div id="wrapper">
        <DashNav/>
        {/* /. NAV SIDE */}
        <div id="page-wrapper">
          <div id="page-inner">
            <div className="row"></div>
            {/* /. ROW */}
            <div className="row">
              <div className="col-lg-12 "></div>
            </div>
            {/* /. ROW */}
            <div className="row text-center pad-top">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div className="div-square">
                  <a href="/studyinput">
                    <i className=" fa fa-solid fa-book  fa-4x"></i>
                    <h5 style={{ color: 'black', textDecoration: 'none' }}>Do you want to take a lecture?</h5>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div className="div-square">
                  <a href="/studyout">
                    <i className="fa fa-solid fa-users fa-4x"></i>
                    <h5 style={{ color: 'black', textDecoration: 'none' }}>Do you want to join the lecture?</h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /. WRAPPER */}
      {/* SCRIPTS -AT THE BOTTOM TO REDUCE THE LOAD TIME*/}
      {/* JQUERY SCRIPTS */}
      <script src="assets/js/jquery-1.10.2.js"></script>
      {/* BOOTSTRAP SCRIPTS */}
      <script src="assets/js/bootstrap.min.js"></script>
      {/* CUSTOM SCRIPTS */}
      <script src="assets/js/custom.js"></script>
    </div>
  );
};

export default Studyoption;
