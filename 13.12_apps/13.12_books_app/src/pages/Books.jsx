import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Books extends Component {
  state = { redirect: false, redirect2: false }
    render() {
        if (this.state.redirect) {
            return <Redirect to='/AddBook' />
          }
          if (this.state.redirect2) {
            return <Redirect to='/BookDetails' />
          }
          const booksElement = this.props.books.map((book, index) => (
            <li key={index}>
              {book.name}, {book.author}
              <button
                onClick={() => {
                  this.props.setCuurrentBook(
                    book.name,
                    book.author,
                    book.biography,
                    book.numberOfPaGes,
                    book.picture
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
              <h2>Books Page</h2> <br />
              <button onClick={() => this.setState({ redirect: true })}>
                Add Book
              </button>
              <ul>{booksElement}</ul>
            </div>
          )
    }
}
