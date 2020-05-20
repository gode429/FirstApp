import React from 'react';
import styles from './Char.module.css';

const CharComponent = (props) => {
    return (
        <div className = {styles.CharComponent} onClick={props.clicked}>
            <p> {props.text }</p>
        </div>
    )
}
export default CharComponent;