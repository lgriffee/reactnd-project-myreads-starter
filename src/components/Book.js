import React, { Component } from 'react'
import PropTypes from 'prop-types'


const Book = (props) => {

  Book.propTypes = {
      book: PropTypes.object.isRequired,
      onShelfChange: PropTypes.func.isRequired
  }

  const { book, onShelfChange } = props

  let bookCover = book.imageLinks
                      ? book.imageLinks.smallThumbnail
                      : 'https://upload.wikimedia.org/wikipedia/commons/d/d3/VisualEditor_-_Icon_-_Journal.svg'

  const bookCoverStyle = {
    background: `url(${bookCover})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%'
  }

  let bookShelf = book.shelf
                  ? book.shelf
                  : "none"

  return(
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={bookCoverStyle}></div>
          <div className="book-shelf-changer">
            <select value={bookShelf} onChange={(event) => onShelfChange(book, event.target.value)}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{ book.title }</div>
        <div className="book-authors">{ book.authors }</div>
      </div>
    </li>
  )
}

export default Book
