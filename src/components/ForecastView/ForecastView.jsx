import React, { Component } from 'react';
import NumberDisplaying from '../CommonComponents/NumberDisplaying/NumberDisplaying';
import './ForecastView.css';

class ForecastView extends Component {
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
    const { temperature } = this.state;
    const forecastArr = [{}, {}, {}, {}, {}, {}];
    return (
      <div className="forecast-view component">
        {
          forecastArr.map((forecastDay) =>
            <NumberDisplaying
              number={temperature.day}
              unit={'°C'}
            ></NumberDisplaying>
          )
        }
      </div>
    );
  }
}

export default ForecastView;
