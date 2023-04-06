import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
   <section className='error-page section'>
        <div className='error-container'>
            <h2> Opps  </h2>
            <Link to="/" className='btn'> Go Home</Link>
        </div>

   </section>
  )
}

export default Error
