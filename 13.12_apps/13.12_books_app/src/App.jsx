import './App.css'
import Home from './pages/Home'
import AddBook from './pages/AddBook'
import BookDetails from './pages/BookDetails'
import Books from './pages/Books'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Component } from 'react'

export default class App extends Component {
  books = [
    {
      name: 'Harry Potter',
      author: 'J. K. Rowling',
      biography:
        'Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling.',
      numberOfPaGes: 400,
      picture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTnhrFgzEXhrxgPoshFu7Eh5IXFlZD4cMdXw&usqp=CAU'
    },
    {
      name: 'Goosebumps',
      author: 'R. L. Stine',
      biography: 'published by Scholastic Publishing',
      numberOfPaGes: 150,
      picture:
        'data:image/jpeg;base64,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'
    }
  ]

  addBook = (name, author, biography, numberOfPaGes, picture) => {
    this.books.push({ name, author, biography, numberOfPaGes, picture })
  }

  currentName = ''
  currentAuthor = ''
  currentBiography = ''
  currentNumberOfPaGes = ''
  currentPicture = ''

  setCuurrentBook = (name, author, biography, numberOfPaGes, picture) => {
    this.currentName = name
    this.currentAuthor = author
    this.currentBiography = biography
    this.currentNumberOfPaGes = numberOfPaGes
    this.currentPicture = picture

    console.log(name, author, biography, numberOfPaGes, picture)
  }

  render () {
    return (
      <BrowserRouter>
        <div className='App'>
          <Link to='/'>Home</Link> <Link to='/Books'>Books</Link> <hr />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route
              exact
              path='/Books'
              render={() => (
                <Books
                  setCuurrentBook={this.setCuurrentBook}
                  books={this.books}
                />
              )}
            />
            <Route
              exact
              path='/AddBook'
              render={() => <AddBook addBook={this.addBook} />}
            ></Route>
            <Route
              exact
              path='/BookDetails'
              render={() => (
                <BookDetails
                  name={this.currentName}
                  author={this.currentAuthor}
                  biography={this.currentBiography}
                  numberOfPaGes={this.currentNumberOfPaGes}
                  picture={this.currentPicture}
                />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
