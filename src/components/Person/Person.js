import React from 'react';
import style from './Person.module.css'
import UserInput from '../User/UserInput';

const person = (props) => {
    return (
        <div >
            <p><b>Hi  I am {props.name} and my age is {props.age} years </b></p>
            <UserInput value = {props.name} name = {props.name} changed = {props.changed} />  
        </div>   
    )
}

export default person;