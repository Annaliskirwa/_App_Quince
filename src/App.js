
import './App.css';
import BarChart from './Charts/BarChart';
import DoughnutChart from './Charts/DoughnutChart';
import LineChart from './Charts/LineChart';

function App() {
  return (
    <div className="App">
      <h1>Chart js and restful apis</h1>
      <BarChart/>
      <DoughnutChart/>
      <LineChart/>
    </div>
  );
}

export default App;