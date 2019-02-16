import React, { Component } from 'react';
import LocationWithDate from './LocationWithDate/LocationWithDate';
import NumberDisplaying from '../CommonComponents/NumberDisplaying/NumberDisplaying';
import './MainView.css';

class MainView extends Component {
  constructor(props){
    super(props);
    this.state = {
      city: 'Katowice',
      temperature: {
        day: 15,
        night: 3,
      },
      date: new Date(),
    };
  }

  render() {
    const { city, date, temperature } = this.state;
    return (
      <div className="main-view component">
        <LocationWithDate city={city} date={date}/>
        <NumberDisplaying
          number={temperature.day}
          unit={'°C'}
        ></NumberDisplaying>
      </div>
    );
  }
}

export default MainView;
