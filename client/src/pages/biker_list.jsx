import React from 'react';
import { useLocation } from 'react-router-dom';
import '../assets/css/bootstrap.css';
import '../assets/css/font-awesome.css';
import '../assets/css/custom.css';
import '../assets/css/style.css';
import '../assets/css/biker-card.css';
import BikerCard from '../components/BikerCard';
import DashNav from '../components/DashNav';
export default function BikerList() {
  const location = useLocation();
  const { bikers } = location.state;

  return (
    <>
    <DashNav />
      <div className="row" style={{ marginLeft: '300px',width:'100%' }}>
        {bikers.map((biker) => (
          <BikerCard
            biker={biker}
          />
        ))}
      </div>
    </>
  );
}
