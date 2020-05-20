import React from 'react';

const ValidationComponent = (props) => {
    return (
        <div>
            <p> <b>{props.textsize > 5 ?  "Text long enough" :  "Text too short"} </b></p>
        </div>
    )
}
export default ValidationComponent;