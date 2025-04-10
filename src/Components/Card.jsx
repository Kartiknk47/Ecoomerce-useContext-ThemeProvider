import React, {useContext} from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../hooks/ThemeContext'

const Card = ({Cars}) => {
  const {theme} = useContext(ThemeContext)

  return (
    <div className={ ` container-fluid card mt-3 ${theme == 'light' ? 'bg-light text=dark' : 'bg-dark text-light'}`}>
    <img src={Cars.image} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{Cars.name}</h5>
      <p className="card-text">{Cars.discription}</p>
      <p className="card-text">{Cars.mileage}</p>
      <p className="card-text text-primary">Price : {Cars.price}</p>
      <p className="card-text text-primary">Quantity : {Cars.Quantity}</p>

      {/* <button className="btn btn-success">Add To Cart</button> */}
      <Link to={`/card-detail/${Cars.id}`} className="MoreInfo">More Info</Link>

    </div>
   </div>
  )
}

export default Card
