import { WeatherInfo } from "../utils/types";

export const GET_WEATHER = 'GET_WEATHER';
export const GET_MESSAGE = 'GET_MESSAGE';
export const SET_WEATHER_INFO = 'SET_WEATHER_INFO';
export const GET_CITY = 'GET_CITY';

export const getCity = (city: string) => ({
    type: GET_CITY,
    payload: city
})


export const getWeather = (info: string) => ({
    type: GET_WEATHER,
    payload: info
})

export const getMessage = (mess: string) => ({
    type: GET_MESSAGE,
    payload: mess
})

export const setWeatherInfo = (weatherInfo: WeatherInfo) => {
    return {
        type: SET_WEATHER_INFO,
        payload: weatherInfo
    };
};
