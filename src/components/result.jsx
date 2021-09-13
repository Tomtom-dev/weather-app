import React from 'react'
import "./result.css"

export  const Result = (props) => {
    
    console.log(props.meteo)
  
    return  <div className="info">
                <h1> Meteo de : {props.meteo.name}</h1>

                <p>temperature : {props.meteo.main.temp - 273.15 } °C </p>
                <p>temperature minimale : {(props.meteo.main.temp_min - 273.15 )} °C </p>
                <p>temperature Maximale : {props.meteo.main.temp_max -273.15} °C </p>
                <p>ressentie : {props.meteo.main.feels_like -273.15} °C </p>
                <h3>Vent : </h3>
                <p>sens du vent : {props.meteo.wind.gust} </p>
                <p>vitesse du vent : {props.meteo.wind.speed} </p>
            </div>
    
}
