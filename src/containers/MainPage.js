import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Shelf from '../components/Shelf'

class MainPage extends Component{

  static propTypes = {
      books: PropTypes.array.isRequired,
      onShelfChange: PropTypes.func.isRequired
    }

    // Takes the name of a bookshelf as a string and returns an array of books on a shelf of that name
    getBookshelf(shelfName){
      return this.props.books.filter((book) => book.shelf === shelfName)
    }


  render(){
    const { books, onShelfChange } = this.props

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <Shelf
              shelfTitle={'Currently Reading'}
              shelfBooks={this.getBookshelf('currentlyReading')}
              onShelfChange={onShelfChange}
            />
            <Shelf
              shelfTitle={'Want to Read'}
              shelfBooks={this.getBookshelf('wantToRead')}
              onShelfChange={onShelfChange}
            />
            <Shelf
              shelfTitle={'Read'}
              shelfBooks={this.getBookshelf('read')}
              onShelfChange={onShelfChange}
            />
        </div>
        <div className="open-search">
          <Link
              to='/search'
              >Add a book
          </Link>
        </div>
      </div>
    )
  }
}

export default MainPage
