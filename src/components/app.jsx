import React, { Component } from 'react';
import FlatList from './flat_list';
// Import the ARRAY of flats from the flats.js json
import flats from '../../data/flats';
import Map from './map';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Set the initial selectedFlat to the first in the array
      selectedFlat: flats[0],
      // Set the flats to flats, this is shorthand for: flats: flats
      flats
    };
  }

  // create a function that changes the state of the
  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  };

  render () {
    return (
      <div className="container">
        <div className="left-side">
          <FlatList
            // Give FlatList the props that flats is an array of flats
            flats={this.state.flats}
            // Give Flatlist the selectedFlat state
            selectedFlat={this.state.selectedFlat}
            // Give FlatList the selectFlat function
            selectFlat={this.selectFlat}
          />
        </div>
        <div className="right-side">
          {/* render the map component and pass the selectedFlat into the map */}
          <Map selectedFlat={this.state.selectedFlat} />
        </div>
      </div>
    );
  }
};

export default App;
