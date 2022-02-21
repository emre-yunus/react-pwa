import React from 'react';
import logo from './logo.svg';
import logo2 from './logo512.png'
import './App.css';
import {skip_waiting} from "./serviceWorkerRegistration";
import {sendNotification, stopNotification} from "./notificationManager";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo2} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reloaded.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={skip_waiting}>skip waiting</button>
        <div>
          <h2>notifications API</h2>
          <button onClick={sendNotification}>activate</button>
          <button onClick={stopNotification}>stop</button>
        </div>
        <div>
          <h2>notifications API (offline)</h2>
          <button onClick={sendNotification}>activate</button>
          <button onClick={stopNotification}>stop</button>
        </div>
      </header>
    </div>
  );
}

export default App;
