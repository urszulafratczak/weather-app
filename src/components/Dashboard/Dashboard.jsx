import React, { Component } from 'react';
import MainView from '../MainView/MainView';
import ForecastView from '../ForecastView/ForecastView';

import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <MainView/>
        <ForecastView/>
      </div>
    );
  }
}

export default Dashboard;
