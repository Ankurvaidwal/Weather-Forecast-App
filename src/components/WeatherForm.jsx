import React, { useEffect, useLayoutEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { weatherContext } from '../providers/WeatherProvider';
import useWeather from '../hooks/UseWeather';
import useCitySearch from '../hooks/UseCitySearch';

const WeatherForm = () => {
    const [city, setCity] = useState('New York');
    const [text, setText] = useState('');
    const { setWeatherData } = weatherContext();
    const [query, setQuery] = useState('');
    const { filteredCities } = useCitySearch(query);
    const [cities, setcities] = useState(filteredCities)
    useWeather({ cityName: city });

    const handleChange = (e) => {
        setQuery(e.target.value)
        setText(e.target.value)
    }

    const handleSelect = (city) => {
        console.log(city)
        setText(city.name);
        setCity(city.name);
        setQuery(null)
        setcities([])
    };

    useEffect(() => {
        setcities(filteredCities);
    }, [filteredCities])


    const handleSearch = (e) => {
        e.preventDefault();
        setWeatherData(prev => ({ ...prev, city: city }));
    };
    return (
        <form className='flex gap-3 flex-row justify-center  items-center my-6 md:my-14' onSubmit={handleSearch}>
            <div className="relative">

                <input className='rounded-lg border px-3 py-2 text-xl md:text-2xl'
                    type="text"
                    value={text}
                    onChange={handleChange}
                    placeholder="Search for a city"
                />
                {cities.length > 0 && (
                    <ul className="absolute z-20 bg-white border border-gray-300 max-h-48 overflow-y-auto w-full rounded mt-1">
                        {filteredCities.map((city) => (
                            <li
                                key={city.geonameId}
                                onClick={() => handleSelect(city)}
                                className="cursor-pointer p-2 hover:bg-gray-200"
                            >
                                {city.name} {/* Display city name */}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <button className='text-nowrap  rounded-lg text-xl md:text-2xl border border-white  text-white bg-transparent p-2 hover:bg-blue-500 hover:text-white hover:border-blue-500 hidden sm:inline' type="submit">Get Weather</button>
            <button className='text-nowrap  rounded-lg text-2xl md:text-2xl border border-white  text-white bg-transparent p-3 hover:bg-blue-500 hover:text-white hover:border-blue-500 inline sm:hidden' type="submit"><FaSearch /></button>
        </form>
    )
}

export default WeatherForm