import React, {useState} from 'react'
import axios from 'axios'


function App() {
  // API url
  //const url ="https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=e1c10de39471b526a19ff0ad309782c9"
  return (
    <body class="bg-gradient-to-br from-blue-900 to-cyan-700 grid place-items-center m-0 h-screen">
    <div className="m-1 grid place-items-center" >
        <span className="material-symbols-outlined text-yellow-300 absolute top-5">filter_drama</span>
        <h1 className ="absolute top-10 text-4xl font-nunito text-yellow-200 pb-8">Weatherly</h1>
        {/* <!-- ------description------ --> */}
        <p className="px-2 py-2 w-3/5 text-xl text-white font-inter">
        Get real-time weather updates with our easy-to-use app. Check the forecast for your current location or search for a specific city. Stay informed with current temperature, humidity, wind speed, and more. Receive alerts for severe weather conditions and plan your day accordingly.
        </p>
    
        {/* <!-- ------search bar------ --> */}
        
        <input className=" mt-5 m-2 px-8 p-3 w-1/4 bg-amber-200 border-none rounded-full font-inter text-lg text-blue-800" type="text" placeholder="Enter Location"></input>
        
        {/* <!-- --------middle section----- --> */}
        <div className="m-3 p-3 w-auto rounded-lg  grid place-items-center text-white font-nunito">
        <span class="material-symbols-outlined">location_on</span><p className=" text-3xl  p-1 m-1 font-medium ">Dallas</p>
            <h1 className="text-5xl p-1">30<span>&#176;</span>C</h1>
            <h2 className="text-xl p-1">Clear</h2>
        </div>
        {/* <!-- ---------bottom part------- --> */}
        <div className="w-2/5 grid place-items-center font-inter">
            <div className="p-0 m-1 flex border-2 w-3/5 rounded-sm">
                <div className='m-0 p-2 w-4/5 text-white'>
                    <p className="type">Feels Like</p>
                </div>
                <div className='m-0 p-2 rounded-r-sm bg-white w-1/5 flex justify-center'>
                    <p className="font-semibold text-blue-900">30<span>&#176;</span>C</p>
                </div>
            </div>

            <div className="p-0 m-1 flex border-2 w-3/5 rounded-sm">
                <div className='m-0 p-2 w-4/5 text-white'>
                    <p className="type">Humidity</p>
                </div>
                <div className='m-0 p-2 rounded-r-sm bg-white w-1/5 flex justify-center'>
                    <p className="font-semibold text-blue-900">72%</p>
                </div>
            </div>

            <div className="p-0 m-1 flex border-2 w-3/5 rounded-sm">
                <div className='m-0 p-2 w-4/5 text-white'>
                    <p className="type">Wind Speed</p>
                </div>
                <div className='m-0 p-2 rounded-r-sm bg-white w-1/5 flex justify-center'>
                    <p className="font-semibold text-blue-900">2MPH</p>
                </div>
            </div>
        </div>
        <p className='absolute bottom-6  pt-5 mb-0 text-yellow-200'>Copyright <span>&copy;</span> 2023 Thareendra2000 </p>
    </div> 
    </body>
  );
}

export default App;
