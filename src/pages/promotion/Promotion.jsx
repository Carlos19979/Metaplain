import React from "react";
import "@google/model-viewer";
import GoogleMaps from "../../components/google-maps/GoogleMaps";
import { Link } from "react-router-dom";
import { FaHouseUser } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import dbLoader from "../../components/dbLoader/dbLoader";
import { useEffect } from "react";
import { useState } from "react";

export default function Promotion() {
  const modelViwerStyleMobile = {
    width: "100%",
    height: "30rem",
  };

  const [element, setElement] = useState([]);

  useEffect(() => {
    var url = window.location.href;
    var startUrl = url.toString().split("/")[6];
    const data = dbLoader();

    data.forEach((element) => {
      if (element.id === startUrl) {
        setElement(element);
      }
    });
  }, []);

  return (
    <div className="px-5">
      <model-viewer
        src={element?.facade3D}
        ar
        ar-modes="scene-viewer webxr quick-look"
        ar-scale="fixed"
        camera-controls
        poster="poster.webp"
        shadow-intensity="1"
        style={modelViwerStyleMobile}
      >
        <div className="update-bar"></div>
        <button slot="ar-button" id="ar-button" className="rounded-none">
          Ver en tu espacio
        </button>
      </model-viewer>
      <p className="py-9 text-left">{element?.descriptionMain}</p>

      <div className="grid grid-cols-2  mb-10">
        <a
          href={element?.web}
          className="ml-5 bg-white border rounded-md flex h-10"
          target="_blank"
          rel="noreferrer"
        >
          <FaGoogle className="mt-2 mx-2 text-lg" />
          <p className="mt-1 text-blue-400">Nuestra web</p>
        </a>
        <Link className="ml-5 bg-white border rounded-md flex" to="viviendas">
          <FaHouseUser className="mx-2 mt-2 text-lg" />
          <p className="mt-1 text-blue-400"> Ver viviendas</p>
        </Link>
      </div>

      <div className="h-80 py-7 sm:h-96">
        <GoogleMaps />
      </div>
    </div>
  );
}
