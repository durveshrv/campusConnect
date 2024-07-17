import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bg from "../assets/img/bg.jpeg";

export default function HaveBike() {
  const [bikeno, setBike] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [licensecheck, setLicense] = useState(false);
  const [helmetcheck, setHelmet] = useState(false);
  const [location, setLocation] = useState("Bibwewadi");
  const [department, setDept] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    let isMounted = true;

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
    const formData = new FormData();
    formData.append("bikeno", bikeno);
    formData.append("phoneno", phoneno);
    formData.append("licensecheck", licensecheck);
    formData.append("helmetcheck", helmetcheck);
    formData.append("location", location);
    formData.append("department", department);
    formData.append("year", year);
    formData.append("image", image);
    try {
      const result = await axios.post("https://campusconnect-1.onrender.com/biker", formData);

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
          <form className="row g-3 p-3" onSubmit={Submit}>
            <div className="col-md-6">
              <label htmlFor="bikeno" className="form-label">
                Vehicle No.
              </label>
              <input
                type="text"
                name="bikeno"
                id="bikeno"
                placeholder="ST00VR2022"
                className="form-control"
                onChange={(e) => setBike(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="phoneno" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                name="phoneno"
                id="phoneno"
                placeholder="Phone Number"
                className="form-control"
                onChange={(e) => setPhoneno(e.target.value)}
                required
              />
            </div>
            <div className="col-12 row g-3 p-3 mx-4">
              <div className="form-check">
                <input
                  type="checkbox"
                  id="licensecheck"
                  name="licensecheck"
                  className="form-check-input"
                  onChange={() => setLicense(!licensecheck)}
                  checked={licensecheck}
                  required
                />
                <label className="form-check-label" htmlFor="licensecheck">
                  I have Driver's License
                </label>
              </div>
              <div className="form-check mx-4">
                <input
                  type="checkbox"
                  id="helmetcheck"
                  name="helmetcheck"
                  className="form-check-input"
                  onChange={() => setHelmet(!helmetcheck)}
                  checked={helmetcheck}
                />
                <label className="form-check-label" htmlFor="helmetcheck">
                  Extra Helmet
                </label>
              </div>
            </div>
            <div className="col-md-6 g-3">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <select
                name="location"
                id="location"
                className="form-select bg-gray-100 rounded-lg p-2 w-100"
                onChange={(e) => setLocation(e.target.value)}
                required
              >
                <option value="Bibwewadi">Bibwewadi</option>
                <option value="Katraj">Katraj</option>
                <option value="Vishrantwadi">Vishrantwadi</option>
                <option value="Hadapsar">Hadapsar</option>
                <option value="Pimpri Chinchwad">Pimpri Chinchwad</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="department" className="form-label">
                Department
              </label>
              <select
                name="department"
                id="department"
                className="form-select bg-gray-100 rounded-lg p-2 w-100"
                onChange={(e) => setDept(e.target.value)}
                required
              >
                <option value="CS">CS</option>
                <option value="IT">IT</option>
                <option value="ENTC">ENTC</option>
                <option value="AIDS">AIDS</option>
                <option value="EC">EC</option>
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
                required
              >
                <option value="FE">FE</option>
                <option value="SE">SE</option>
                <option value="TE">TE</option>
                <option value="BE">BE</option>
              </select>
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
                Get Your Bike Partner
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
