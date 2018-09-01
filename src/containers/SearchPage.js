import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../api/BooksAPI'
import PropTypes from 'prop-types'
import Shelf from '../components/Shelf'

class SearchPage extends Component{

  static propTypes = {
      books: PropTypes.array.isRequired,
      onShelfChange: PropTypes.func.isRequired
  }

  state = {
    query: '',
    searchResult: []
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    this.updateBookResults(query)
  }

  // Find all books corresponding to the query and show them
  updateBookResults = (query) => {
    // Clear search results if  query is empty/undefined
    if (!query){
      this.setState({
        searchResult: []
      })
      return
    }
    BooksAPI.search(query).then((booksFound) => {
      // Clear search results if search terms are invalid
      if (booksFound.error){
        this.setState({
          searchResult: []
        })
        return
      }
      // Update search results for valid search terms
        this.setState({
          searchResult: booksFound
        })

    })
  }

  render(){
    const { books, onShelfChange} = this.props
    const { query, searchResult } = this.state

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link
              to='/'
              className="close-search"
              >Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange= {(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <Shelf
            shelfTitle={'Search Results'}
            shelfBooks={searchResult}
            onShelfChange={onShelfChange}
          />
        </div>
      </div>
    )
  }
}

export default SearchPage
