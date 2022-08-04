import React, { Component } from "react";

class ItemDescription extends Component {
  render() {
    const { name, description } = this.props;
    return (
      <div>
        <p>{name}</p>
        <p>
          <i>{description}</i>
        </p>
      </div>
    );
  }
}

export default ItemDescription;
