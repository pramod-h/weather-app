import React, { Component } from 'react';
import WeatherCard from './weather.component';
import { weatherDispatcher } from '../../store/weatherApp';
import { connect } from 'react-redux';

class WeatherContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : null
        }
        this.props.fetchWeatherData()
    }

    render() {
        const { weatherData } =  this.props
        if(weatherData.length === 0) {
            return <div className="loading">Loading...</div>
        }
        return (
            <WeatherCard weatherData = {weatherData.data} />
        );
    }
}

/**
 * 
 * @param {*} state 
 * @returns 
 */
 export const mapStateToProps = (state) => ({
    weatherData: state.weatherData
})

/**
 * 
 * @param {*} dispatch 
 * @returns 
 */
export const mapDispatchToProps = (dispatch) => ({
 fetchWeatherData : () => weatherDispatcher.dispatchWeather(dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);
 