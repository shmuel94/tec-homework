import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class persons extends Component {
  state = { redirect: false, redirect2: false }

  render () {
    if (this.state.redirect) {
      return <Redirect to='/AddPerson' />
    }
    if (this.state.redirect2) {
      return <Redirect to='/Details' />
    }
    const personsElement = this.props.persons.map((person, index) => (
      <li key={index}>
        {person.name}, {person.age}{' '}
        <button
          onClick={() => {
            this.props.setCuurrentPerson(
              person.name,
              person.age,
              person.biography
            )
            this.setState({ redirect2: true })
          }}
        >
          Details
        </button>
      </li>
    ))
    return (
      <div>
        <h2>Persons Page</h2> <br />
        <button onClick={() => this.setState({ redirect: true })}>
          Add Person
        </button>
        <ul>{personsElement}</ul>
      </div>
    )
  }
}