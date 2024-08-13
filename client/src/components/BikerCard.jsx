import React, { useState, useEffect } from 'react';
import Malelogo from '../assets/img/male.png';
import Femalelogo from '../assets/img/female.png';
import ThirdGenderLogo from '../assets/img/thirdgender.png';
import "../assets/css/biker-card.css"

const BikerCard = ({ biker }) => {
  const { _id, bikeno, phoneno, licensecheck, helmetcheck, location, department, year, image } = biker;
  const [userName, setUserName] = useState('');
  const [userLogo, setUserLogo] = useState(null);
  const [licenseChecked, setLicenseChecked] = useState(licensecheck);
  const [helmetChecked, setHelmetChecked] = useState(helmetcheck);
  const [gender, setGender] = useState('male');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await fetch(`https://campusconnect-1.onrender.com/api/users?phoneno=${phoneno}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const userData = await response.json();

        if (userData && userData.name && userData.gender) {
          setUserName(userData.name);
          setGender(userData.gender);
        } else {
          console.error('Invalid user data format:', userData);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserName();
  }, [phoneno]);

  useEffect(() => {
    setGender(gender.toLowerCase());
    setUserLogo(
      gender === 'male' ? Malelogo :
      gender === 'female' ? Femalelogo :
      ThirdGenderLogo
    );
  }, [gender]);

  const handleChatNowClick = () => {
    if (phoneno) {
      const whatsappURL = `https://wa.me/${phoneno}`;
      window.location.href = whatsappURL;
    } else {
      console.error('Phone number is not provided.');
    }
  };

  return (
    <div className="grid">
      <div className="product-card">
        <div className="user-logo" style={{ textAlign: 'center', height: '150px' }}>
          {image ? (
            <img className="mt-3" src={`https://campusconnect-1.onrender.com/uploads/` + image} alt="User Image" style={{ width: '150px',height:"150px" }} />
          ) : (
            userLogo && <img src={userLogo} alt={gender} style={{ width: '150px' }} />
          )}
        </div>
        <div className="product-details">
          <span className="product-catagory">{bikeno}</span>
          <h4>{userName}</h4>
          <p>{phoneno}</p>
          <p>License Check: <input type="checkbox" checked={licenseChecked} disabled /></p>
          <p>Helmet Check: <input type="checkbox" checked={helmetChecked} disabled /></p>
          <div className="product-bottom-details">
            <div className="product-price">
              <button className="product-button" onClick={handleChatNowClick}>Chat Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikerCard;
