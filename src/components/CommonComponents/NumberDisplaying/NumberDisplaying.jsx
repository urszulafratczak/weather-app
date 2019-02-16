import React, { Component } from 'react';
import './NumberDisplaying.css';

class NumberDisplaying extends Component {
  render() {
    const { number, unit } = this.props;
    return (
      <div className="number-display-cmp">
        <span>{number}{unit}</span>
      </div>
    );
  }
}

export default NumberDisplaying;
