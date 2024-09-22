import React from 'react'
import { weatherContext } from '../providers/WeatherProvider';
import WeatherCard from './WeatherCard';
import useWeather from '../hooks/UseWeather';

const WeeklyWeather = () => {
    const { weatherData } = weatherContext();
    const { weeklydata, error } = useWeather({ cityName: weatherData?.city, unit: weatherData?.unit });
    const currUnit = weatherData?.unit == 'imperial' ? '°F' : '°C'

    if (error) {
        return;
    }
    return (
        <div className='flex flex-wrap justify-center items-center gap-5 my-10'>
            {
                weeklydata?.map((data, index) => (
                    <div key={index}>
                        <WeatherCard weatherData={data} unit={currUnit} />
                    </div>
                ))
            }
        </div>
    )
}

export default WeeklyWeather