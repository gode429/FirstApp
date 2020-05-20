import React from 'react';
import CharComponent from './CharComponent';
import ValidationComponent from './ValidationComponent';
import UserInput from '../User/UserInput';
import style from './Char.module.css';

const Characters = (props) => {
    let characters = props.username.split(' ').map((ch, index) => {
        return <CharComponent text = {ch} key={index} clicked={() => props.change(index)}></CharComponent>
      });;
      return(
          <div className = {style.Characters}>
              <UserInput name = {props.username} changed = {props.changed}></UserInput>
              <ValidationComponent textsize = {props.textsize}></ValidationComponent>
               {characters}
          </div>
      )

};
export default Characters;