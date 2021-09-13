import React, {useState} from 'react'

export default function Search() {

    const [citySearch, setCitySearch] = useState("")
    
    const handleOnChange =(event) => {     
            setCitySearch(event.target.value)    
    }

    function onSubmit(event){
        event.preventDefault();
        console.log(citySearch);
    }

    

    return (
        <div>
            <input type="text" value={citySearch} onChange={handleOnChange} placeholder="search a city"/>
            <button className="searchButton" onClick={onSubmit}>Submit</button>
        </div>
    )
}
