import React from 'react'

const Notification = ({ message }) => {
  if (message.text.length === 0) {
    return null
  }

  return (
    <div className='success'>
      {message.text}
    </div>
  )
}

export default Notification