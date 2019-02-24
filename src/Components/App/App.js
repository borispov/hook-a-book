import React, { Component } from 'react';
import Header from '../Header/Header'
import Search from '../Search/Search'
import HttpRequests from './HttpRequests'
import BookGrid from '../BookGrid/BookGrid'

const hardCodedBooks = [
  {
    title: 'Run Forest Run',
    author: 'Boris Gump',
    description: 'Hello',
    img: 'https://images.unsplash.com/photo-1505903658795-8d3cc48039e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80',
    url: '#'
  },
  {
    title: 'A',
    author: 'B',
    url: '#',
    img: 'https://images.unsplash.com/photo-1550851405-d07690a23a5a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=614&h=614&fit=crop&ixid=eyJhcHBfaWQiOjF9',
    description: 'Hello'
  }
]

class App extends Component {

  state = {
    searchQuery: null,
    loadedBooks: null,
    bookShelf: null,
  }

  handleSearchQuery = async query => {
    const results = await HttpRequests.getBooks(query)
    console.log(results)
  }

  render() {
    const title = 'Hook A Book'
    return (
      <div className="app">
        <Header title={title} />
        <Search getQueryRequest={this.handleSearchQuery}/>
        <BookGrid books={hardCodedBooks} />
      </div>
    )
  }
}

export default App
