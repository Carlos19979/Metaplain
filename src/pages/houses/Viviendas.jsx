import React from "react";
import CardViewViviendaList from "../../components/list/CardViewViviendaList";
import "@google/model-viewer";
import dbLoader from "../../components/dbLoader/dbLoader";
import { useEffect, useState } from "react";

export default function Viviendas() {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const dbdata = dbLoader();
    var url = window.location.href;
    var startUrl = url.toString().split("/")[6];
   
    dbdata.forEach((element) => {
      if (element.id === startUrl) {
        setData(element?.houses);
      }
    });
  }, []);

  console.log(data)

  return (
    <div>
        <CardViewViviendaList props={data}/>
    </div>
  );
}
