function Drawer(props) {
  return (
    <div className="overlay">
      
      <div className="drawer">
        <h3 className="mb-30 d-flex justify-between ">
          Cart{" "}
          <img onClick={props.onClose}
            className="removeBtn cu-p"
            src="/assets/img/cartButtonRemove.svg"
            alt="Close"
          ></img>
        </h3>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/assets/sneakers/1.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Men`s air Nike sneakers</p>
              <b>120 $</b>
            </div>
            <div>
              <img
                className="removeBtn"
                src="/assets/img/cartButtonRemove.svg"
                alt="button"
              ></img>
            </div>
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/assets/sneakers/2.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Men`s air Nike sneakers</p>
              <b>120 $</b>
            </div>
            <div>
              <img
                className="removeBtn"
                src="/assets/img/cartButtonRemove.svg"
                alt="button"
              ></img>
            </div>
          </div>
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
    </div>
  );
}
export default Drawer;