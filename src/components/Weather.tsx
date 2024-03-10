import { useSelector } from "react-redux";
import { RootState, WeatherInfo } from "../utils/types"



const Weather = () => {
    const weatherInfo = useSelector<RootState, WeatherInfo>(state => state.weatherInfo);
    const message = useSelector<RootState, string>(state => state.message)
    

    return (
        <div>
           <div className="infoWeath">{
            !message && <>
                <p>Location: {weatherInfo.country}, {weatherInfo.city}</p>
                <p>Temp: {weatherInfo.temp}</p>
                <p>Pressure: {weatherInfo.pressure}</p>
                <p>Sunset: {new Date(weatherInfo.sunset! * 1000).toLocaleTimeString()}</p>
            </>
        }
            <>{message}</>
        </div>
        </div>
    );
};
export default Weather


