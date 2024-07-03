import React, { Component } from "react";


class Flat extends Component {
  // TODO: handle click
  render() {
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
