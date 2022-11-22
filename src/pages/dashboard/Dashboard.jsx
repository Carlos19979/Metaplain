import React from 'react'
import CardViewList from '../../components/list/CardViewList'
import '@google/model-viewer';


export default function Dashboard() {


  let cardView = [
    { name: "Paseo al Mar", desc: "Valencia" , iniciada:"Obra iniciada", img: "/ficsafinca.jpg" },
  ];

  
  return (
    <div>
      <CardViewList props={cardView}>
      </CardViewList> 
    </div>

  )

}



