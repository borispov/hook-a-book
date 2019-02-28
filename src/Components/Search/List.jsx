import React from 'react'

const listStyle = {
  listStyle: 'none',
  border: '1px solid #f99',
  borderTopWidth: '0px',
  marginTop: '0',
  maxHeight: '140px',
  width: 'calc(450px)',
  paddingTop: '5px',
  paddingLeft: '15px',
  overflowY: 'auto',
  display: 'block',
  margin: '0 auto',
  background: '#FFF',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)'
}

const options = [
  'Hey', 'Good To Know!', 'React for Dummies!'
]

const List = props => {
  const clickHandler = e => { console.log(e); props.liClick(e.currentTarget.innerText);}

  const queries = options.map(q => <li onClick={e => clickHandler(e)} key={q} className="list__item">{q}</li>)
  return <ul className="list" style={listStyle}>{queries}</ul>
}

export default List

