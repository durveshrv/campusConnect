import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import axios from 'axios';
import DashNav from "../components/DashNav";
import Event from '../components/Event';
import "../assets/css/SearchBar.css";
function Studyout() {
  const [events, setEvents] = useState([]);
  const [options, setOpt] = useState(false);
  const [subject, setSubject] = useState('All');
  const fetchData = async () => {
    try {
      let res;
      if (subject=== 'All') {
        res = await axios.get("http://localhost:5000/event_join");
      } else {
        res = await axios.post("http://localhost:5000/getevents", {
          subject
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

    <div>
      <div className="search-container">
      <input id="search-bar" style={{width:"200px"}} type="text" onChange={(e) => setSubject(e.target.value)} value={subject} placeholder="Search..." />
      <div className="search-icon" onClick={handleSubmit} style={{cursor:"pointer"}}>
        {/* You can add your search icon component or image here */}
        {/* For example, you can use an SVG or an icon library */}
        <FaSearch size={24}/>
      </div>
      <div className="filter-container">
        <button className="filter-button" onClick={() => setOpt(!options)}>
          Filter
        </button>
        {options && (
          <div className="filter-options-container show">
            {/* Example filter options */}
            <button onClick={() => handleOptionClick("All")}>All</button>
            <button onClick={() => handleOptionClick("dbms")}>DBMS</button>
            <button onClick={() => handleOptionClick("cns")}>CNS</button>
            <button onClick={() => handleOptionClick("os")}>OS</button>
            <button onClick={() => handleOptionClick("dsa")}>DSA</button>
            <button onClick={() => handleOptionClick("ml")}>ML</button>
            {/* Add more filter options as needed */}
          </div>
        )}
      </div>
    </div>
    <div className="row" style={{ marginLeft: '300px',width:'100%' }}></div>
      <div id="wrapper">
        <DashNav/>
        {/* /. NAV SIDE */}
        <Event events={events} />
      </div>
    </div>
  );
}

export default Studyout;
