import React from 'react';
import FlatList from './flat_list';
// Import the ARRAY of flats from the flats.js json
import flats from '../../data/flats';

const App = () => {
  return (
    <div className="container">
      <div className="left-side">
        <FlatList
        // Give FlatList the props that flats is an array of flats
          flats={flats}
        />
      </div>
      <div className="right-side">
        <h1>right side</h1>
      </div>
    </div>
  );
};

export default App;
