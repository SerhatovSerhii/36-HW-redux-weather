export interface WeatherInfo {
    country?: string,
    city?: string,
    temp?: number,
    sunset?: number,
    pressure?: number
}

export interface RootState {
    weatherInfo: WeatherInfo,
    message: string
    city: string,
    
}

export interface ReduxAction {
    type: string,
    payload: string
}