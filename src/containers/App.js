import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from '../api/BooksAPI'
import './App.css'
import MainPage from './MainPage'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  // Fetch books from server and re-render the page with book info
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  // Change the bookshelf a book is on
  changeBookshelf(book, shelfName){
    BooksAPI.update(book, shelfName).then(
      console.log(book.shelf)
    )
  }


  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MainPage
          books={this.state.books}
          onShelfChange={this.changeBookshelf}
        />
        )}/>
        <Route exact path='/search' render={() => (
          <SearchPage/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
