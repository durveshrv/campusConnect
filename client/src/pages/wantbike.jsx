import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import NavbarSidebar from '../components/Navbar';

const Wantbike = () => {
  const [phoneNo, setPhoneNo] = useState('');
  const [location, setLocation] = useState('Chintamaninagar2'); // Default location
  const [department, setDepartment] = useState('AIDS'); // Default department
  const [year, setYear] = useState('BE'); // Default year
  const [gndr, setGnd] = useState('Male');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:3001/bike_partner", {
            location
        });

        console.log(response.data); 
        navigate('/biker_list', { state: { bikers: response.data } });
    } catch (err) {
      console.error(err);  // Log the complete error object
  
      if (axios.isAxiosError(err)) {
          // Axios-specific error handling
          console.error('Axios error details:', err.response.data);
          console.error('Status code:', err.response.status);
          console.error('Headers:', err.response.headers);
      }
  
      if (err.response && err.response.status === 401) {
          setError('Invalid email or password');
      } else {
          setError('An error occurred during login. Please try again.');
      }
  }
  };

  return (
    <div>
      <div id="wrapper">
        <NavbarSidebar/>
        <div id="page-wrapper">
          <div id="page-inner">
            <div className="content">
              <form onSubmit={handleSubmit}>
              {error && <div className="alert alert-danger">{error}</div>}
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">Phone No.</span>
                    <input
                      type="text"
                      placeholder="Enter your Phone No."
                      value={phoneNo}
                      onChange={(e) => setPhoneNo(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Location</span>
                    <select
                      name="location"
                      className="box"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    >
                      <option value="Bibwewadi" name="Bibwewadi">Bibwewadi</option>
                      <option value="Katraj" name="Katraj">Katraj</option>
                      <option value="Vishrantwadi" name="Vishrantwadi">Vishrantwadi</option>
                      <option value="Hadapsar" name="Hadapsar">Hadapsar</option>
                      <option value="Pimpri Chinchwad" name="Pimpri Chinchwad">Pimpri Chinchwad</option>
                    </select>
                  </div>
                  <div className="input-box">
                    <span className="details">Department</span>
                    <select
                      name="department"
                      className="box"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                    >
                      <option value="CS" name="CS">CS</option>
                      <option value="IT" name="IT">IT</option>
                      <option value="ENTC" name="ENTC">ENTC</option>
                      <option value="AIDS" name="AIDS">AIDS</option>
                      <option value="EC" name="EC">EC</option>
                    </select>
                  </div>
                  <div className="input-box">
                    <span className="details">Year</span>
                    <select
                      name="language"
                      className="box"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                    >
                      <option value="FE" name="FE">FE</option>
                      <option value="SE" name="SE">SE</option>
                      <option value="TE" name="TE">TE</option>
                      <option value="BE" name="BE">BE</option>
                    </select>
                  </div>
                </div>
                <div className="gender-details">
                  <input type="radio" name="gndr" id="dot-1" value="Male" checked={gndr === 'Male'} onChange={() => setGnd('Male')} required />
                  <input type="radio" name="gndr" id="dot-2" value="Female" checked={gndr === 'Female'} onChange={() => setGnd('Female')} required />
                  <input type="radio" name="gndr" id="dot-3" value="Prefer not to say" checked={gndr === 'Prefer not to say'} onChange={() => setGnd('Prefer not to say')} required />
                  <span>Gender</span>
                  <div className="category">
                    <label htmlFor="dot-1">
                      <span className="dot one"></span>
                      <span className="gender">Male</span>
                    </label>
                    <label htmlFor="dot-2">
                      <span className="dot two"></span>
                      <span className="gender">Female</span>
                    </label>
                    <label htmlFor="dot-3">
                      <span className="dot three"></span>
                      <span className="gender">Prefer not to say</span>
                    </label>
                  </div>
                </div>
                <div className="button">
                  <input type="submit" name="submit" value="Get your Bike Partner" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wantbike;
