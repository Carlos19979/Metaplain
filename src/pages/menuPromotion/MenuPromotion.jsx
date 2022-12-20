import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import dbLoader from "../../components/dbLoader/dbLoader";

export default function MenuPromotion() {
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
    <div className="lg:flex px-8 gap-3">
      <div className="relative py-7 h-36">
        <Link to={"real"}>
          <img
            className="w-full h-full filter brightness-50 relative border rounded-md border-black "
            src={data.photoMenu}
          />
          <p className="absolute text-2xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Realidad aumentada 1:1
          </p>
        </Link>
      </div>
      <div className="relative py-7  h-36 ">
        <a
          href="https://mywebar.com/p/Project_0_6jo0m6yq39"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-full h-full   filter brightness-50 relative border rounded-md border-black"
            src={data.photoMenu}
          />
          <p className="absolute text-2xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Plano Realidad aumentada
          </p>
        </a>
      </div>
      <div className="relative py-7  h-36">
        <a
          href="https://ficsa.es/promociones/paseo-al-mar/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-full h-full   filter brightness-50 relative border rounded-md border-black"
            src={data.photoMenu}
          />
          <p className="absolute text-2xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Mas informacion
          </p>
        </a>
      </div>
    </div>
  );
}
