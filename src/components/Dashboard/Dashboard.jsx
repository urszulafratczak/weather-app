import React, { Component } from 'react';
import MainView from '../MainView/MainView';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <MainView/>
      </div>
    );
  }
}

export default Dashboard;
