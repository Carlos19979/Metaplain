import React from 'react'
import { useEffect, useState } from "react";
import dbLoader from "../../components/dbLoader/dbLoader";

export default function PlanArReal() {

    const modelViwerStyleMobile = {
        width: '100%',
        height: '100vh',
        marginTop: '3vh'
    }

    const [data, setData] = useState([]);
    useEffect(() => {
      const dbdata = dbLoader();
      var url = window.location.href;
      var promotionId = url.toString().split("/")[6];
      var houseId = url.toString().split("/")[9];
      var house = [];
  
      dbdata.forEach((element) => {
        if (element.id === promotionId) {
          house = element.houses;
        }
      });
  
      house.forEach((houset) => {
        if (houset.id === houseId) {
          setData(houset);
        }
      });
    }, []);

    return (
        <model-viewer src={data.real}  ar ar-modes="scene-viewer webxr quick-look" camera-controls poster="poster.webp" shadow-intensity="1" style={modelViwerStyleMobile}>
        <button slot="ar-button" id="ar-button" className='mb-40'>
            Ver en escala real
        </button>
        </model-viewer>
    )
}
