import React from 'react'
import {
  GoogleMap,Marker,useJsApiLoader 
} from '@react-google-maps/api'
  
const containerStyle = {
  position: "relative",
  width: '100%',
  height: '100%'
};

const center = {
  lat: 39.554,
  lng: -0.462
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyA2wDD7iYjp776GxqiBFZhNl-JO75K6TDs"
  })
  
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        markers={{lat:39.554,lng:-0.462}}
      >
        {   <Marker position={center}/>    }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)


