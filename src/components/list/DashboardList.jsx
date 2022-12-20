import React from "react";
import CardViewDashboard from "../cardView/CardViewDashboard";
import { Link } from "react-router-dom";


export default function List({ props }) {

  return (
    <div className="sm:flex px-8 gap-10 py-8 ">
      {props.map((propsF, index) => (
        <Link to={"promotion/"+propsF.id}>
          <CardViewDashboard
            key={index}
            name={propsF.name}
            iniciada={propsF.begin}
            desc={propsF.desc}
            img={propsF.imgurl}
          ></CardViewDashboard>
        </Link>
      ))}
    </div>
  );
}
