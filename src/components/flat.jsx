import React, { Component } from "react";


class Flat extends Component {
  // TODO: handle click
  handleClick = () => {
    // call the selectFlat function in the app file with the index of the clicked flat
    console.log(`Clicked flat index: ${this.props.index}`);
    this.props.selectFlat(this.props.index);
  }

  render() {
    // Define each flat as the props from the parent (flat_list)
    // Each flat is an object called flat with keys and values (aka properties)
    const { flat } = this.props;

    return (
      <div className="flat" style={{ backgroundImage: `url(${flat.imageUrl})` }} onClick={this.handleClick} >
        <p>{flat.price} {flat.priceCurrency}</p>
        <h3>{flat.name}</h3>
      </div>
    );
  }
}

export default Flat;
