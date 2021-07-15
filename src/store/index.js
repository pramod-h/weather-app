import {createStore} from 'redux';
import {weatherReducer} from './weatherApp/weather.reducer';

const store = createStore(weatherReducer);

export default store;