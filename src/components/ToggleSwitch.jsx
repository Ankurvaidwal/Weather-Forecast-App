import React, { useState } from 'react'
import useWeather from '../hooks/UseWeather';
import { weatherContext } from '../providers/WeatherProvider';

const ToggleSwitch = ({ cityName }) => {
    const [isCelsius, setIsCelsius] = useState(true);
    const { setWeatherData } = weatherContext();
    // console.log(weatherData)
    const handleToggle = () => {
        setIsCelsius(!isCelsius);
        setWeatherData({ city: cityName, unit: !isCelsius ? 'metric' : 'imperial' })
    };

    useWeather({ cityName, unit: isCelsius ? 'metric' : 'imperial' });
    return (
        <div className="flex items-center">
            <span className="mr-2 text-gray-700">{isCelsius ? '°C' : '°F'}</span>
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={isCelsius}
                    onChange={handleToggle}
                />
                <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-500 transition-colors"></div>
                <span className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-full"></span>
            </label>
        </div>
    )
}

export default ToggleSwitch