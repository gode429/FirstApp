import React from 'react';
import Person from './Person';
import style from './Person.module.css';

const  Persons = (props) => {
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
// export default React.memo(Persons);

//"memo" is for if we want react to re-render this component only if something in this component changes
//alternatively for class based components we use "shouldComponentUpdate" as in the commented code
// If your component changing depends on all props that are passed to that component, then
//  instead of checking for all props have changed or not, we can use "PureComponent". 
// This automatically checks for all props changing and based on that re-renders that component  


// class Persons extends Component{
//   shouldComponentUpdate (nextProps, nextState) {
//     if(nextProps.persons !== this.props.persons)
//       return false;
//       else
//     return true;
//   };
  
//     render() {
//      let persons = null;
//     if(this.props.showPersons){
//       persons = this.props.persons.map((person) => {
//         return <div className = {style.person}>            
//                 <Person name={person.name}
//                         age={person.age}
//                         key={person.id} 
//                         changed={event => this.props.changed(event, person.id)} >
//                         </Person>
//                 <p>Length of Name is : <b>{person.name.length}</b></p>
//             </div>
//       });
//     }
//       return(
//         <div>{persons}</div>  
//       )
//     }
// }

// export default Persons;


// If your component changing depends on all props that are passed to that component, then
//  instead of checking for all props have changed or not, we can use "PureComponent". 
// This automatically checks for all props changing and based on that re-renders that component  

//import PureComponent from 'react';
//class Persons extends PureComponent {
            // Now we don't need shouldComponentUpdate
  //   shouldComponentUpdate (nextProps, nextState) {
  //     if(nextProps.persons !== this.props.persons)
  //       return false;
  //       else
  //     return true;
  //   };
    
  //     render() {
  //      let persons = null;
  //     if(this.props.showPersons){
  //       persons = this.props.persons.map((person) => {
  //         return <div className = {style.person}>            
  //                 <Person name={person.name}
  //                         age={person.age}
  //                         key={person.id} 
  //                         changed={event => this.props.changed(event, person.id)} >
  //                         </Person>
  //                 <p>Length of Name is : <b>{person.name.length}</b></p>
  //             </div>
  //       });
  //     }
  //       return(
  //         <div>{persons}</div>  
  //       )
  //     }
  // }
  
  // export default Persons;


