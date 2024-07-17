import React, { useState, useEffect } from "react";
import axios from "axios";
import DashNav from "../components/DashNav";
import { Redirect } from "react-router-dom";
import { FaHome,FaBuilding } from 'react-icons/fa';
const Roommate = () => {
  const [redirectToLogin, setRedirectToLogin] = useState(false); // State to handle redirection

  const callAboutPage = async () => {
    try {
      const res = await axios.get("https://campusconnect-1.onrender.com/about", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
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

  useEffect(() => {
    callAboutPage();
  }, []);

  if (redirectToLogin) {
    // Redirect to the login page if redirectToLogin is true
    return <Redirect to="/users/login" />;
  }

  return (
    <div style={{display:"flex"}}>
      {/* <DashNav /> */}
      <div id="wrapper" className="bg-gray-100 w-full min-h-screen">
        {/* /. NAV SIDE  */}
        <div id="page-wrapper">
          <div id="page-inner" >
            <hr />
            <div className="m-5 row grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
              <div className="mx-5 rounded-lg bg-white border border-gray-300 shadow-lg p-4 text-center">
                <a href="/shareroom">
                  <FaHome size={64} />
                  <h5 className="text-black mt-2">Do you want to share room?</h5>
                </a>
              </div>
              <div className="mx-5 rounded-lg bg-white border border-gray-300 shadow-lg p-4 text-center">
                <a href="/roomfinderlist">
                  <FaBuilding size={64} />
                  <h5 className="text-black mt-2">Do you need room?</h5>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* /. WRAPPER  */}
      </div>
    </div>
  );
};

export default Roommate;
