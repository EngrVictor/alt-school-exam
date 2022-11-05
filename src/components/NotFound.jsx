import React from 'react'
import { Link } from 'react-router-dom'
 
const NotFound = () => {
  return (
    <div className='not-found'>
        <h1>404</h1>
        <p>Page not found got back</p><Link to='/'>&larr; home</Link>
    </div>
  )
}

export default NotFound