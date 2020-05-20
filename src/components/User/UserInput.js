import React from 'react';
import './User.css';

const UserInput = (props) =>{
    return (
        <div>
            <input type="text" value = {props.name} onChange = {props.changed}></input>
        </div>
    )
}
export default UserInput;