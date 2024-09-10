function Drawer({ onClose, items = [] }) {
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
                    className="removeBtn"
                    src="/assets/img/cartButtonRemove.svg"
                    alt="button"
                  ></img>
                </div>
              </div>
            );
          })}


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