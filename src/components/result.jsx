import React,{useContext} from 'react'
import { cityService } from '../services/CityService'
import { httpService } from '../services/httpService'




export  const Result = (props) => {

    httpService.getCity(props.city)
    // const test =cityService.findCity("lille")
    // console.log(test);
    
    return (
        
        <div>
            <h1> Meteo de : {props.city}</h1>
            <h3>temperature</h3>
            <p>minimal : </p>
            <p>maximal : </p>
            <p>ressentie : </p>

            <h3>Vent : </h3>
            <p>sens du vent : </p>
            <p>vitesse du vent :  </p>
        </div>
    )
}
