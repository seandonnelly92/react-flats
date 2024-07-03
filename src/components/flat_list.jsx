import React from 'react';
import Flat from './flat';


const FlatList = ({ flats, selectFlat }) => {
  return (
    <div className="flat-list">
      {/* Map through the flats array (passed as props from app.jsx) */}
      {flats.map(flat => (
        // And for each item in the array render a Flat component, pass the whole flat object (each array item is an object)
        <Flat flat={flat} />))}
    </div>
  );
};

export default FlatList;
