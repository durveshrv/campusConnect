import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashNav from "../components/DashNav";

const Shareroom = () => {
  const [hostelName, setHostelName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [department, setDepartment] = useState("AIDS");
  const [year, setYear] = useState("FE");
  const [roomType, setRoomType] = useState("");
  const [image, setImage] = useState("");
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
      const result = await axios.post("http://localhost:5000/room", formData);

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
      .get("http://localhost:5000/getroom")
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
  };

  return (
    <div style={{display:"flex"}}>
      <DashNav />
      <div className="container mx-auto p-5" style={{ width: "500px" }}>
        <div className="bg-gray-100 rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">Hello, Enter Details </h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6">
              <div className="mb-3">
                <label htmlFor="hostelName" className="form-label">
                  PG Name
                </label>
                <input
                  type="text"
                  name="hostelName"
                  id="hostelName"
                  placeholder="Enter your PG/Hostel Name"
                  className="form-input"
                  onChange={(e) => setHostelName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter your PG/Hostel's Address"
                  className="form-input"
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone No.
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Enter your Phone No."
                  className="form-input"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="department" className="form-label">
                  Department
                </label>
                <select
                  name="department"
                  id="department"
                  className="form-select"
                  onChange={(e) => setDepartment(e.target.value)}
                  value={department}
                >
                  <option value="CS">CS</option>
                  <option value="IT">IT</option>
                  <option value="AIDS">AIDS</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Chemical">Chemical</option>
                  <option value="Instrument">Instrument</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="year" className="form-label">
                  Year
                </label>
                <select
                  name="year"
                  id="year"
                  className="form-select"
                  onChange={(e) => setYear(e.target.value)}
                  value={year}
                  required
                >
                  <option value="FE">FE</option>
                  <option value="SE">SE</option>
                  <option value="TE">TE</option>
                  <option value="BE">BE</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="roomType" className="form-label">
                  Room Type
                </label>
                <input
                  type="text"
                  name="roomType"
                  placeholder="Enter Room's Type (Eg.1bhk)"
                  className="form-input"
                  onChange={(e) => setRoomType(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  Upload room images
                </label>
                <input
                  type="file"
                  name="image"
                  placeholder="Photos"
                  className="form-input"
                  onChange={onInputChange}
                  required
                  accept="image/*"
                />
                {/* {file && <img style={{ width: "50px" }} src={`http://localhost:5000/uploads/` + file} alt="image" />} */}
              </div>
              <div className="flex justify-center">
                <button type="submit" className="btn btn-primary">
                  Get your Room Partner
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shareroom;
