import React from 'react'
import bookmark from './bookmark.png'

const BookmarkIcon = props => {
  return (
    <div className="bookmark">
      <img src={bookmark} alt="add to shelf" onClick={props.bookmarkHandler} />
    </div>
  )
}

export default BookmarkIcon
