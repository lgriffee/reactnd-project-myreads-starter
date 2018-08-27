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
    console.log(this.state.searchResult)
  }

  // Find all books corresponding to the query and show them
  updateBookResults = (query) => {
    // Make sure query is valid
    if (query){
      BooksAPI.search(query).then((booksFound) => {
        // Only update search results for valid search terms
        if (!booksFound.error){
          this.setState({
            searchResult: booksFound
          })
        }else{ // Clear search results for invalid search terms
          this.setState({
            searchResult: []
          })
        }
      })
    }else{
      this.setState({ // Clear search results for invalid query types
        searchResult: []
      })
    }

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
