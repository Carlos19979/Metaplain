import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function CardView3D(props) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-separate mb-3">
      <img className="w-full" src={props.img} alt="Sunset in the mountains" />
      <div className="px-6 py-4 flex">
        <div className="font-bold text-xl mb-2 text-left w-3/6 ">{props.name}</div>
        <div className='w-3/6 text-right'>{props.iniciada}</div>
      </div>
      <div className='display: flex pl-4'>
        <FaMapMarkerAlt/>
        <p className="text-gray-700 text-base text-left pl-2">
          {props.desc}
        </p>

      </div>


    </div>
  )
}
