import React from 'react'

class Search extends React.Component {

  state = {
    searchValue: null,
    placeholder: '',
    error: null
  }

  handleInputChange = e => {
    const searchValue = e.target.value
    this.setState({searchValue, error: null})

  }

  handleError = msg => {
    this.setState({error: msg})
  }
  
  handleSubmit = () => {
    const searchValue = this.state.searchValue
    console.log(searchValue)
    searchValue 
      ? this.props.getQueryRequest(searchValue)
      : this.handleError('cannot send empty query') 
  }

  render() {
    const errors = this.state.error 
      ? (
        <div className="search__error">
          <p className="error__display">
            {this.state.error}!
          </p>
        </div>
      ) 
      : null

    return (
      <div className="search">
        <h4 className="search__title">Type a book and get it's info</h4>
        <input 
          className="search__input" 
          placeholder="Search Your Book" 
          type="search"
          onChange={(e) => this.handleInputChange(e)}
        />
        <button 
          className="search__submit"
          onClick={this.handleSubmit}>
          Get Books
        </button>
        {errors}
      </div>
    )
  }

}

export default Search
