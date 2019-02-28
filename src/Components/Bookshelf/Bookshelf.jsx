import React from 'react'

const Bookshelf = props => {
  console.log(props.books)
  const { books, deleteBookmark } = props
  return (
    <div className="bookshelf">
      <h1 className="bookshelf__header">These are your favorite books:</h1>
      <ul className="bookshelf__list">
        {books && books.map((book, idx) =>{
          return (
            <li className="bookshelf__item" key={idx}>
              <div className="bookshelf__link">
                <span className="bookshelf__title">{book.title}</span>
                <span className="bookshelf__author">{book.authors}</span>
                <span className='bookshelf__remove' onClick={() => deleteBookmark(idx)}>Remove</span>
                <button className="bookshelf__btn">
                  <a href={book.url} className="bookshelf__a">More</a>
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Bookshelf