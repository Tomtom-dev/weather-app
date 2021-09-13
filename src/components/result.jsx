import React from 'react'
import { cityService } from '../services/httpService';



export  const Result = () => {

   cityService.getCity("lille")

    

    return (
        <div>
            mourtaerde
        </div>
    )
}
