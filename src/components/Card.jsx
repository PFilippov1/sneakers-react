function Card() {
  return (
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

            src="/assets/img/plus.svg"
            alt="plus"
          ></img>
        </button>
      </div>
    </div>)
}

export default Card;