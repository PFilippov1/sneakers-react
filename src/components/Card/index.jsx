import styles from './card.module.scss'
import React from 'react';

function Card({title, imageUrl, price, onFavorite, onPlus, favorited=false }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);


  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite)
    onFavorite({ title, imageUrl, price}) //add id because mock api restrictions 

  }


  // React.useEffect(() => { console.log('some changes') }, [isAdded])

  return (
    <div className={styles.card} >
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src={isFavorite ? "/assets/img/heart-liked.svg" : "/assets/img/heart-unliked.svg"}
          alt="plus"></img>

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

        <img className={styles.plus} onClick={onClickPlus}
          src={isAdded ? "/assets/img/btn-checked.svg" : "/assets/img/btn-plus.svg"}
          alt="plus"
        ></img>
      </div>
    </div>)
}

export default Card;