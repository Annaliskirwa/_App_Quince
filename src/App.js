
import './App.css';
import BarChart from './Charts/BarChart';
import DoughnutChart from './Charts/DoughnutChart';

function App() {
  return (
    <div className="App">
      <h1>Chart js and restful apis</h1>
      <BarChart/>
      <DoughnutChart/>
    </div>
  );
}

export default App;