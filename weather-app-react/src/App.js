import React, {useState} from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('') 

  // API url
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=e1c10de39471b526a19ff0ad309782c9`

  //function
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <body class="bg-gradient-to-br from-blue-900 to-cyan-700 grid place-items-center m-0 h-screen">
      {/* ------------------Main div------------- */}
      <div className="m-1 grid place-items-center" >
          <span className="material-symbols-outlined text-yellow-300 absolute top-5">filter_drama</span>
          <h1 className ="absolute top-10 text-4xl font-nunito text-yellow-200 pb-8">Weatherly</h1>
          {/* <!-- ------description------ --> */}
          <p className="px-2 py-2 w-3/5 text-xl text-white font-inter">
          Get real-time weather updates with our easy-to-use app. Check the forecast for your current location or search for a specific city. Stay informed with current temperature, humidity, wind speed, and more. Receive alerts for severe weather conditions and plan your day accordingly.
          </p>
      
          {/* <!-- ------search bar------ --> */}
          
          <input className=" mt-5 m-2 px-8 p-3 w-1/4 bg-amber-200 border-none rounded-full font-inter text-lg text-blue-800" type="text" value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation} placeholder="Enter Location" />
          
          {/* <!-- --------middle section----- --> */}
          <div className="m-3 p-3 w-auto rounded-lg  grid place-items-center text-white font-nunito">
            <span class="material-symbols-outlined">location_on</span><p className=" text-3xl  p-1 m-1 font-medium ">{data.name}</p>
            {data.main ? <h1 className="text-5xl p-1">{data.main.temp.toFixed()}°F</h1> : null}
            {data.weather ? <h2 className="text-xl p-1">{data.weather[0].main}</h2> : null}
          </div>
          {/* <!-- ---------bottom part------- --> */}
          <div className="w-2/5 grid place-items-center font-inter">
              <div className="p-0 m-1 flex border-2 w-3/5 rounded-sm">
                  <div className='m-0 p-2 w-4/5 text-white'>
                      <p className="type">Feels Like</p>
                  </div>
                  <div className='m-0 p-2 rounded-r-sm bg-white w-2/5 flex justify-center'>
                    {data.main ? <p className="font-semibold text-blue-900">{data.main.feels_like.toFixed()}°F</p> : null}
                  </div>
              </div>

              <div className="p-0 m-1 flex border-2 w-3/5 rounded-sm">
                  <div className='m-0 p-2 w-4/5 text-white'>
                      <p className="type">Humidity</p>
                  </div>
                  <div className='m-0 p-2 rounded-r-sm bg-white w-2/5 flex justify-center'>
                    {data.main ? <p className="font-semibold text-blue-900">{data.main.humidity}%</p> : null}
                  </div>
              </div>

              <div className="p-0 m-1 flex border-2 w-3/5 rounded-sm">
                  <div className='m-0 p-2 w-4/5 text-white'>
                      <p className="type">Wind Speed</p>
                  </div>
                  <div className='m-0 p-2 rounded-r-sm bg-white w-2/5 flex justify-center'>
                    {data.main ? <p className="font-semibold text-blue-900">{data.wind.speed.toFixed()} MPH</p> : null}
                  </div>
              </div>
          </div>
          {/* ---------copright quote--------- */}
          <p className='absolute bottom-6  pt-5 mb-0 text-yellow-200'>Copyright <span>&copy;</span> 2023 Thareendra2000 </p>
      </div> 
    </body>
  );
}

export default App;
