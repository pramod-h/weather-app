
const initialState = {
    weatherData : []
}

export const weatherReducer = (state = initialState, {type,payload}) => {
    switch(type){
        case 'GET_WEATHER' : 
        return {
            ...state,
            weatherData : payload
        }
        default: 
        return state;
    }
}

export default weatherReducer;