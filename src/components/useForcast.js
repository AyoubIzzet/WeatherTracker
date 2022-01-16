import axios from 'axios'
import { useState } from 'react';

import getCurrentDayForecast from './getCurrentDayForecast';
import getCurrentDayDetailedForecast from './getCurrentDayDetailedForecast';
import getUpcomingDaysForecast from './getUpcomingDaysForecast';
 

const BASE_URL = 'https://www.metaweather.com/api/location';
const CROSS_DOMAIN ='https://the-ultimate-api-challenge.herokuapp.com'; 
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;
 



const useForcast = () => {

    const [forecast, setForecast] = useState({weekday: '', date: '', location: '', temperature: '', weatherIcon:''});
    const [interDay, setinterDay] = useState([{}]);
    const [next, setNext] = useState([{}]);

    const getWoeid = async city => {

        const { data }  = await axios(`${REQUEST_URL}/search`, { params: { query: city } });
        return data[0]; 
    }

    const getForecastData = async woeid => {

        const { data } = await axios(`${REQUEST_URL}/${woeid}`)
        return data;

    }

    const gatherForecastData = (data) => {
        const currentDay = getCurrentDayForecast(data.consolidated_weather[0], data.title)
        const currentDayData = getCurrentDayDetailedForecast(data.consolidated_weather[0]);
        const weekData = getUpcomingDaysForecast(data.consolidated_weather)
     
        setForecast(currentDay)
        setinterDay(currentDayData)
        setNext(weekData)
        

    }
 
    const submitRequest = async (city) => {

        const response = await getWoeid(city);
        const data = await getForecastData(response.woeid);

        gatherForecastData(data);
        


    }

    
    

    return{
        submitRequest,
        forecast,
        interDay,
        next,
    };

}; 


export default useForcast
