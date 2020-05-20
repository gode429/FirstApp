import React from 'react';
import './User.css';

const UserOutput = (props) => {
    return (
        <div className = "UserOutput">
            <p>This is {props.username}</p>
            <p>{props.children}</p>
        </div>
    )
}
export default UserOutput;