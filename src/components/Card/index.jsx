import styles from './card.module.scss'
import React from 'react';



function Card(props) {

  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => { setIsAdded(!isAdded); };

  React.useEffect(() => { console.log('some changes') }, [isAdded])

  return (
    <div className={styles.card} >
      <div className={styles.favorite} onClick={props.onFavorite}>
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