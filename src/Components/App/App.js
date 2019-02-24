import React, { Component } from 'react';
import Header from '../Header/Header'
import Search from '../Search/Search'
import HttpRequests from './HttpRequests'
import BookGrid from '../BookGrid/BookGrid'
import Loader from '../Loader/Loader'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

// function to map the fetched results into required categories.
// setting default values in case no author/title available
const bookInfoSort = vol => ({
  title: vol.volumeInfo.title || 'No Title',
  author: vol.volumeInfo.authors || 'Unknown Author',
  publisher: vol.volumeInfo.publisher || '',
  description: vol.volumeInfo.description || 'No Description Available For This Book',
  url: vol.volumeInfo.previewLink,
  img: vol.volumeInfo.imageLinks.thumbnail || vol.volumeInfo.imageLinks[0] || `https://via.placeholder.com/160x200.png`
})

class App extends Component {

  state = {
    searchQuery: null,
    loadedBooks: null,
    bookShelf: null,
    error: null,
    loading: false,
  }

  handleSearchQuery = async query => {
    this.setState({loading: true})
    const results = await HttpRequests.getBooks(query)
    !results.length && this.setState({error: 'Did not find any books. no results'})
    
    this.setState({ bookShelf: results})
    console.log(results)
    if (results.length) {
      console.log(
        results.map(x => {
          console.log(x)
        })
      )
      // const loadedBooks = results.map(bookInfoSort)
      this.setState({ loading: false })
    }
  }

  render() {
    const title = 'Hook A Book'
    const { loadedBooks, error, loading } = this.state
    console.log(loadedBooks && true)
    const showBookGrid = loadedBooks 
      ? (
        <ErrorBoundary>
          <BookGrid books={loadedBooks} /> 
        </ErrorBoundary>
      )
      : loading ? <Loader /> : null

    const errors = error
      ? <h4 style={{textAlign: 'center', marginTop: '15px'}}>{error}</h4>
      : null



    return (
      <div className="app">
        <Header title={title} />
        <ErrorBoundary>
          <Search getQueryRequest={this.handleSearchQuery}/>
        </ErrorBoundary>
        {errors}
        {showBookGrid}
      </div>
    )
  }
}

export default App
