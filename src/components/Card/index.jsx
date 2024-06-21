import styles from './card.module.scss'

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/assets/img/heart-unliked.svg" alt="Unliked"></img>
      </div>
      <img
        width={133}
        height={112}
        src={props.imageUrl}
        alt="sneakers"
      />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Price:</span>
          <b>{props.price}$</b>
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