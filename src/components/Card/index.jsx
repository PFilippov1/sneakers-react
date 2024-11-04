import styles from './card.module.scss'
import React from "react"
import ContentLoader from 'react-content-loader'
import AppContext from '../../context';

function Card({ id, title, imageUrl, price, onFavorite, onPlus, favorited = false, added = false, loading = false }) {
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const { isItemAdded } = React.useContext(AppContext);
  const obj = { id, parentId: id, title, imageUrl, price }

  const onClickPlus = () => {
    onPlus(obj);
  };

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite)
    onFavorite(obj)
  }

  return (
    <div className={styles.card} >
      {loading ? <>
        <ContentLoader
          speed={2}
          width={165}
          height={260}
          viewBox="0 0 155 260"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="22" y="104" rx="0" ry="0" width="92" height="18" />
          <rect x="30" y="134" rx="0" ry="0" width="84" height="17" />
          <rect x="0" y="170" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="190" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="230" rx="10" ry="10" width="80" height="25" />
          <rect x="120" y="225" rx="10" ry="10" width="32" height="32" />
          <rect x="0" y="0" rx="10" ry="10" width="150" height="155" />
        </ContentLoader>

      </> : <>  <div className={styles.favorite} onClick={onClickFavorite}>
        <img src={isFavorite ? "assets/img/heart-liked.svg" : "assets/img/heart-unliked.svg"}
          alt="plus"></img>

      </div>
        <img
          width='100%'
          height={135}
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
            src={isItemAdded(id) ? "assets/img/btn-checked.svg" : "assets/img/btn-plus.svg"}
            alt="plus"
          ></img>

        </div>
      </>}

    </div>)
}

export default Card;