import { useState, useEffect } from 'react';
import axios from 'axios';

const useWeather = ({ cityName='New York', unit = 'metric' }) => {

    const [weatherWeeklyData, setWeatherWeeklyData] = useState(null);
    const [todaysData, setTodayWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const API_KEY = '84d322eb789d0396d08cbe714e3ff7e9';
    
    useEffect(() => {
        const fetchWeather = async () => {
            try {
                
                setLoading(true);
                setError(null);
                
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unit}&appid=${API_KEY}`);
                setTodayWeatherData(response.data);
                const { lat, lon } = response.data.coord;
                
                const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`);
                setWeatherWeeklyData(forecastResponse.data);
            } catch (err) {
                setError(err.response ? err.response.data.message : 'Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };
        
        if (cityName || unit) {
            fetchWeather();
        }
    }, [cityName, unit]);
    
    
    const getDailyForecasts = (data) => {
        const dailyForecasts = {};
        data.forEach((forecast) => {
            const date = new Date(forecast.dt * 1000).toLocaleDateString();
            if (!dailyForecasts[date]) {
                dailyForecasts[date] = forecast;
            }
        });
        return Object.values(dailyForecasts);
    };
    
    const weeklydata = weatherWeeklyData && getDailyForecasts(weatherWeeklyData.list)

    return { todaysData, weeklydata, loading, error };
};

export default useWeather;
