import React, { useEffect, useState } from "react";
import axios from "axios";
import RoomCard from "../components/RoomCard";
import DashNav from "../components/DashNav";
const Roomfinder = () => {
  const [rooms, setRooms] = useState([]); // Change here to initialize bikers as an array
  const fetchData = async () => {
    try {
      const res = await axios.get("https://campusconnect-1.onrender.com/getallrooms");
      setRooms(res.data);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{display:"flex"}}>
      {/* <DashNav /> */}
      <div className="wrapper">
        {rooms.map((room) => (
          <RoomCard room={room} />
        ))}
      </div>
    </div>
  );
};

export default Roomfinder;
