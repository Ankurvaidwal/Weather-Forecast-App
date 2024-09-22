import { useState, useEffect } from 'react';
import axios from 'axios';

const useCitySearch = (query) => {
    const [filteredCities, setFilteredCities] = useState([]);
    const mapboxToken = import.meta.env.VITE_TOKEN;

    useEffect(() => {
        const fetchCities = async () => {
            if (query) {
                try {
                    const response = await axios.get(
                        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json`,
                        {
                            params: {
                                access_token: mapboxToken,
                                autocomplete: true,
                                types: 'place',
                                limit: 20,
                            },
                        }
                    );
                    setFilteredCities(response.data.features);
                } catch (error) {
                    console.error('Error fetching city data:', error);
                }
            } else {
                setFilteredCities([]);
            }
        };


        console.log(filteredCities)
        const debounceFetch = setTimeout(fetchCities, 300);


        return () => clearTimeout(debounceFetch);
    }, [query, mapboxToken]);

    return { filteredCities };
};

export default useCitySearch;
