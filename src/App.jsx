import { useEffect, useState } from 'react'
import './App.css'
import * as tt from '@tomtom-international/web-sdk-maps';

function App() {

  const [map, setMap] = useState({});


  useEffect( ()=> {

    let map = tt.map({
      key: import.meta.env.VITE_REACT_TOMTOM_API_KEY,
      container: "map",
    })

    setMap(map);


  }, []);


  return (

    <div></div>
    
  )
}

export default App
