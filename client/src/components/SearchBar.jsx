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
        res = await axios.get("https://campusconnect-1.onrender.com/getallbikers");
      } else {
        res = await axios.post("https://campusconnect-1.onrender.com/bike_partner", {
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
      <form class="d-flex w-25 mx-auto m-4">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setLocation(e.target.value)} 
          value={location}/>
        <div className="dropdown">
          <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <button className="btn btn-outline-success">Filter</button>
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item"onClick={() => handleOptionClick("All")}>All</a></li>
            <li><a class="dropdown-item"onClick={() => handleOptionClick("Bibwewadi")}>Bibwewadi</a></li>
            <li><a class="dropdown-item"onClick={() => handleOptionClick("Katraj")}>Katraj</a></li>
            <li><a class="dropdown-item"onClick={() => handleOptionClick("Vishrantwadi")}>Vishrantwadi</a></li>
            <li><a class="dropdown-item"onClick={() => handleOptionClick("Hadapsar")}>Hadapsar</a></li>
            <li><a class="dropdown-item"onClick={() => handleOptionClick("Pimpri Chinchwad")}>Pimpri Chichwad</a></li>
          </ul>
        </div>
      </form>
      {options && (
      <div className="absolute mt-2 w-64 rounded-lg bg-white shadow-md z-10">
        <button className="block w-full py-2 px-4 text-left hover:bg-gray-100" onClick={() => handleOptionClick("All")}>All</button>
        <button className="block w-full py-2 px-4 text-left hover:bg-gray-100" onClick={() => handleOptionClick("Bibwewadi")}>Bibwewadi</button>
        <button className="block w-full py-2 px-4 text-left hover:bg-gray-100" onClick={() => handleOptionClick("Katraj")}>Katraj</button>
        <button className="block w-full py-2 px-4 text-left hover:bg-gray-100" onClick={() => handleOptionClick("Vishrantwadi")}>Vishrantwadi</button>
        <button className="block w-full py-2 px-4 text-left hover:bg-gray-100" onClick={() => handleOptionClick("Hadapsar")}>Hadapsar</button>
        <button className="block w-full py-2 px-4 text-left hover:bg-gray-100" onClick={() => handleOptionClick("Pimpri Chinchwad")}>Pimpri Chichwad</button>
      </div>)}
      <div className="grid grid-cols-3 gap-4 mx-auto">
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
