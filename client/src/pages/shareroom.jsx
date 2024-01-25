import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import DashNav from '../components/DashNav';
const Shareroom = () => {
  const [hostel_name,setName]=useState();
  const [address,setAddr]=useState();
  const [phoneno,setPhone]=useState();
  const [department,setDept]=useState();
  const [year,setYear]=useState();
  const [room_type,setRt]=useState();
  const [image,setImage]=useState();
  const [file,setFile]=useState();
  const [redirect, setRedirect] = useState(false);
  
  // useEffect(() => {
  //   let isMounted = true;

  //   const callAboutPage = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:5000/about", {
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //           "token": localStorage.getItem("token"),
  //         },
  //         credentials: "include",
  //       });
  //       const data = await res.data;
  //       console.log(data);
  //     } catch (err) {
  //       if (isMounted) {
  //         if (err.response && err.response.status === 401) {
  //           setRedirect(true);
  //         }
  //       }
  //     }
  //   };

  //   callAboutPage();

  //   // Cleanup function: set isMounted to false when the component is unmounted
  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('hostel_name', hostel_name);
    formData.append('address', address);
    formData.append('phoneno', phoneno);
    formData.append('department', department);
    formData.append('year', year);
    formData.append('room_type', room_type);
    formData.append('image', image);
  
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
    axios.get('http://localhost:5000/getroom')
      .then(res => setFile(res.data[1].image))
      .catch(err => console.log(err));
  }, []);
  // Adding setTimeout for a demo (adjust the delay as needed)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Your code here...
    }, 5000); // 5000 milliseconds (adjust as needed)

    // Cleanup function to clear the timeout when the component is unmounted
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
    <body>
      {/* Your JSX structure */}
      <div id="wrapper">
        <DashNav/>
        {/* /. NAV SIDE  */}
        <div id="page-wrapper">
          <div id="page-inner">
            <div className="row"></div>
            {/* /. ROW  */}
            <hr />
            <div className="row">
              <div className="col-lg-12 "></div>
            </div>
            <div className="row text-center pad-top">
              <div className="col-lg-12">
                <div className="content">
                  <h4>Hello, Enter Details </h4>
                  <form onSubmit={handleSubmit}>
                    <div className="user-details">
                      <div className="input-box">
                        <span className="name">PG Name</span>
                        <input type="text" name="name" placeholder="Enter your PG/Hostel Name" onChange={(e) => setName(e.target.value)} required />
                      </div>
                      <div className="input-box">
                        <span className="details">Address</span>
                        <input
                          type="text"
                          name="Address"
                          placeholder="Enter your PG/Hostel's Address"
                          onChange={(e) => setAddr(e.target.value)}
                          required
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">Phone No.</span>
                        <input type="text" name="phone" placeholder="Enter your Phone No."onChange={(e) => setPhone(e.target.value)} required />
                      </div>
                      <div className="input-box">
                        <span className="details">Department</span>
                        <select name="department" className="box"onChange={(e) => setDept(e.target.value)}>
                          <option value="CS">CS</option>
                          <option value="IT">IT</option>
                          <option value="AIDS" selected>AIDS</option>
                          <option value="Mechanical">Mechanical</option>
                          <option value="Chemical">Chemical</option>
                          <option value="Intrument">Instrument</option>
                        </select>
                      </div>
                      <div className="input-box">
                        <span className="details">Year</span>
                        <select name="year" className="box" onChange={(e) => setYear(e.target.value)} required>
                          <option value="FE" name="FE">
                            FE
                          </option>
                          <option value="SE" name="SE">
                            SE
                          </option>
                          <option value="TE" name="TE">
                            TE
                          </option>
                          <option value="BE" name="BE">
                            BE
                          </option>
                        </select>
                      </div>
                      <div className="input-box">
                        <span className="room_type">Room Type</span>
                        <input type="text" name="room_type" placeholder="Enter Room's Type (Eg.1bhk)" onChange={(e) => setRt(e.target.value)} required />
                      </div>
                      <div className="input-box">
                        <span className="photos">Upload room images</span>
                        <input type="file" name="image" placeholder="Photos" onChange={onInputChange} required accept="image/*"/>
                        {/* {file && <img style={{width:"50px"}} src={`http://localhost:5000/uploads/` + file} alt="image" />} */}
                      </div>
                    </div>
                    <div className="button">
                      <input type="submit" name="submit" value="Get your Room Partner" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /. WRAPPER  */}
        {/* SCRIPTS -AT THE BOTTOM TO REDUCE THE LOAD TIME*/}
        {/* JQUERY SCRIPTS */}
        <script src="assets/js/jquery-1.10.2.js"></script>
        {/* BOOTSTRAP SCRIPTS */}
        <script src="assets/js/bootstrap.min.js"></script>
        {/* CUSTOM SCRIPTS */}
        <script src="assets/js/custom.js"></script>
      </div>
    </body>
  );
};

export default Shareroom;
