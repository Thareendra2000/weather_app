import React, {useState} from 'react'
import axios from 'axios'
import weather from './images/Sun-cloud-rain.png'

function App() {
  // API url
  //const url ="https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=e1c10de39471b526a19ff0ad309782c9"
  return (
    <body class=" bg-blue-700 grid place-items-center">
    <div className="text-white m-0 p-0 border-b max-w-xl " >
        {/* <!-- ------search bar------ --> */}
        <div className="p-8">
        
        </div>
        {/* <!-- --------middle section----- --> */}
        <div className="m-0 p-0  grid place-items-center">
            <p className=" text-2xl p-1 m-1">Dallas</p>
            <div className="p-16"><img src={weather} /></div>
            <h1 className="text-5xl p-1">30F</h1>
            <h2 className="text-xl p-3">Clear</h2>
        </div>
        {/* <!-- ---------bottom part------- --> */}
        <div className="m-0 p-2 bg-white text-black rounded-t-xl mx-16 flex justify-center">
            <div className="p-2 m-1 grid place-items-center">
                <p className="font-semibold text-black">72%</p>
                <p className="type">Feels Like</p>
            </div>
            <div className="p-2 m-1 grid place-items-center">
                <p className="font-semibold text-black">72%</p>
                <p className="type">Humitidy</p>
            </div>
            <div className="p-2 m-1 grid place-items-center">
                <p className="font-semibold text-black">2MPH</p>
                <p className="type">Winds</p>
            </div>
        </div>
    </div> 
    </body>
  );
}

export default App;
