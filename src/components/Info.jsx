import React from 'react'
import AppContext from '../context';

export const Info = ({ title, image,  description }) => {
  const { setCartOpen } = React.useContext(AppContext)
  return (
    <div className="emptyCart">
      <img src={image} alt="cartEmpty"></img>

      <h2>{title}</h2>
      <p class="opacity-6">{description}</p>
      <button onClick={() => setCartOpen(false)} className="greenButton">
        <img src="/assets/img/arrowLeft.svg" alt="Arrow" />
        Go back
      </button>
    </div>
  )
}

export default Info;

