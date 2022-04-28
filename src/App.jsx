import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Pomodoro timer</h1>
      <input type="range" />
      <select name="time" id="time">
        <option disabled selected value="">Select you option</option>
        <option value="1">25 : 5 minutes</option>
        <option value="1">50 : 15 minutes</option>
      </select>
    </div>
  );
}

export default App;
