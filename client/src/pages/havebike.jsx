import React, { useState, useEffect } from "react";
import axios from "axios";
import DashNav from "../components/DashNav";
import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HaveBike() {
  const [bikeno, setBike] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [licensecheck, setLicense] = useState(false);
  const [helmetcheck, setHelmet] = useState(false);
  const [location, setLocation] = useState("Bibwewadi");
  const [department, setDept] = useState("");
  const [year, setYear] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const callAboutPage = async () => {
      try {
        const res = await axios.get("http://localhost:5000/about", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "token": localStorage.getItem("token"),
          },
          credentials: "include",
        });
        const data = await res.data;
        console.log(data);
      } catch (err) {
        if (isMounted) {
          if (err.response && err.response.status === 401) {
            setRedirect(true);
          }
        }
      }
    };

    callAboutPage();

    // Cleanup function: set isMounted to false when the component is unmounted
    return () => {
      isMounted = false;
    };
  }, []);

  const Submit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        "http://localhost:5000/biker",
        {
          bikeno,
          phoneno,
          licensecheck,
          helmetcheck,
          location,
          department,
          year,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(result.data);
      setRedirect(true);

      // Show success toast notification
      toast.success("Record successfully sent to the database!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (err) {
      if (err.response) {
        console.error("Error response from server:", err.response.data);
      } else if (err.request) {
        console.error("No response received from server:", err.request);
      } else {
        console.error("Error during request setup:", err.message);
      }
    }
  };

  // Adding setTimeout for a demo (adjust the delay as needed)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Your code here...
    }, 5000); // 5000 milliseconds (adjust as needed)

    // Cleanup function to clear the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, []);

  if (redirect) {
    return <Redirect to="/bike_buddy" />;
  }

  return (
    <div>
      <div id="wrapper">
        <DashNav />
        <div id="page-wrapper">
          <div id="page-inner">
            <div className="row"></div>
            <div className="row">
              <div className="col-lg-12 "></div>
            </div>
            <div className="content">
              <h3>Hello, Enter Information</h3>
              <form onSubmit={Submit}>
                <div className="user-details">
                  {/* ... (unchanged) ... */}
                  <div className="input-box">
                    <span className="details">Vehicle No.</span>
                    <input
                      type="varchar"
                      name="bikeno"
                      placeholder="ST00VR2022"
                      onChange={(e) => setBike(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="text"
                      name="phoneno"
                      placeholder="Phone Number"
                      onChange={(e) => setPhoneno(e.target.value)}
                      required
                    />
                  </div>
                  <div className="checkbox-wrapper-19">
                    <input
                      type="checkbox"
                      id="cbtest-19"
                      name="licensecheck"
                      onChange={() => setLicense(!licensecheck)}
                      checked={licensecheck}
                      required
                    />
                    <span>I have Driver's License</span>&emsp;
                    <input
                      type="checkbox"
                      id="cbtest-20"
                      name="helmetcheck"
                      onChange={() => setHelmet(!helmetcheck)}
                      checked={helmetcheck}
                    />
                    <span>Extra Helmet</span>
                  </div>
                  <div className="input-box">
                    <span className="details">Location</span>
                    <select
                      name="location"
                      className="box"
                      onChange={(e) => setLocation(e.target.value)}
                      required>
                      <option value="Bibwewadi" name="Bibwewadi">
                        Bibwewadi
                      </option>
                      <option value="Katraj" name="Katraj">
                        Katraj
                      </option>
                      <option value="Vishrantwadi" name="Vishrantwadi">
                        Vishrantwadi
                      </option>
                      <option value="Hadapsar" name="Hadapsar">
                        Hadapsar
                      </option>
                      <option value="Pimpri Chinchwad" name="Pimpri Chinchwad">
                        Pimpri Chinchwad
                      </option>
                    </select>
                  </div>
                  <div className="input-box">
                    <span className="details">Department</span>
                    <select
                      name="department"
                      className="box"
                      onChange={(e) => setDept(e.target.value)}
                      required>
                      <option value="CS" name="CS">
                        CS
                      </option>
                      <option value="IT" name="IT">
                        IT
                      </option>
                      <option value="ENTC" name="ENTC">
                        ENTC
                      </option>
                      <option value="AIDS" name="AIDS">
                        AIDS
                      </option>
                      <option value="EC" name="EC">
                        EC
                      </option>
                    </select>
                  </div>
                  <div className="input-box">
                    <span className="details">Year</span>
                    <select
                      name="year"
                      className="box"
                      onChange={(e) => setYear(e.target.value)}
                      required>
                      <option value="FE" name="FE">
                        FE
                      </option>
                      <option value="SE" name="SE">
                        SE
                      </option>
                      <option value="TE" name="TE">
                        TE
                      </option>
                      <option value="BE" name="BE">
                        BE
                      </option>
                    </select>
                  </div>
                </div>
                <div className="button">
                  <input
                    type="submit"
                    name="getp"
                    value="Get your Bike Partner"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default HaveBike;
