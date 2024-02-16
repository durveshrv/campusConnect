import React from "react";
import { useLocation } from "react-router-dom";
import BikerCard from "../components/BikerCard";
import DashNav from "../components/DashNav";
export default function BikerList() {
  const location = useLocation();
  const { bikers } = location.state;

  return (
    <>
      <DashNav />
      <div className="row" style={{ width: "100%" }}>
        {bikers.map((biker) => (
          <BikerCard biker={biker} />
        ))}
      </div>
    </>
  );
}
