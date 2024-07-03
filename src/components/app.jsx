import React from 'react';
import FlatList from './flat_list';
import flats from '../../data/flats';

const App = () => {
  return (
    <div className="container">
      <div className="left-side">
        <FlatList
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
