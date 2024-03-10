import { api_key, base_url } from "../utils/constants"
import Form from "./Form";
import Weather from "./Weather";
import { RootState, WeatherInfo } from "../utils/types";
import { useDispatch, useSelector } from "react-redux";
import { SET_WEATHER_INFO, setWeatherInfo } from "../actions/weatherGetActions";

const Data = () => {
    //  Используем useState для хранения состояния компонента
    const weatherInfo = useSelector<RootState, WeatherInfo>(state => state.weatherInfo);
    const message = useSelector<RootState, string>((state) => state.message);
    const dispatch = useDispatch();
    //  Функция для получения информации о погоде по названию города
    const getWeather = async (city: string) => {
        //  Выполняем асинхронный запрос к API погоды
        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            // Получаем данные ответа в формате JSON
            const data = await response.json();
            // Обновляем состояние компонента с информацией о погоде
            dispatch(weatherInfo({
                city: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset
            }));
            // Очищаем сообщение об ошибке
            dispatch(setMessage(''));
        }
        .catch (e) {
            dispatch(setMessage('Enter correct city name'))}
    };
return (
    <div>
        {/* Рендерим компонент Form, передавая ему функцию getWeather */}
        <Form getWeather={getWeather} />
        {/* Рендерим компонент Weather, передавая ему сообщение и информацию о погоде */}
        <Weather />
    </div>
)

// Экспортируем компонент Data для использования в других частях проекта
export default Data





