import React from 'react'

const BookCard = (props) => {

  console.log(props.description)
  const handleBtnClick = () => {
    window.location.href = props.url
  }

  const trimmedDesc = para => para.split(' ').slice(0, 20).join(' ')

  const authors = typeof props.author === 'string' ? props.author : props.author.join(', ')
  return (
    <div className="bookcard">
      <div className="bookcard__container">
        <div className="bookcard__thumbnail">
          <img src={props.img} alt="" />
        </div>
        <div className="bookcard__body">
          <h2 className="bookcard__author">{authors}</h2>
          <p className="bookcard__publisher">{props.publisher}</p>
          <h1 className="bookcard__title">{props.title}</h1>
          <p className="bookcard__description">{trimmedDesc(props.description)}</p>
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