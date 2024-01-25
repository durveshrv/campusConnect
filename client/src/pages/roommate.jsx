import React,{useState,useEffect} from 'react';
import axios from 'axios';
import DashNav from '../components/DashNav';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
const Roommate = () => {
  const [redirectToLogin, setRedirectToLogin] = useState(false); // State to handle redirection
  // Remove navigate
  const callAboutPage = async () => {
    try {
      const res = await axios.get('http://localhost:5000/about', {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "token": localStorage.getItem("token")
        },
        credentials: "include",
      });
      const data = await res.data;
      if (!data) {
        throw new Error("Data not available");
      }
      console.log(data);
    } catch (err) {
      setRedirectToLogin(true); // Set state to true for redirection
    }
  };
  useEffect(()=>{
    callAboutPage();
  },[]);
  // Remove redirectTo function

  if (redirectToLogin) {
    // Redirect to the login page if redirectToLogin is true
    return <Redirect to="/users/login" />;
  }
  return (
    <body>
      {/* Your JSX structure */}
      <div id="wrapper">
        <DashNav/>
        {/* /. NAV SIDE  */}
        <div id="page-wrapper">
          <div id="page-inner">
            <div className="row"></div>
            {/* /. ROW  */}
            <hr />
            <div className="row">
              <div className="col-lg-12 "></div>
            </div>
            <div className="row text-center pad-top">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div className="div-square">
                  <a href="/shareroom">
                    <i className="fa fa-solid fa-house-user fa-4x"></i>
                    <h5 style={{ color: 'black', textDecoration: 'none' }}>
                      Do you want to share room?
                    </h5>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div className="div-square">
                  <a href="/roomfinderlist">
                    <i className="fa fa-solid fa-people-roof fa-4x"></i>
                    <h5 style={{ color: 'black', textDecoration: 'none' }}>Do you need room?</h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /. WRAPPER  */}
        {/* SCRIPTS -AT THE BOTOM TO REDUCE THE LOAD TIME*/}
        {/* JQUERY SCRIPTS */}
        <script src="assets/js/jquery-1.10.2.js"></script>
        {/* BOOTSTRAP SCRIPTS */}
        <script src="assets/js/bootstrap.min.js"></script>
        {/* CUSTOM SCRIPTS */}
        <script src="assets/js/custom.js"></script>
      </div>
    </body>
  );
};

export default Roommate;
