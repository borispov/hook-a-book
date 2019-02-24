import React from 'react'
import BookCard from '../BookCard/BookCard'

const bookLayout = (book, idx) => {
  return (
    <BookCard 
      publisher={book.publisher}
      author={book.author}
      title={book.title}
      url={book.url}
      img={book.img}
      description={book.description}
      key={`#${idx}`}
    />
  )
}

const BookGrid = props => {
  console.log(props)
  return <div className="bookgrid">{props.books.map(bookLayout)}</div>
}

export default BookGrid