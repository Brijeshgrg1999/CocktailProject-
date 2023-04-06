import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({id, image, name ,info , glass }) => {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt="img"/>
      </div>
      <div className='cocktail-footer'>
        <h2>{name}</h2>
        <h4>{glass}</h4>
        <p style={{color:"#E74646"}}>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn"> More Details</Link>
      </div>
    </article>
  )
}

export default Cocktail
