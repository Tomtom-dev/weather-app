import React from 'react'

export default function Temperature(props) {

    console.log('propp',props);
    return (
        <div>
            <p>minimal : {props} </p>
            <p>maximal : </p>
            <p>ressentie : </p>
        </div>
    )
}
