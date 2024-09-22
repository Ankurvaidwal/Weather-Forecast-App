import React from 'react'
import { IoLocationSharp } from "react-icons/io5";

import { weatherContext } from '../providers/WeatherProvider';
import useWeather from '../hooks/UseWeather';
import WeatherForm from './WeatherForm';


const Hero = () => {
    const { weatherData } = weatherContext();

    const { todaysData, error } = useWeather({ cityName: weatherData?.city, unit: weatherData?.unit });

    // console.log(error, todaysData);
    const currUnit = weatherData?.unit == 'imperial' ? '°F' : '°C';

    return (
        <div className='mx-auto md:px-32 lg:my-20'>
            <WeatherForm />
            {error != null && <div className="flex justify-center items-center text-5xl text-white">{error}</div>}
            {(todaysData != null && error == null) && <div className=" flex flex-col lg:flex-row-reverse md:flex-row-reverse flex-wrap justify-evenly items-center sm:gap-2">
                <div className="flex-1 flex justify-center items-end h-max">
                    <img className='lg:w-52 w-40 h-auto' src={`http://openweathermap.org/img/wn/${todaysData?.weather[0]?.icon}@2x.png`} alt="" />
                </div>
                <div className="flex-1 flex flex-col h-max">
                    <p className='text-white text-center text-6xl text-nowrap'>{todaysData?.name} <IoLocationSharp className='inline text-[40px]' /></p>
                    <p className='text-white italic text-center text-5xl mt-10'> {todaysData?.main?.temp}{currUnit}  <span className='text-xl mt-2'>{todaysData?.weather[0]?.main}</span></p>
                </div>
            </div >}

        </div>
    )
}

export default Hero