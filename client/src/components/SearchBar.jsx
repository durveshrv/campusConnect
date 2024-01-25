import "../assets/css/SearchBar.css";
import { FaSearch } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import axios from "axios";
import BikerCard from '../components/BikerCard';

const SearchBar = () => {
  const [location, setLocation] = useState('All');
  const [error, setError] = useState('');
  const [bikers, setBikers] = useState([]);
  const [options, setOpt] = useState(false);

  const fetchData = async () => {
    try {
      let res;
      if (location === 'All') {
        res = await axios.get("http://localhost:5000/getallbikers");
      } else {
        res = await axios.post("http://localhost:5000/bike_partner", {
          location
        });
      }
      setBikers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [location]); // Fetch data when location changes

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchData(); // Fetch data when the form is submitted
  };

  const handleOptionClick = (location) => {
    setLocation(location);
    setOpt(false);
  };

  return (
    <>
      <div className="search-container">
        <input id="search-bar" style={{ width: "200px" }} type="text" onChange={(e) => setLocation(e.target.value)} value={location} placeholder="Search..." />
        <div className="search-icon" onClick={handleSubmit} style={{ cursor: "pointer" }}>
          <FaSearch size={24} />
        </div>
        <div className="filter-container">
          <button className="filter-button" onClick={() => setOpt(!options)}>
            Filter
          </button>
          {options && (
            <div className="filter-options-container show">
              <button onClick={() => handleOptionClick("All")}>All</button>
              <button onClick={() => handleOptionClick("Bibwewadi")}>Bibwewadi</button>
              <button onClick={() => handleOptionClick("Katraj")}>Katraj</button>
              <button onClick={() => handleOptionClick("Vishrantwadi")}>Vishrantwadi</button>
              <button onClick={() => handleOptionClick("Hadapsar")}>Hadapsar</button>
              <button onClick={() => handleOptionClick("Pimpri Chinchwad")}>Pimpri Chichwad</button>
            </div>
          )}
        </div>
      </div>
      <div className="row" style={{ marginLeft: '300px', width: '100%' }}>
        {bikers.map((biker) => (
          <BikerCard
            key={biker.id} // Add a unique key prop
            biker={biker}
          />
        ))}
      </div>
    </>
  );
};

export default SearchBar;
