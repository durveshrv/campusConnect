import React, { useState,useEffect } from 'react';
import './Create.css';
import axios from '../../axios';
import jwtDecode from 'jwt-decode';
import { Redirect } from 'react-router-dom';
import http from "../../services/httpService";
import { api } from "../../config.js";
function Create() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [phoneno, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState('');
  const [err, setErr] = useState('');
  const [user, setUser] = useState(null);
  const [redirectToHome, setRedirectToHome] = useState(false);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const jwt = localStorage.getItem("token");
        const user_jwt = jwtDecode(jwt);
        const user = await http.get(`${api.usersEndPoint}${user_jwt._id}`);
        setUser(user.data);
        setUsername(user.data.name);
        setPhone(user.data.phoneno);
        setEmail(user.data.email);
      } catch (ex) {
        // Handle errors if necessary
      }
    };

    fetchUser();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && username.trim() && phoneno.trim() && email.trim() && category.trim() && price.trim() && description.trim()) {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('username', username);
      formData.append('phoneno', phoneno);
      formData.append('email', email);
      formData.append('category', category);
      formData.append('price', price);
      formData.append('description', description);
      formData.append('file', file);

      axios.post('/addProduct', formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      }).then((response) => {
        if (!response.data.err) {
          setRedirectToHome(true);
        } else {
          setErr('Something went wrong');
        }
      });
    }
    else{
      setErr("All the fields are required")
    }
  };

  if (redirectToHome) {
    return <Redirect to="/buy_sell" />;
  }

  return (
    <>
      <card>
        <div className="centerDiv mt-5">
          <p style={{ height: '20px' }}>{err}</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="fname">Enter the Product Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input
              className="input"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <br />

            <label htmlFor="fname">Description</label>
            <br />

            <input
              className="input"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <br />
            <br />
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <br />
            <button type="submit" className="uploadBtn">
              Upload and Submit
            </button>
          </form>
        </div>
      </card>
    </>
  );
}

export default Create;
