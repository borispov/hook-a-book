import React from 'react'
import PropTypes from 'prop-types'
import throttle from '../utils/throttle'
import debounce from '../utils/debounce'
import List from './List'

class Search extends React.Component {

  static propTypes = {
    queries: PropTypes.instanceOf(Array)
  }

  static defaultProps = {
    queries: []
  }

  state = {
    searchValue: null,
    placeholder: '',
    error: null,
    showSuggestions: false,
    activeSuggestion: 0,
  }

  handleInputChange = e => {
    const searchValue = e.target.value
    this.setState({searchValue, error: null, showSuggestions: true})
  }

  onKeyDown = (e) => {
    const { activeSuggestion } = this.state
    const { queries } = this.props
    
    if (e.key === 'Enter') {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
      })
      throttle(this.handleSubmit(), 1200)
    }
    else if (e.keyCode === 38) {
      console.log('sd')
      if (activeSuggestion === 0) return
      this.setState({activeSuggestion: activeSuggestion - 1})
    }

    else if (e.keyCode === 40) {
      console.log('sd')
      this.setState({activeSuggestion: activeSuggestion - 1})
    }


  }

  listOnClick = d => {
    console.log(d)
    this.setState({activeSuggestion: d })
  }
  
  handleError = msg => {
    this.setState({error: msg})
  }

  onFocus = () => { this.setState({showSuggestions: true}) }
  onFocusOut = () => {console.log('sdsd'); this.setState({showSuggestions: false}) }
  
  handleSubmit = () => {
    const searchValue = this.state.searchValue
    this.setState({showSuggestions: false})
    searchValue 
      ? this.props.getQueryRequest(searchValue)
      : this.handleError('cannot send empty query') 
  }

  render() {
    const { error, showSuggestions } = this.state
    const errors = error
      ? (
        <div className="search__error">
          <p className="error__display">
            { error }!
          </p>
        </div>
      ) 
      : null
    const suggestQueries = showSuggestions ? <List queries={this.props.queries} liClick={this.listOnClick}/> : null

    return (
      <div className="search">
        <h4 className="search__title">Type a book and get it's info</h4>
        <input 
          className="search__input" 
          placeholder="Search Your Book" 
          type="search"
          onChange={(e) => debounce(this.handleInputChange(e), 200)}
          onFocus={this.onFocus}
          onBlur={this.onFocusOut}
          onKeyPress={e => this.onKeyDown(e) }
        />
        { suggestQueries } 
        <button 
          className="search__submit"
          onClick={throttle(this.handleSubmit, 1500)}>
          Get Books
        </button>
        {errors}
      </div>
    )
  }

}

export default Search
