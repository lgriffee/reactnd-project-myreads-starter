import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Shelf extends Component{

static propTypes = {
    shelfTitle: PropTypes.string.isRequired,
    shelfBooks: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  render(){

  const { shelfTitle, shelfBooks, onShelfChange } = this.props

    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {shelfBooks.map((book) =>
              <Book
                key={book.id}
                book={book}
                onShelfChange={onShelfChange}
              />
           )}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
