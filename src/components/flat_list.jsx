import React from 'react';
import Flat from './flat';


const FlatList = ({ flats, selectFlat }) => {
  return (
    <div className="flat-list">
      {/* Map through the flats array (passed as props from app.jsx) */}
      {flats.map((flat, index, selectedFlat) => (
        // And for each item in the array render a Flat component, pass the whole flat object (each array item is an object)
        <Flat
          flat={flat} // pass the current flat
          key={flat.lat} // pass current flat's lat to be used as a key
          index={index}
          selected={flat.name === selectedFlat.name} // will return true if
          // selected flat name matches the the current flat's name
          selectFlat={selectFlat} // pass the selectFlat function down into the flat
        />))}
    </div>
  );
};

export default FlatList;
