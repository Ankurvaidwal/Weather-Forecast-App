import React from 'react'
import { TiWeatherPartlySunny } from "react-icons/ti";

import { weatherContext } from '../providers/WeatherProvider';
import ToggleSwitch from './ToggleSwitch';

const NavBar = () => {
    const { weatherData } = weatherContext();

    return (
        <div className=' mx-auto px-24 lg:mb-20 flex  gap-10 items-center justify-between py-6'>
            <div className='flex text-4xl items-center gap-1'>
                <TiWeatherPartlySunny className='text-yellow-500 bg-white rounded-sm' />
                <span className='text-white'>WeatherApp</span>
            </div>
            <ToggleSwitch cityName={weatherData?.city} />
        </div>
    )
}

export default NavBar