import React from 'react'
import noCover from './no-cover.png'
import BookmarkIcon from '../BookmarkIcon/BookmarkIcon'

const BookCard = (props) => {

  const handleBtnClick = () => { window.location.href = props.url }
  const authors = typeof props.author === 'string' ? props.author : props.author.join(', ')

  const iconClick = () => {
   const bookForShelf = {title: props.title, url: props.url, authors: authors}
   props.bookmarkHandler(bookForShelf)
  }

  // If book's description is way too long, trim it and add '...' to the end of the string. 
  const trimmedDesc = para => para.split(' ').slice(0, 20).join(' ')

  const editText = para => {
    return para && para.split(' ').some(word => word.length > 10)
      ? `for further details, read more`
      : para.length > 20
        ? `${trimmedDesc(para)} . . .`
        : para
  }

  return (
    <div className="bookcard">
      <div className="bookcard__container">
        <div className="bookcard__thumbnail">
          <img src={props.img || noCover} alt="" />
        </div>
        <div className="bookcard__body">
          <BookmarkIcon bookmarkHandler={iconClick}/>
          <h2 className="bookcard__author">{authors}</h2>
          <p className="bookcard__publisher">{props.publisher}</p>
          <h1 className="bookcard__title">{props.title}</h1>
          <p className="bookcard__description">{editText(props.description)}</p>
          <button 
            className="bookcard__btn"
            onClick={handleBtnClick}>
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookCard
