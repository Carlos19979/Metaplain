import React from 'react'
import CardViewList from '../../components/list/CardViewList'
import '@google/model-viewer';


export default function Dashboard() {


  let cardView = [
    { name: "Cullera hills", desc: "Valencia" , iniciada:"Obra iniciada", img: "https://static.wixstatic.com/media/196d19_96d41671a9b84ea5a2449f73b4c0d17d~mv2.png/v1/fill/w_523,h_409,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/196d19_96d41671a9b84ea5a2449f73b4c0d17d~mv2.png" },
  ];

  
  return (
    <div>
      <CardViewList props={cardView}>
      </CardViewList> 
    </div>

  )

}



