import React from 'react'
import BookCard from '../BookCard/BookCard'


const sortBooks = (books, props) => {
  return books.map((book, idx) => {
    return (
      <BookCard 
        bookmarkHandler={props.bookmarkHandler}
        publisher={book.publisher}
        author={book.author}
        title={book.title}
        url={book.url}
        img={book.img}
        description={book.description}
        key={`#${idx}`}
      />
    )
  })
}

// const bookLayout = (book, idx) => {
//   return (
//     <BookCard 
//       // bookmarkHandler={}
//       publisher={book.publisher}
//       author={book.author}
//       title={book.title}
//       url={book.url}
//       img={book.img}
//       description={book.description}
//       key={`#${idx}`}
//     />
//   )
// }

const BookGrid = props => {
  return <div className="bookgrid">{sortBooks(props.books, props)}</div>
}

export default BookGrid
