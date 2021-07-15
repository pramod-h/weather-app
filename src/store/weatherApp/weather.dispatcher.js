import { WEATHER_QUERY } from '../../query/query';
import { getWeather } from './weather.action';


export class weatherDispatcher {
    dispatchWeather(dispatch){
        fetch('https://graphql-weather-api.herokuapp.com/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: WEATHER_QUERY})
        })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                dispatch(getWeather(json))
            })
    }
}
 
export default new weatherDispatcher();