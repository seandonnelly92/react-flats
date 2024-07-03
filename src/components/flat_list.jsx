import React from 'react';
import Flat from './flat';


const FlatList = ({ flats, selectFlat }) => {
  return (
    <div className="flat-list">
      {flats.map(flat => (
        <Flat flat={flat} />))}
    </div>
  );
};

export default FlatList;
