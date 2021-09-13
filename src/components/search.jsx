import React, {  useState} from 'react'
import { Result } from './result';
import { cityService } from '../services/CityService'
import "./search.css"

// export const contextMeteo = React.createContext();

export default function Search() {


    

    const [citySearch, setCitySearch] = useState("")
    const [meteo, setMeteo] = useState({})
    const [sendReq, setSendReq] = useState(false)
    // console.log("meteo",meteo , Object.keys(meteo).length);

    const handleOnChange =(event) => {  
        setCitySearch(event.target.value)   
        cityService.findCity(citySearch).then(setMeteo) 
    }

    const sendRequest = () => {
        setSendReq(true)
        if( citySearch !== "" | null){
            console.log(meteo);
            
        }
    }

    return (
        <div > 
            <div className="searchInput"> 
                <input type="text" value={citySearch} onChange={handleOnChange} placeholder="search a city"/>
                <button onClick={sendRequest}>chercher</button>
            </div>      
            { sendReq === false  ?  <h2>entrez un nom de ville</h2> : <Result meteo={meteo}></Result> }
            
        </div>
    )
}
