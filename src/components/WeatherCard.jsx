import React from 'react'
import { getWeekDay } from '../utility/dateFormatter'

const WeatherCard = ({ weatherData, unit }) => {
    return (
        <div className='flex flex-col  justify-evenly border border-gray-300 rounded-lg px-10 py-5 shadow-md lg:w-[270px] w-[300px] h-auto sm:mx-1'>
            <img className='w-32 h-auto' src={`http://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`} alt="" />
            <p className='text-4xl text-white'>{getWeekDay(weatherData?.dt)}</p>
            <p className='text-lg italic text-gray-300'>{weatherData?.main.temp_min} / {weatherData?.main.temp_max}{unit}</p>
            {/* <p className='text-lg italic'>Max: {weatherData?.main.temp_max}</p> */}
        </div>
    )
}

export default WeatherCard