import React, { useState,useEffect } from 'react'; // Import the CSS file
import "../assets/css/RoomCard.css"
const RoomCard = ({ room }) => {
  const { hostel_name, address, phoneno, department, year, room_type, image } = room;
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  useEffect(() => {
    const cardContainer = document.querySelector('.card-container');
    cardContainer.classList.add('visible');
  }, []);
  const handleChatNowClick = () => {
    if (phoneno) {
      const whatsappURL = `https://wa.me/${phoneno}`;
      window.location.href = whatsappURL;
    } else {
      console.error('Phone number is not provided.');
    }
  };
  return (
    <section className="w-100 m-5 text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto flex items-start card-container">
        <div className={`lg:w-1/2 w-50 lg:pr-10 lg:py-6 mb-6 lg:mb-0 ${showDetails ? 'details-show' : ''}`}>
          <h1 className="text-sm font-weight-bold title-font text-gray-500 tracking-widest font-bold">{hostel_name}</h1>
          <h3 className="text-gray-900 text-3xl title-font font-medium mb-4">{address}</h3>
          <p className={`leading-relaxed mb-4 ${showDetails ? 'block' : 'hidden'}`}>
            {`Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean. Phoneno: ${phoneno}`}
          </p>
          <div className="mb-4">
            <a onClick={toggleDetails} className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1 cursor-pointer" style={{textDecoration:"none",cursor:"pointer"}}>
              Description
            </a>
          </div>
          {showDetails && (
            <>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Department</span>
                <span className="ml-auto text-gray-900">{department}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Year</span>
                <span className="ml-auto text-gray-900">{year}</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">Room Type</span>
                <span className="ml-auto text-sm text-gray-900">{room_type}</span>
              </div>
            </>
          )}
          <div className="flex">
            <span className="title-font font-medium text-2xl text-gray-900">{/* Price value here */}</span>
            <button style={{width:"100px",alignItems:"flex-start"}} className="flex mt-4 btn-primary text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"  onClick={handleChatNowClick}>
              Chat
            </button>
            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
              </svg>
            </button>
          </div>
        </div>
        <img alt="ecommerce" style={{width:"280px"}} className="lg:w-1/2 mx-5 h-64 object-cover object-center rounded" src={`https://campusconnect-1.onrender.com/uploads/` + image} />
      </div>
    </section>
  );
};

export default RoomCard;
