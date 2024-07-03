import React from 'react';
import GoogleMapReact from 'google-map-react';

const SelectedFlat = ({ text }) => <div>{text}</div>;

const Map = () => {
  const defaultProps = {
    center: {
      lat: 48.884211,
      lng: 2.34689
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDVEbdKTCQufUhoN2TBv95H9Qv3L5kcPVg" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <SelectedFlat
          lat={50}
          lng={100}
          text="Pin!"
        />
      </GoogleMapReact>
    </div>
  );
}

export default Map;
