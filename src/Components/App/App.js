import React, { Component } from 'react';
import Header from '../Header/Header'
import Search from '../Search/Search'
import HttpRequests from './HttpRequests'
import BookGrid from '../BookGrid/BookGrid'
import Loader from '../Loader/Loader'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import Bookshelf from '../Bookshelf/Bookshelf'
import Modal from '../Modal/Modal'
import Snackbar from '../Snackbar/Snackbar';

// helper function to work with localStorage's string conversion
const lsPull = item => JSON.parse(localStorage.getItem(item))
const lsSet = (item, data) => localStorage.setItem(item, JSON.stringify(data)) 

// function to map the fetched results into required categories.
// setting default values in case no author/title available
const bookInfoSort = vol => {
  if (vol.volumeInfo){
    console.log(vol.volumeInfo)
  }
  return {
    title: vol.volumeInfo.title || 'No Title',
    author: vol.volumeInfo.authors || 'Unknown Author',
    publisher: vol.volumeInfo.publisher || '',
    description: vol.volumeInfo.description || 'No Description Available For This Book',
    url: vol.volumeInfo.previewLink,
    img: (vol.volumeInfo.imageLinks && (vol.volumeInfo.imageLinks.thumbnail || vol.volumeInfo.imageLinks[0]) ) || ''
  }
}

class App extends Component {

  state = {
    pastQueries: [],
    searchQuery: null,
    loadedBooks: null,
    bookShelf: [],
    error: null,
    loading: false,
    showShelf: false,
    showSnackbar: false,
  }

  componentDidMount() {
    let shelfData = lsPull('shelf')
    let books = lsPull('books')
    let queries = lsPull('queries')

    this.setState({
      bookShelf: shelfData || [],
      pastQueries: queries || [],
      loadedBooks: books || null
    })
  }

  deleteBookmark = idx => {
    let { bookShelf } = this.state
    bookShelf = [
      ...bookShelf.slice(0, idx),
      ...bookShelf.slice(idx + 1)
    ]
    this.setState({bookShelf})
    lsSet('shelf', bookShelf)
  }

  bookmarkHandler = (book) => {
    let { bookShelf } = this.state

    // if the book exists in the bookshelf(bug: identical titles..) don't add it.
    if ( bookShelf.includes(s => s.title === book.title) ) return null

    bookShelf = bookShelf.concat(book)
    lsSet('shelf', bookShelf)
    this.setState({ bookShelf, showSnackbar: true })
    setTimeout(() => {
      this.setState({showSnackbar: false})
    }, 2300)
  }

  handleSearchQuery = async query => {
    let { pastQueries } = this.state
    pastQueries = pastQueries.concat(query)

    // the fastest solution, would like to change it later to suit functional style.
    pastQueries.length >= 10 && pastQueries.shift()
    lsSet('queries', pastQueries)
    this.setState({loading: true, pastQueries})

    const results = await HttpRequests.getBooks(query)
    results instanceof Error && this.setState({error: results.msg})
    !results.length && this.setState({error: 'Did not find any books. no results'})
    
    if (results.length) {
      const loadedBooks = results.map(bookInfoSort)
      this.setState({loadedBooks, loading: false })
      lsSet('books', loadedBooks)
    }
  }


  openShelf = () => {this.setState({showShelf: true})}
  closeShelf = () => {this.setState({showShelf: false})}

  render() {
    const title = 'Hook A Book'
    const { showSnackbar, showShelf, bookShelf, pastQueries, loadedBooks, error, loading } = this.state
    const showBookGrid = loadedBooks 
      ? (
        <ErrorBoundary>
          <BookGrid books={loadedBooks } bookmarkHandler={this.bookmarkHandler} /> 
        </ErrorBoundary>
      )
      : loading ? <Loader /> : null

    const errors = error
      ? <h4 style={{textAlign: 'center', marginTop: '15px'}}>{error}</h4>
      : null

    const bookmarksBtn = () => {
      return (
        <div className="shelf__btn">
          <h4 className="shelf__label" onClick={this.openShelf}>My Shelf</h4>
        </div>
      )
    }

    const snackBarComponent = showSnackbar ? <Snackbar msg="Added to your bookshelf!" /> : null

    return (
      <div className="app">
        <Header title={title} />
        <ErrorBoundary>
        <Search 
          getQueryRequest={this.handleSearchQuery}
          queries={pastQueries && pastQueries}
        />
        <Modal 
          onClose={this.closeShelf}
          show={showShelf}>
           <Bookshelf 
            deleteBookmark={this.deleteBookmark}
            books={bookShelf} />
        </Modal>
        {bookmarksBtn()}
        </ErrorBoundary>
        {errors}
        {showBookGrid}
        {snackBarComponent}
      </div>
    )
  }
}

export default App
