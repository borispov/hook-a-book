import React from 'react'

const Header = props => {
  return (
    <div className="header">
      <h1 className="header__title">{props.title}</h1>
    </div>
  )
}

export default Header