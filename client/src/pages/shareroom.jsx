import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bg from "../assets/img/bg.jpeg";

export default function Shareroom() {
  const [hostelName, setHostelName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [department, setDepartment] = useState("AIDS");
  const [year, setYear] = useState("FE");
  const [roomType, setRoomType] = useState("");
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("hostel_name", hostelName);
    formData.append("address", address);
    formData.append("phoneno", phoneNumber);
    formData.append("department", department);
    formData.append("year", year);
    formData.append("room_type", roomType);
    formData.append("image", image);

    try {
      const result = await axios.post("https://campusconnect-1.onrender.com/room", formData);

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

  useEffect(() => {
    axios
      .get("https://campusconnect-1.onrender.com/getroom")
      .then((res) => setImage(res.data[1].image))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Your code here...
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  if (redirect) {
    return <Redirect to="/roommate" />;
  }

  const onInputChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
    setImage(selectedFile);
    const imageUrl = URL.createObjectURL(selectedFile);
    setImageUrl(imageUrl);
  };

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
          <form className="row g-3 p-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
                <label htmlFor="hostelName" className="form-label">
                  PG Name
                </label>
                <input
                  type="text"
                  name="hostelName"
                  id="hostelName"
                  placeholder="Enter your PG/Hostel Name"
                  className="form-control"
                  onChange={(e) => setHostelName(e.target.value)}
                  required
                />
            </div>
            <div className="col-md-6">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter your PG/Hostel's Address"
                  className="form-control"
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
            </div>
            <div className="col-md-6 mt-3">
              <label htmlFor="phoneno" className="form-label">
                Phone Number
              </label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Enter your Phone No."
                  className="form-control"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
            </div>
            <div className="col-md-6 mt-3">
              <label htmlFor="department" className="form-label">
                Department
              </label>
              <select
                name="department"
                id="department"
                className="form-select bg-gray-100 rounded-lg p-2 w-100"
                onChange={(e) => setDepartment(e.target.value)}
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
                <label htmlFor="roomType" className="form-label">
                  Room Type
                </label>
                <input
                  type="text"
                  name="roomType"
                  placeholder="Enter Room's Type (Eg.1bhk)"
                  className="form-control"
                  onChange={(e) => setRoomType(e.target.value)}
                  required
                />
            </div>
            <div className="col-12 mt-3 row">
              <div className="mx-3">
                <label htmlFor="image" className="form-label">
                  Upload Profile Photo
                </label><br/>
                <input
                  type="file"
                  name="image"
                  placeholder="Photos"
                  className="form-input"
                  onChange={onInputChange}
                  required
                  accept="image/*"
                />
              </div>
              <div>
                {imageUrl && (
                  <img src={imageUrl} alt="Uploaded" style={{ width: "100px", height: "100px", marginTop: "10px" }} />
                )}
              </div>
            </div>
            <div className="col-12 mt-3">
              <button type="submit" className="btn btn-primary w-100">
                Get your Room Partner
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
