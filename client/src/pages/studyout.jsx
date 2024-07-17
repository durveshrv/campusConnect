import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import DashNav from "../components/DashNav";
import Event from "../components/Event";
function Studyout() {
  const [events, setEvents] = useState([]);
  const [options, setOpt] = useState(false);
  const [subject, setSubject] = useState("All");
  const fetchData = async () => {
    try {
      let res;
      if (subject === "All") {
        res = await axios.get("https://campusconnect-1.onrender.com/event_join");
      } else {
        res = await axios.post("https://campusconnect-1.onrender.com/getevents", {
          subject,
        });
      }
      setEvents(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [subject]); // Fetch data when location changes

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchData(); // Fetch data when the form is submitted
  };

  const handleOptionClick = (subject) => {
    setSubject(subject);
    setOpt(false);
  };
  return (
    <div style={{display:"flex"}}>
      {/* <DashNav /> */}
      <div className="wrapper">
      <form class="d-flex w-50 mx-auto m-4">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSubject(e.target.value)} 
          value={subject}/>
        <div className="dropdown">
          <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <button className="btn btn-outline-success">Filter</button>
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item"onClick={() => handleOptionClick("All")}>All</a></li>
            <li><a class="dropdown-item"onClick={() => handleOptionClick("dbms")}>DBMS</a></li>
            <li><a class="dropdown-item"onClick={() => handleOptionClick("cns")}>CNS</a></li>
            <li><a class="dropdown-item"onClick={() => handleOptionClick("os")}>OS</a></li>
            <li><a class="dropdown-item"onClick={() => handleOptionClick("dsa")}>DSA</a></li>
            <li><a class="dropdown-item"onClick={() => handleOptionClick("ml")}>ML</a></li>
          </ul>
        </div>
      </form>
      <div className="row"></div>
      <div id="wrapper">
        {/* /. NAV SIDE */}
        <Event events={events} />
      </div>
      </div>
    </div>
  );
}

export default Studyout;
