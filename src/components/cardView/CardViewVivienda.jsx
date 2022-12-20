import React from "react";

export default function CardViewVivienda({ props }) {
  return (
    <div className="px-5">
      <div className="grid grid-cols-2 mt-20 border rounded-md border-black">
        <div className="col-span-2 bg-white  text-center font-medium rounded-md">
          {props.tittle}
        </div>

        <img
          className="w-full h-20 col-span-2 rounded-b-md"
          src={props.photoMenu}
        />
      </div>
    </div>
  );
}
