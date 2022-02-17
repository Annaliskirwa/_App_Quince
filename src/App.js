import React from 'react';


import Homepage from './components/Homecomponent';


import './App.css';
import BarChart from './Charts/BarChart';
import DoughnutChart from './Charts/DoughnutChart';
import LineChart from './Charts/LineChart';
import PieChart from './Charts/PieChart';

function App() {
  return (
    <div className="App">
      <Homepage/>
      <h1>Chart js and restful apis</h1>
      <h2>Bar Chart</h2>
      <BarChart/>
      <h2>Doughnut Chart</h2>
      <DoughnutChart/>
      <h2>Line Chart</h2>
      <LineChart/>
      <h2>Pie Chart</h2>
      <PieChart/>
    </div>
  );
}

export default App;