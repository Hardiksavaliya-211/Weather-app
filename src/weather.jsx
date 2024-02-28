import React, { useEffect, useState } from 'react';
import './weather.css';
import Snow from './image/snow.png'
import Clear from './image/clear.png'
import Drizzle from './image/drizzle.png'
import Clouds from './image/clouds.png'
import Rain from './image/rain.png'
import humidity from './image/humidity.png'
import wind from './image/wind.png'
import Haze from './image/mist.png'
import Mist from './image/mist1.webp'
import Smoke from './image/smok1.webp'
import img from './image/mist.png'




const Weather = () => {
    const [city, setcity] = useState();
    const [search, setsearch] = useState("mumbai");
    const [mode, setmode] = useState("Clouds");
    const [data1, setdata] = useState();
    const change = (event) => {
        console.log(event.target.value);
    }
    // let mode;


    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=bf947d2ca38b832698988e75d839681f`;
            const response = await fetch(url);
            const data = await response.json();
            setcity(data.name);
            const k = data;
            setdata(data);
            // setmode(data.weather[0].main);
            //  mode="Haze";



        };
        fetchApi();
    }, [search])
    //    console.log(data1);
    //    console.log(data1)
    // let mode = data1.weather[0].main;
    function func1() {
        if (!city) { } else {



            if (data1.weather[0].main === 'Rain') {
                // console.log("ppppp")
                return (

                    <>
                        <img className="logo" src={Rain} alt="" />
                      
                    </>
                );
            } else if (data1.weather[0].main === 'Clouds') {
                // console.log("ppppp")
                return (

                    <>
                        <img className="logo" src={Clouds} alt="" />
                       
                    </>
                );
            } else if (data1.weather[0].main === 'Drizzle') {
                // console.log("ppppp")
                return (

                    <>
                        <img className="logo" src={Drizzle} alt="" />
                      
                    </>
                );
            } else if (data1.weather[0].main === 'Haze') {
                // console.log("ppppp")
                return (

                    <>
                        <img className="logo" src={Haze} alt="" />
                       
                    </>
                );
            } else if (data1.weather[0].main === 'Clear') {
                // console.log("ppppp")
                return (

                    <>
                        <img className="logo" src={Clear} alt="" />
                        
                    </>
                );
            }else if (data1.weather[0].main === 'Mist') {
                // console.log("ppppp")
                return (

                    <>
                        <img className="logo" src={Mist} alt="" />
                        
                    </>
                );
            }else if (data1.weather[0].main === 'Smoke') {
                // console.log("ppppp")
                return (

                    <>
                        <img className="logo" src={Smoke} alt="" />
                        
                    </>
                );
            }
            console.log(data1.weather[0].main)

        }

    }
    // console.log(link);
    return (
        <>
            <div className="main cont ">
                <div className="main2 glass">
                    <input type="text" placeholder="Enter City  Name" class="input1"
                        onChange={(event) => { setsearch(event.target.value) }} />
                    {
                        !city ? (<p> city not found</p>) : (<div>
                            {/* my=my(); */}
                            <h1>📍 {search}</h1>
                            <div className='photo'>
                                {func1()}
                            </div>
                            <div className="content">

                                <h2 className="value">{Math.round((data1.main.temp)-276)} <sup>o</sup> C</h2>
                            </div>
                            <div className="content2">weather
                                <h4>min | {Math.round((data1.main.feels_like)-276)} <sup>o</sup>C   max | {Math.round((data1.main.temp_max)-276)} <sup>o</sup>C</h4>

                            </div></div>)
                    }
                    <div></div>

                </div>
            </div>
        </>
    )
}

export default Weather;