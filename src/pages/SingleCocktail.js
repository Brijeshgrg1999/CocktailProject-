import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {

  const {id} = useParams(); 
  const [loading , setLoading] = React.useState(false) ; 
  const [cocktail , setCocktail ] = React.useState(null) ; 

  React.useEffect(()=>{

    setLoading(true) ; 
    async function getCocktail(){
      try {
        const response = await fetch(`${url}${id}`) ; 
        const data = await  response.json() ; 
        if(data.drinks)
        {
          const {strDrink:name ,
             strDrinkThumb:image ,
              strAlcoholic :info ,
               strInstructions : instruc , 
               strIngredient1 , 
               strIngredient2,
               strIngredient3,
               strIngredient4,
               strIngredient5
               } = data.drinks[0] ; 

               const Ingredient  = [strIngredient1 , 
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5
               ] ; 
               const newCocktails = {
                name , image, info , instruc , Ingredient 
               }
               setCocktail(newCocktails) ; 
        }
        else{
          setCocktail(null) ; 
        }
      } catch (error) {
        console.log(error)
      }
    }
    setLoading(false) ;
    getCocktail() ; 
    
  } , [id]) ; 

if(loading)
{
  return <Loading/> ; 

}

if(!cocktail)
{
  return <h2>opps not available </h2> ; 
}
else{
  const {
    name , info , instruc , image , Ingredient 
  } = cocktail ; 
  return (
     <section className='section cocktail-section'>
      <h2>{name}</h2>
      <div className='drink'>
      <img src={image} alt={name}/> 
        <div className='drink-info'>
          <p> 
            <span className='drink-data'>
              name : {name}
            </span>
          </p>
          <p> 
            <span className='drink-data'>
              info : {info}
            </span>
          </p>
          <p> 
            <span className='drink-data'>
              instructions : {instruc}
            </span>
          </p>
          <p> 
            <span className='drink-data'>
              Ingredients :  </span>
                  {Ingredient.map((ingre , index )=>{
                    return ingre ? <span key={index} className="drink-data">{ingre}</span> : null 
                  })}
          </p>
        </div>


      </div>

       <Link to="/" className='btn'> Back to Home</Link>
     </section>
  )
}



}

export default SingleCocktail
