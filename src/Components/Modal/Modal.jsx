import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'

const Inner = props => {
  const { show, onClose } = props

  return (
    <Fragment>
      {show ? (
        <Fragment>
          <div className="Modal__overlay" onClick={onClose} />
          <div className={show ? 'Modal -in' : 'Modal -out'}>
            {props.children}
          </div>
        </Fragment>
      ) : null}
    </Fragment>
  )
  
}

const modalElement = document.getElementById('modal')
const Modal = props => {
  return ReactDOM.createPortal(<Inner {...props}/>, modalElement)
}

export default Modal


