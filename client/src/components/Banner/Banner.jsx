import React, { useContext, useEffect, useState } from 'react';
import './Banner.css';
import Arrow from '../../Asset/Arrow';
import axios from '../../axios';
import { AuthContext } from '../../Store/Context';

function Banner() {
  const [categories, setCategories] = useState([]);
  const { setCategory } = useContext(AuthContext);

  useEffect(() => {
    axios.get('/getCategory')
      .then((response) => {
        if (response.data && response.data.categories && response.data.categories.length > 0) {
          setCategories(response.data.categories);
          // Set the category to 'ALL' initially
          setCategory('');
        } else {
          console.error("Categories data is missing or empty.");
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, [setCategory]);

  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <div>
              <select onChange={(event) => { setCategory(event.target.value); }}>
                <option value="">ALL</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>{category._id}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="otherQuickOptions">
            {categories.map((category) => (
              <span key={category._id}>{category._id}</span>
            ))}
          </div>
        </div>
        <div className="banner">
          <img
            src="https://github.com/Packapeer/React_tutorial_olx_clone/blob/main/public/Images/banner%20copy.png?raw=true"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
