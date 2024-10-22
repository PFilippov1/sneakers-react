import React from 'react'
import { useCart } from '../hooks/useCart';
import Info from "./Info";
import axios from 'axios';
import AppContext from '../context';

function Drawer({ onClose, onRemove, items = [] }) {

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  const [isOrderComplete, setIsOrderComplete] = React.useState(false)
  const [orderId, setOrderId] = React.useState(null) // it will not work because of mocAPI base(only 2 entities)
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [isLoading, setIsLoading] = React.useState(false)
  const [order, setOrder] = React.useState([]) // because restrictions of mocAPI

  const onClickOrder = async () => {
    try {
      setIsLoading(true)
      setOrder((prev) => [...prev, ...cartItems])
      setIsOrderComplete(true)
      setCartItems([])

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          `https://6691464a26c2a69f6e8f3048.mockapi.io/cart/${item.id}`
        )
        await delay(1000);
      }
    } catch (error) {
      console.log('can`t create order')
    }
    setIsLoading(false)
  }

  console.log(order)
  return (
       <div className="overlay">

<div className="drawer">
  <h2 className="mb-30 d-flex justify-between ">
    Cart{" "}
    <img onClick={onClose}
      className="removeBtn cu-p"
      src="/assets/img/cartButtonRemove.svg"
      alt="Close"
    ></img>
  </h2>

  <div className="items">
    <div className="blockItems">
      {items.map((obj) => {
        return (
          <div key={obj.id} className="cartItem d-flex align-center mb-20" >
            <div
              style={{ backgroundImage: `url(${obj.imageUrl})` }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">{obj.title}</p>
              <b>{obj.price}</b>
            </div>
            <div>
              <img
                onClick={() => { onRemove(obj.id) }}
                className="removeBtn"
                src="/assets/img/cartButtonRemove.svg"
                alt="Remove"
              ></img>
            </div>
          </div>
        );
      })}
    </div>
    {items.length <= 0 ? (
      <Info
        title={isOrderComplete ? 'Order placed' : 'Empty Cart'}
        image={isOrderComplete ? 'assets/img/order.png' : '/assets/img/emptyCart.png'}
        description={isOrderComplete ? 'Order #1 is ready for delivery ' : 'Please add at least one pair'}>

      </Info>)
      : (
        <div className="cardTotalBlock">
          <ul>
            <li className="d-flex">
              <span> All:</span>
              <div></div>
              <b>{totalPrice}$</b>
            </li>
            <li className="d-flex">
              <span> Tax 5%:</span>
              <div></div>
              <b>{totalPrice / 100 * 5}$</b>
            </li>
          </ul>
          <button disabled={isLoading} onClick={onClickOrder} className="greenButton">
            create order <img src="/assets/img/arrow.svg" alt="arrow"></img>
          </button>
        </div>)
    }
  </div>
</div>
</div >



 
  );
}
export default Drawer;