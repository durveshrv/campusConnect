import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useNavigate } from 'react-router-dom';
import DashNav from "../components/DashNav";

const Studyinput = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [phoneno, setPhone] = useState('');
  const [platform, setPF] = useState('Google Meet');
  const [department, setDept] = useState('Computer Science');
  const [year, setYear] = useState('FE');
  const [meetlink1, setMeet] = useState('');
  const [appt, setAppt] = useState('');
  const [redirectToStudyOption, setRedirectToStudyOption] = useState(false);
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
  const Submit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post("http://localhost:5000/event", {
        name,
        subject,
        phoneno,
        platform,
        department,
        year,
        meetlink1,
        appt,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(result.data);
      setRedirectToStudyOption(true);
    } catch (err) {
      // Handle error
    }
  };

  if (redirectToStudyOption) {
    return <Redirect to="/study_option" />;
  }

  return (
    <body>
      {/* Your JSX structure */}
      <div id="wrapper">
        <DashNav/>
        <div id="page-wrapper">
          <div id="page-inner">
            <div className="row"></div>
            <div className="row">
              <div className="col-lg-12 "></div>
            </div>
            <div className="content">
              <form onSubmit={Submit}>
                <div className="user-details">
                  <div className="input-box">
                    <span className="details" autoComplete="off">
                      Name{' '}
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details" autoComplete="off">
                      Subject{' '}
                    </span>
                    <input
                      type="text"
                      name="sub"
                      placeholder="Subject"
                      required
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Phone No.</span>
                    <input
                      type="text"
                      name="phoneno"
                      placeholder="Enter your Phone No."
                      required
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Platform</span>
                    <select
                      name="platform"
                      className="box"
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
                  <div className="input-box">
                    <span className="details">Department</span>
                    <select
                      name="department"
                      className="box"
                      onChange={(e) => setDept(e.target.value)}
                      value={department}
                    >
                      <option value="Computer Science">CS</option>
                      <option value="InformationTechnology">IT</option>
                      <option value="Artificial Intelligence & Data Sc">AIDS</option>
                      <option value="Mechanical">Mechanical</option>
                      <option value="Chemical">Chemical</option>
                      <option value="Instrument">Instrumentation</option>
                    </select>
                  </div>
                  <div className="input-box">
                    <span className="details">Year</span>
                    <select
                      name="year"
                      className="box"
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
                  <div className="input-box">
                    <span className="details">Platform Link </span>
                    <input
                      type="text"
                      name="meetlink1"
                      placeholder="Meeting Link"
                      required
                      onChange={(e) => setMeet(e.target.value)}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Select a time:</span>
                    <input
                      type="datetime-local"
                      id="appt"
                      name="appt"
                      onChange={(e) => setAppt(e.target.value)}
                    />
                  </div>
                </div>
                <div className="button">
                  <input type="submit" name="getp" value="Get your Study Buddy" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Studyinput;
