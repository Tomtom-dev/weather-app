import React, {useState} from 'react'
import { Result } from './result';

export default function Search() {

    const [citySearch, setCitySearch] = useState("")
    
    const handleOnChange =(event) => {     
            setCitySearch(event.target.value)    
    }

    return (
        <div>
            <input type="text" value={citySearch} onChange={handleOnChange} placeholder="search a city"/>
            <Result city={citySearch}></Result>
        </div>
    )
}
