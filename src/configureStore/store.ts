import { weatherReducer } from "../reducers/weatherReducer"
import { legacy_createStore as createStore } from "redux"




const initialState = {
    city: 'Write your citys name' ,
    message: '',
    weatherInfo: {}
}


export const store = createStore(weatherReducer, initialState)