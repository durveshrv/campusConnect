import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bg from "../assets/img/bg.jpeg";

export default function Studyinput() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [phoneno, setPhone] = useState("");
  const [platform, setPF] = useState("Google Meet");
  const [department, setDept] = useState("Computer Science");
  const [year, setYear] = useState("FE");
  const [meetlink1, setMeet] = useState("");
  const [appt, setAppt] = useState("");
  const [redirectToStudyOption, setRedirectToStudyOption] = useState(false);
  const [redirectToLogin, setRedirectToLogin] = useState(false);

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
      setRedirectToLogin(true);
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  if (redirectToLogin) {
    return <Redirect to="/users/login" />;
  }

  const Submit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        "https://campusconnect-1.onrender.com/event",
        {
          name,
          subject,
          phoneno,
          platform,
          department,
          year,
          meetlink1,
          appt,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(result.data);
      setRedirectToStudyOption(true);
    } catch (err) {
      // Handle error
    }
  };

  if (redirectToStudyOption) {
    return <Redirect to="/studyout" />;
  }

  return (
    <div style={{backgroundImage: `url(${bg})`, height: '100vh'}}>
      <div  style={{boxSizing: "border-box",
        margin: '0',
        padding: "0"}}>
        <div className="container-fluid text-light py-3">
          <header className="text-center">
            <h1 className="display-6">Hello, Enter Information</h1>
          </header>
        </div>
        <section className="container my-2 bg-dark w-50 text-light p-2">
          <form className="row g-3 p-3" onSubmit={Submit}>
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                className="form-control"
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6 mt-3">
              <label htmlFor="phoneno" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                name="phoneno"
                id="phoneno"
                placeholder="Enter your Phone No."
                className="form-control"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6 mt-3">
              <label htmlFor="platform" className="form-label">
                Platform
              </label>
              <select
                name="platform"
                id="platform"
                className="form-select bg-gray-100 rounded-lg p-2 w-100"
                onChange={(e) => setPF(e.target.value)}
                value={platform}
              >
                <option value="Google Meet">Google Meet</option>
                <option value="MICROSOFT TEAMS">Microsoft Teams</option>
                <option value="Zoom">Zoom</option>
                <option value="YOUTUBELIVE">YouTube Live</option>
                <option value="INVITCOLLEGE">InCollege</option>
              </select>
            </div>
            <div className="col-md-6 mt-3">
              <label htmlFor="department" className="form-label">
                Department
              </label>
              <select
                name="department"
                id="department"
                className="form-select bg-gray-100 rounded-lg p-2 w-100"
                onChange={(e) => setDept(e.target.value)}
                value={department}
              >
                <option value="Computer Science">CS</option>
                <option value="InformationTechnology">IT</option>
                <option value="Artificial Intelligence & Data Sc">
                  AIDS
                </option>
                <option value="Mechanical">Mechanical</option>
                <option value="Chemical">Chemical</option>
                <option value="Instrument">Instrumentation</option>
              </select>
            </div>
            <div className="col-md-6 mt-3">
            <label htmlFor="year" className="form-label">
                Year
              </label>
              <select
                name="year"
                id="year"
                className="form-select bg-gray-100 rounded-lg p-2 w-100"
                onChange={(e) => setYear(e.target.value)}
                value={year}
              >
                <option value="FE">FE</option>
                <option value="SE">SE</option>
                <option value="TE">TE</option>
                <option value="BE">BE</option>
                <option value="All">For all</option>
              </select>
            </div>
            <div className="col-md-6 mt-3">
              <label htmlFor="meetlink1" className="form-label">
                Platform Link
              </label>
              <input
                type="text"
                name="meetlink1"
                id="meetlink1"
                placeholder="Meeting Link"
                className="form-control"
                onChange={(e) => setMeet(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6 mt-3">
              <label htmlFor="appt" className="form-label">
                Select a time
              </label>
              <input
                type="datetime-local"
                id="appt"
                name="appt"
                className="form-control"
                onChange={(e) => setAppt(e.target.value)}
              />
            </div>
            <div className="col-12 mt-3">
              <button type="submit" className="btn btn-primary w-100">
                Create the Session
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
