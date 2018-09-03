import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from '../api/BooksAPI'
import './App.css'
import MainPage from './MainPage'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  state = {
    shelvedBooks: []
  }

  // Fetch books on shelves from server and re-render the page with book info
  componentDidMount(){
    BooksAPI.getAll().then( shelvedBooks => {
      this.setState({ shelvedBooks })
    })
  }

  // Change the bookshelf a book is on
  changeBookshelf = (book, shelfName) => {
    BooksAPI.update(book, shelfName).then(() => {
      book.shelf = shelfName

      this.setState({
        shelvedBooks: this.state.shelvedBooks
      })
    })
  }


  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MainPage
          shelvedBooks={this.state.shelvedBooks}
          onShelfChange={this.changeBookshelf}
        />
        )}/>
        <Route exact path='/search' render={() => (
          <SearchPage
            shelvedBooks={this.state.shelvedBooks}
            onShelfChange={this.changeBookshelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
