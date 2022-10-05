import React from 'react'
import { useState } from 'react'
export default function ImgSlider({ slides }) {

  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <div className='flex place-content-center'>
      <img className='rounded-2xl' alt='' src={slides[currentIndex].url} ></img>
    </div>
  )
}
