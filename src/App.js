import React, {useEffect, useState} from 'react';
import './App.css';
import {generateMap} from "./map";
import {Map2D} from './Map2D';
import {Map3D} from "./Map3D";

function App() {
  const [map, setMap] = useState([0, 0, 0, 0]);
  useEffect(() => {
    let interval = setInterval(() => {
      const newMap = generateMap(map);
      if (newMap === map) {
        clearInterval(interval);
        interval = null;
      } else {
        setMap(newMap);
      }
    }, 1000);
    return () => {
      if(interval) clearInterval(interval);
    };
  });

  return (
    <div className="App">
      <header className="App-header">
        <Map2D map={map}/>
        <Map3D/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
