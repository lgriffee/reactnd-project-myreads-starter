import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Shelf from '../components/Shelf'

const MainPage = (props) => {

  MainPage.propTypes = {
      shelvedBooks: PropTypes.array.isRequired,
      onShelfChange: PropTypes.func.isRequired
  }

  const { shelvedBooks, onShelfChange } = props

  // Takes the name of a bookshelf and returns an array of books on that shelf
  let getBookshelf = (shelfName) => {
    return shelvedBooks.filter((book) => book.shelf === shelfName)
  }


  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
          <Shelf
            shelfTitle={'Currently Reading'}
            shelfBooks={getBookshelf('currentlyReading')}
            onShelfChange={onShelfChange}
          />
          <Shelf
            shelfTitle={'Want to Read'}
            shelfBooks={getBookshelf('wantToRead')}
            onShelfChange={onShelfChange}
          />
          <Shelf
            shelfTitle={'Read'}
            shelfBooks={getBookshelf('read')}
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

export default MainPage
