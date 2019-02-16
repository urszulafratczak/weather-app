import React, { Component } from 'react';
import getDayName from './date.helper';
import './LocationWithDate.css';

class LocationWithDate extends Component {
  render() {
    const { city, date } = this.props;
    return (
      <div className="location-date-cmp">
        <div id="city">{city}</div>
        <div id="date">{getDayName(date)}</div>
      </div>
    );
  }
}

export default LocationWithDate;
