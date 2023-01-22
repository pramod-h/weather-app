import { WEATHER_QUERY } from '../../query/query';
import { getWeather } from './weather.action';


export class weatherDispatcher {
    dispatchWeather(dispatch){
        fetch('', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: WEATHER_QUERY})
        })
            .then(response => response.json())
            .then(json => dispatch(getWeather(json)))
    }
}
 
export default new weatherDispatcher();