import React, { Component } from "react";


class Flat extends Component {
  // TODO: handle click
  render() {
    // Define each flat as the props from the parent (flat_list)
    // Each flat is an object called flat with keys and values (aka properties)
    const { flat } = this.props;

    return (
      <div className="flat" style={{ backgroundImage: `url(${flat.imageUrl})` }}>
        <p>{flat.price} {flat.priceCurrency}</p>
        <h3>{flat.name}</h3>
      </div>
    );
  }
}

export default Flat;
