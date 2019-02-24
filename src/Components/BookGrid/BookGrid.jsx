import React from 'react'
import BookCard from '../BookCard/BookCard'

const bookLayout = book => {
  return (
    <BookCard 
      author={book.author}
      title={book.title}
      url={book.url}
      img={book.img}
      description={book.description}
      key={book.title + '#' + 1}
    />
  )
}

const BookGrid = props => {
  console.log(props.books)
  return <div className="bookgrid">{props.books.map(bookLayout)}</div>
}

export default BookGrid