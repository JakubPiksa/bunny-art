
import GoogleMapReact from 'google-map-react';

import dotenv from 'dotenv';
dotenv.config();

export default function SimpleMap() {

  const apiKey = process.env.MAPS_KEY;

  if (!apiKey) {
    console.error("Google Maps API key is missing. Make sure you have set it in your .env file.");
    return null; 
  }

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      />
    </div>
  );
}
