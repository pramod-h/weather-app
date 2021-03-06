import React, { Component } from 'react';

import './weather.style.scss';

class WeatherCard extends Component {

    constructor(props){
        super(props)
        this.state = {
            date: new Date().toDateString()
        }
    }

    render() { 
        const { weatherData } = this.props
        const{ name, country, coord:{lon, lat}, weather:{clouds:{humidity}, 
        summary:{title,description}, temperature:{actual}, 
        wind:{speed}} } = weatherData.getCityByName;
        return ( 
            <div className="weather">
                <div className="weather-card">
                    <p className="date">{this.state.date}</p>
                    <div className="first-row">
                        <div>
                            <p className="first-row-temp">{parseInt(actual-273.15)}°</p>
                            <span className="temp-details">{title}</span>
                        </div>
                        <p className="first-row-name">{name}, {country}</p>
                    </div>
                </div>
                <div className="bottom-bar">
                  <div>
                      <p>Co-ords</p>
                      <p>{lon}, {lat}</p>
                  </div>
                  <div>
                      <p>Summary</p>
                      <p>{title}</p>
                  </div>
                  <div>
                      <p>Desc</p>
                      <p>{description}</p>
                  </div>
                  <div>
                      <p>Humidity</p>
                      <p>{humidity}%</p>
                  </div>
                  <div>
                      <p>Wind</p>
                      <p>{speed}mph</p>
                  </div>
                </div>
            </div>
         );
    }
}
 
export default WeatherCard;