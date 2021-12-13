import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


export default class AddBook extends Component {
  state = { name: '', author: "", biography: '', numberOfPaGes: null, picture: "", redirect: false }

    render () {
        if (this.state.redirect) {
          return <Redirect to='/Books' />
        }
        return (
          <div>
            <h2>Add Book Page</h2>
            <form
              onSubmit={evt => {
                evt.preventDefault()
                this.props.addBook(
                  this.state.name,
                  this.state.author,
                  this.state.biography,
                  this.state.numberOfPaGes,
                  this.state.picture
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
                type='text'
                placeholder='enter author'
                onChange={evt => this.setState({ author: evt.target.value })}
              ></input>
              <br />
              <textarea
                type='text'
                placeholder='enter biography'
                onChange={evt => this.setState({ biography: evt.target.value })}
              ></textarea>
              <br />
              <input
                type='number'
                placeholder='enter number of pages'
                onChange={evt => this.setState({ numberOfPaGes: evt.target.value })}
              ></input>
              <br />
              <input
                type='text'
                placeholder='enter picture'
                onChange={evt => this.setState({ picture: evt.target.value })}
              ></input>
              <br />
              <input type='submit' value={'addBook'}></input>
            </form>
          </div>
        )
      }
}
