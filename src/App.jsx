import { useEffect, useState } from 'react'
import './App.css'

function App() {


  useEffect( ()=> {

    let map = tt.map({
      key: import.meta.env.VITE_REACT_TOMTOM_API_KEY,
      container: "map",
    })


  }, []);


  return (

    <div></div>
    
  )
}

export default App
