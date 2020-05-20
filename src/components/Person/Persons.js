import React from 'react';
import Person from './Person';
import style from './Person.module.css';
const Persons = (props) => {
    let persons = null;
    if(props.showPersons){
      persons = props.persons.map((person) => {
        return <div className = {style.person}>            
                <Person name={person.name}
                        age={person.age}
                        key={person.id} 
                        changed={event => props.changed(event, person.id)} >
                        </Person>
                <p>Length of Name is : <b>{person.name.length}</b></p>
            </div>
      });
    }
    return(
        <div>{persons}</div>  
    )
}

export default Persons;