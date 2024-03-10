import { GET_CITY, GET_MESSAGE, GET_WEATHER } from "../actions/weatherGetActions";
import { ReduxAction, RootState } from "../utils/types";

const initialState = { 
    city: 'Write your citys name',
    message: '',
    weatherInfo: {}
}

export const weatherReducer = (state: RootState = initialState, action: ReduxAction) => {

    switch (action.type) {
        case GET_CITY:
            return { ...state, city:action.payload }
        case GET_MESSAGE:
            return { ...state, message:action.payload }
        case GET_WEATHER:
            return { ...state, city:action.payload }
        default:
            return state;
    }
}