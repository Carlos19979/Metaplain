import React from 'react'

export default function CardView3D(props) {
  return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg border border-separate mb-3">
        <img className="w-full" src={props.img} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.name}</div>
          <p className="text-gray-700 text-base text-left">
          {props.desc}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Valencia</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Urbanización</span>
        </div>
      </div>       
  )
}
