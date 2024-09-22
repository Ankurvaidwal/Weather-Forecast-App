import { useState, useEffect } from 'react';
import axios from 'axios';

const useCitySearch = (query) => {
    const [filteredCities, setFilteredCities] = useState([]);
    const username = 'ksuhiyp';

    useEffect(() => {
        const fetchCities = async () => {
            if (query) {
                try {
                    const response = await axios.get(`http://api.geonames.org/searchJSON?username=${username}&q=${query}&maxRows=10&style=SHORT`);
                    setFilteredCities(response.data.geonames);
                } catch (error) {
                    console.error('Error fetching city data:', error);
                }
            } else {
                setFilteredCities([]);
            }
        };

        const debounceFetch = setTimeout(fetchCities, 300);


        return () => clearTimeout(debounceFetch);
    }, [query, username]);

    return { filteredCities };
};

export default useCitySearch;
