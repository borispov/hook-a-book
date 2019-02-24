import React from 'react'

const BookCard = (props) => {

  console.log(props)
  const handleBtnClick = () => {
    window.location.href = props.url
  }
  return (
    <div className="bookcard">
      <div className="bookcard__container">
        <div className="bookcard__thumbnail">
          <img src={props.img} alt="" />
        </div>
        <div className="bookcard__body">
          <h2 className="bookcard__author">{props.author}</h2>
          <h1 className="bookcard__title">{props.title}</h1>
          <p className="bookcard__description">{props.description}</p>
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