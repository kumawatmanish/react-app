import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  
  state = {
    persons: [
      {id: 'hghv1', name: 'Neha', age: 26},
      {id: 'hkjv1', name: 'Nitu', age: 24},
      {id: 'hsdv1', name: 'Ammu', age: 21}
    ],
    showsPerson: false
  };

  switchNameHandler = (newName) => {
    this.setState({persons:[
      {name: newName, age: 26},
      {name: 'Nitu', age: 25}
    ]});
    };

  nameChangedHandler = (event, id) => {
    // find particular element
    const personIndex = this.state.persons.findIndex(p => 
                  p.id === id
    );
    //get particular array in new array/copy
    const person = {...this.state.persons[personIndex]};
    //changing value
    person.name = event.target.value;
    // get original persons in new array/copy/assign
    const persons = [...this.state.persons];
    // update copy
    persons[personIndex] = person;
    // update previou state with new updated coppied state
    this.setState({persons: persons});
  };

  toggelPersonHandler = () => {
    const doesShow = this.state.showsPerson;
    this.setState({showsPerson: !doesShow}); 
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});

  };
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
    };
    const classes = [];
    if(this.state.persons.length <=2)
    {
      classes.push('red');
    }
    if(this.state.persons.length <=1)
    {
      classes.push('bold');
    }

    let persons = null;

    if(this.state.showsPerson){
      persons = (
        <div>
          {this.state.persons.map((person, index)=> {
            return <Person name = {person.name}
                    age = {person.age}
                    key = {person.id}
                    click = {() => this.deletePersonHandler(index)} 
                    changed = {(event) => {this.nameChangedHandler(event, person.id)}}/>
          })}
        </div>
        );
        style.backgroundColor = 'red';
       
    }

    return (
      <div className="App">
        <h1>hi, I m React app</h1>
        <p className = {classes.join(' ')}>Hey, is it working!!!</p>
        <button style = {style} onClick = {this.toggelPersonHandler}> Toggel Persons</button>
        {persons}
         
      </div>
    
    );
  }
}

export default App;
  