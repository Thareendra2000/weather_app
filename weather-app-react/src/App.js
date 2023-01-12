import React, {useState} from 'react'
import axios from 'axios'
import weather from './images/w01.png'

function App() {
  // API url
  //const url ="https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=e1c10de39471b526a19ff0ad309782c9"
  return (
    <div className="app">
    {/* <!-- ------search bar------ --> */}
    <div className="search-bar">
    </div>
    {/* <!-- --------middle section----- --> */}
    <div className="w-data">
        <p className="city">Dallas</p>
        <div className="image-slider">
        <img src={weather} /> 
        </div>
        <h1 className="text-yellow-700">30F</h1>
        <h2 className="tag">Clear</h2>
    </div>
    {/* <!-- ---------bottom part------- --> */}
    <div className="bottom-bar">
        <div className="data-mini">
            <p className="data">72%</p>
            <p className="type">Humitidy</p>
        </div>
        <div className="data-mini">
            <p className="data">72%</p>
            <p className="type">Humitidy</p>
        </div>
        <div className="data-mini">
            <p className="data">72%</p>
            <p className="type">Humitidy</p>
        </div>
    </div>
   </div> 
  );
}

export default App;
