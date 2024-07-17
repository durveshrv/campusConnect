import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useEffect } from "react";
import axios from "axios";
import { MdDirectionsBike } from "react-icons/md";
import { Redirect } from "react-router-dom"; // Import Redirect from react-router-dom
import DashNav from "../components/DashNav";
import BikerCard from "../components/BikerCard";
import SearchBar from "../components/SearchBar";
function Bkbud() {
  const [location, setLocation] = useState("Chintamaninagar2");
  const [error, setError] = useState("");
  const [bikers, setBikers] = useState([]);
  const [options, setOpt] = useState(false);
  const [redirectToLogin, setRedirectToLogin] = useState(false); // State to handle redirection
  // Remove navigate
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
      if (!data) throw error;
      console.log(data);
    } catch (err) {
      if (err) {
        setRedirectToLogin(true); // Set state to true for redirection
      }
    }
  };
  useEffect(() => {
    callAboutPage();
  }, []);
  // Remove redirectTo function

  if (redirectToLogin) {
    // Redirect to the login page if redirectToLogin is true
    return <Redirect to="/users/login" />;
  }

  return (
    <div style={{ fontFamily: "Lato, sans-serif", lineHeight: "30px",backgroundColor:"grey" }} >
      <div id="wrapper">
        {/* <DashNav /> */}
        <div id="page-wrapper">
          <div id="page-inner">
            <div className="row"></div>
            <div className="row">
              <div className="col-lg-12 "></div>
            </div>
            <div className="row">
              <div className="col-lg-12">{/* <SearchBar/> */}</div>
            </div>
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bkbud;
