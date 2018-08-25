import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Shelf extends Component{

//TODO: add props for books being passed in & shelf type
static propTypes = {
    shelfTitle: PropTypes.string.isRequired,
    shelfBooks: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  render(){
    //TODO: save prop types
  const { shelfTitle, shelfBooks, onShelfChange } = this.props

    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {shelfBooks.map((book) =>
              <Book
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
