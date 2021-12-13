import './App.css'
import Home from './pages/Home'
import Persons from './pages/Persons'
import AddPerson from './pages/AddPerson'
import Details from './pages/Details'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Component } from 'react'

class App extends Component {
    persons= [
      { name: 'shmuel', age: 27, biography: 'i live in isreal' },
      { name: 'haim', age: 28, biography: 'i live in isreal' }
    ]

  addPerson = (name, age, biography) => {
    // const newPersons = [...this.persons]
    this.persons.push({ name, age, biography })
    // this.setState({ persons: newPersons })
  }

  currentName = ''
  currentAge = ''
  currentBiography = ''

  setCuurrentPerson = (name, age, biography) => {
    this.currentName = name
    this.currentAge = age
    this.currentBiography = biography

    console.log(name,age,biography);
  }

  render () {
    return (
      <BrowserRouter>
        <div className='App'>
          <Link to='/'>Home</Link> <Link to='/Persons'>Persons</Link> <hr />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route
              exact
              path='/Persons'
              render={() => (
                <Persons
                  setCuurrentPerson={this.setCuurrentPerson}
                  persons={this.persons}
                />
              )}
            />
            <Route
              exact
              path='/AddPerson'
              render={() => <AddPerson addPerson={this.addPerson} />}
            ></Route>
            <Route
              exact
              path='/Details'
              render={() => (
                <Details
                  name={this.currentName}
                  age={this.currentAge}
                  biography={this.currentBiography}
                />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
