import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import rd3 from 'react-d3-library';
import data from "./data.json"
const RD3Component = rd3.Component;

function DataLoader(props) {

  return (
    props.data.map(item => 

      <div>{item.Alias}</div>
    )
  )

}

function App() {

  const [d3, setd3] = useState("")

  return (
    <div className="App">
      <header className="App-header">

        <DataLoader data={data}/>
      <RD3Component data={d3} />
      </header>
    </div>
  );
}

export default App;
