import { useEffect, useRef, useState } from 'react';
import './App.css';
import * as tt from '@tomtom-international/web-sdk-maps';

function App() {

  const mapElement = useRef();
  const [map, setMap] = useState({});

  useEffect(() => {
    const apiKey = import.meta.env.VITE_REACT_TOMTOM_API_KEY;
    const url = `https://api.tomtom.com/map/2/copyrights/caption.json?key=${apiKey}`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });

    let map = tt.map({
      key: apiKey,
      container: mapElement.current,
    });

    setMap(map);
  }, []);

  return (
    <div>
      <div ref={mapElement}></div>
    </div>
  );
}

export default App;
