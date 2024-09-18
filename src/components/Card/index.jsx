import styles from './card.module.scss'
import React from 'react';



function Card({ title, imageUrl, price, onFavorite, onPlus }) {

  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => {
    onPlus({title, imageUrl, price});
    setIsAdded(!isAdded);
  };

  React.useEffect(() => { console.log('some changes') }, [isAdded])

  return (
    <div className={styles.card} >
      <div className={styles.favorite} onClick={onFavorite}>
        <img src="/assets/img/heart-unliked.svg" alt="Unliked"></img>
      </div>
      <img
        width={133}
        height={112}
        src={imageUrl}
        alt="sneakers"
      />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Price:</span>
          <b>{price}$</b>
        </div>

        {/* <button  className="button" onClick={props.onPlus}> */}
        <img className={styles.plus} onClick={onClickPlus}
          src={isAdded ? "/assets/img/btn-checked.svg" : "/assets/img/btn-plus.svg"}
          alt="plus"
        ></img>
        {/* </button> */}
      </div>
    </div>)
}

export default Card;