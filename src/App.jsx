import { useState } from 'react';
import './App.css'
import Button from './Components/Button/Button';
import Timer from './Components/Timer/Timer';

function App() {

  const [timer, setTimer] = useState(1500);
  const [playButton, setPlayButton] = useState(true);

  function handleClick(name) {
    console.log(`deu certo ${name}`)
  }

  return (
    <div className="App">
      <h2>Pomodoro timer</h2>
      <Timer timer={timer} />
      <div className="buttons">
        <Button onClick={handleClick} name='start' />
        <Button onClick={handleClick} name='pause' />
        <Button onClick={handleClick} name='reset' />
      </div>
    </div>
  );
}

export default App;
