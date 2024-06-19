function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h3 className="mb-30">Cart</h3>

          <items className="items">
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
          </items>
          <ul className="cardTotalBlock">
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
        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img
            className="mr-15"
            width={40}
            height={40}
            src="/assets/img/logo.png"
            alt="img"
          />
          <div className="headerInfo">
            <h3 className="text-uppercase">React sneakers</h3>
            <p className="opacity-5">Shop of the best sneakers</p>
          </div>
        </div>

        <ul className="d-flex">
          <li className="mr-30">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9118 7.99735 16.5455 7.54548 16.5455C7.09361 16.5455 6.72729 16.9118 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z"
                stroke="#9B9B9B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9118 16.9973 16.5455 16.5455 16.5455C16.0936 16.5455 15.7273 16.9118 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z"
                stroke="#9B9B9B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091"
                stroke="#9B9B9B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="ml-15">18 usd</span>
          </li>
          <li>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 9C0 4.1211 4.1211 0 9 0C13.8789 0 18 4.1211 18 9C18 11.871 16.5672 14.4702 14.4 16.1316V16.2H14.3082C12.807 17.3205 10.9683 18 9 18C7.0317 18 5.193 17.3205 3.6918 16.2H3.6V16.1316C1.4328 14.4702 0 11.8701 0 9ZM6.41112 13.7124C5.93239 14.0975 5.59923 14.6344 5.4666 15.2343C6.5178 15.8436 7.7256 16.2 9 16.2C10.2744 16.2 11.4822 15.8436 12.5334 15.2343C12.4006 14.6344 12.0674 14.0977 11.5887 13.7126C11.11 13.3275 10.5144 13.1169 9.9 13.1157H8.1C7.48557 13.1168 6.88986 13.3272 6.41112 13.7124ZM12.391 12.0705C13.129 12.5617 13.7057 13.2596 14.049 14.0769C15.3693 12.7638 16.2 10.9584 16.2 9C16.2 5.0967 12.9033 1.8 9 1.8C5.0967 1.8 1.8 5.0967 1.8 9C1.8 10.9584 2.6307 12.7638 3.951 14.0769C4.2943 13.2596 4.87104 12.5617 5.60904 12.0705C6.34704 11.5794 7.21351 11.3168 8.1 11.3157H9.9C10.7865 11.3168 11.653 11.5794 12.391 12.0705ZM5.40001 7.2C5.40001 5.148 6.94801 3.6 9.00001 3.6C11.052 3.6 12.6 5.148 12.6 7.2C12.6 9.252 11.052 10.8 9.00001 10.8C6.94801 10.8 5.40001 9.252 5.40001 7.2ZM7.20001 7.2C7.20001 8.2602 7.93981 9 9.00001 9C10.0602 9 10.8 8.2602 10.8 7.2C10.8 6.1398 10.0602 5.4 9.00001 5.4C7.93981 5.4 7.20001 6.1398 7.20001 7.2Z"
                fill="#9B9B9B"
              />
            </svg>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/assets/img/search.svg" alt="Search"></img>
            <input placeholder="search..."></input>
          </div>
        </div>

        <section className="sneakers d-flex">
          <div className="card">
            <div className="favorite">
              <img src="/assets/img/heart-unliked.svg" alt="Unliked"></img>
            </div>
            <img
              width={133}
              height={112}
              src="/assets/sneakers/1.jpg"
              alt="sneakers"
            />
            <h5>Men`s nike sneakers</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Price:</span>
                <b>120 $</b>
              </div>

              <button className="button">
                <img
                  // width={11}
                  // height={11}
                  src="/assets/img/plus.svg"
                  alt="plus"
                ></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/assets/sneakers/2.jpg"
              alt="sneakers"
            />
            <h5>Men`s nike sneakers</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Price:</span>
                <b>120 $</b>
              </div>

              <button className="button">
                <img
                  // width={11}
                  // height={11}
                  src="/assets/img/plus.svg"
                  alt="plus"
                ></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/assets/sneakers/3.jpg"
              alt="sneakers"
            />
            <h5>Men`s nike sneakers</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Price:</span>
                <b>120 $</b>
              </div>

              <button className="button">
                <img
                  // width={11}
                  // height={11}
                  src="/assets/img/plus.svg"
                  alt="plus"
                ></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/assets/sneakers/4.jpg"
              alt="sneakers"
            />
            <h5>Men`s nike sneakers</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Price:</span>
                <b>120 $</b>
              </div>

              <button className="button">
                <img
                  // width={11}
                  // height={11}
                  src="/assets/img/plus.svg"
                  alt="plus"
                ></img>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
