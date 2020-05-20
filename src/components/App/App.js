import React, {Component} from 'react';
import './App.css';
import Counter from '../Counter/Counter' ;
import UserOutput from '../User/UserOutput';
import Characters from '../Character/Characters';
import Persons from '../Person/Persons';

//for "state" and "setState" code is below
class App extends Component {
  state = {
    persons : [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    username : "Type here",
    showPersons : true,
    textsize : 9,
  };
  
  changeNameHandler = (event,id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }
  togglePersonsHandler = () => {
    const toggleValue = this.state.showPersons;
    this.setState({
      showPersons : !toggleValue
    });
  };
  deleteCharHandler = ( index ) => {
    const text = this.state.username.split(' ');
    text.splice(index, 1);
    const updatedText = text.join(' ');
    this.setState({
      username: updatedText,
      textsize : updatedText.length,
    });
  }
  CharHandler = (event) => {
    this.setState({
      username : event.target.value,
      textsize : event.target.value.length,
    });
  }
  render(){
    return (
      <div className = "App">
        <Counter />
        <button onClick = {this.togglePersonsHandler}>Toggle Persons</button>
        <Persons showPersons = {this.state.showPersons} 
            persons = {this.state.persons}
            changed = {this.changeNameHandler}
            textsize = {this.state.textsize} />
        <div>
          <Characters username = {this.state.username}
                      textsize = {this.state.textsize}
                      changed = {this.CharHandler}
                      change = {this.deleteCharHandler} />
          
          <UserOutput username = {this.state.username}>I am a good person</UserOutput>
          <UserOutput username = {this.state.username}>I am a bihari and i love bhojpuri</UserOutput>
        </div>
      </div>
    );
  }
  
}

export default App;


// //for" useState" hook, code is below, we can use as many useState Hook as we want
// import React, {useState} from 'react';
// import './App.css';
// import Counter from './components/Counter' ;
// import Person from './Person/Person';

// const App = props => {
//   const [personsState, setPersonsState ] = useState({
//     persons : [
//             { name: 'Max', age: 28 },
//             { name: 'Manu', age: 29 },
//             { name: 'Stephanie', age: 30 }
//           ],
//     otherdetails : "after setting state this property will delete because we didnt set this property "
//   });
//   const [otherState, setOtherState] = useState('some other value');
//   const switchNameHandler = () => {
//     setPersonsState({
//       persons :  [
//         { name: 'Maximilian', age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: 'Stephanie', age: 31  }
//       ]
//     });
//   };
 
//   return (
//       <div className = "App">
//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//         <Person name={personsState.persons[1].name} age={personsState.persons[1].age} > My Hobbies: Racing </Person>
//         <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//         <Counter />
//       </div>
//         );
// };
// export default App;









