import React from 'react'
import DashboardList from '../../components/list/DashboardList'
import '@google/model-viewer';


export default function Dashboard() {


  let cardView = [
    { name: "Paseo al Mar", desc: "Valencia" , iniciada:"Obra iniciada", img: "/ficsafinca.jpg" },
  ];

  
  return (
    <div>
      <DashboardList props={cardView}>
      </DashboardList> 
    </div>

  )

}



