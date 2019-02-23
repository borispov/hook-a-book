import React from 'react'
import Axios from 'axios';

class Search extends React.Component {

  state = {
    searchValue: null,
  }

  handleInputChange = e => {
    const searchValue = e.target.value
    this.setState({searchValue})
  }

  handleError = msg => {
    this.setState({error: msg})
  }
  
  handleSubmit = () => {
    const searchValue = this.state.searchValue
    searchValue 
      ? handleError('cannot send empty query') 
      : this.props.getQueryRequest(searchValue)
  }

}

const Search = () => {
  return (
    <div className="search">
      <h4 className="search__title">Type a book and get it's info</h4>
      <input type="search" name="" id=""/>

    </div>
  )
}

export default Search
