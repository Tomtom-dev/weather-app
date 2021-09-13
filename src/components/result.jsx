import React from 'react'
import { cityService } from '../services/httpService';



export  const Result = (props) => {

   cityService.getCity(props.city)

    

    return (
        <div>
            rendu de la recherche
        </div>
    )
}
