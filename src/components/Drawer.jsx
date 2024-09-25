function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">

      <div className="drawer">
        <h3 className="mb-30 d-flex justify-between ">
          Cart{" "}
          <img onClick={onClose}
            className="removeBtn cu-p"
            src="/assets/img/cartButtonRemove.svg"
            alt="Close"
          ></img>
        </h3>

        <div className="items">

          {items.map((obj) => {
            return (
              <div className="cartItem d-flex align-center mb-20" key={obj.title}>
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

          {items.length === 0 && (<div className="emptyCart">
            <img src='assets/img/emptyCart.png' alt="cartEmpty"></img>
          </div>)
          }

        </div>
        <div className="cardTotalBlock">
          <ul>
            <li className="d-flex">
              <span> All:</span>
              <div></div>
              <b>220$</b>
            </li>
            <li className="d-flex">
              <span> Tax 5%:</span>
              <div></div>
              <b>220$</b>
            </li>
          </ul>
          <button className="greenButton">
            create order <img src="/assets/img/arrow.svg" alt="arrow"></img>
          </button>
        </div>
      </div>
    </div >
  );
}
export default Drawer;