import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class AddPerson extends Component {
  state = { name: '', age: null, biography: '', redirect: false }

  render () {
    if (this.state.redirect) {
      return <Redirect to='/Persons' />
    }
    return (
      <div>
        <h2>Add Person Page</h2>
        <form
          onSubmit={evt => {
            evt.preventDefault()
            this.props.addPerson(
              this.state.name,
              this.state.age,
              this.state.biography
            )
            this.setState({ redirect: true })
          }}
        >
          <input
            type='text'
            placeholder='enter name'
            onChange={evt => this.setState({ name: evt.target.value })}
          ></input>
          <br />
          <input
            type='number'
            placeholder='enter age'
            onChange={evt => this.setState({ age: evt.target.value })}
          ></input>
          <br />
          <textarea
            type='text'
            placeholder='enter biography'
            onChange={evt => this.setState({ biography: evt.target.value })}
          ></textarea>
          <br />
          <input type='submit' value={'addPerson'}></input>
        </form>
      </div>
    )
  }
}
