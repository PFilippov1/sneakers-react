import Card from "../components/Card";

function Favorites({ items, onAddToFavorite }) {

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          MY TABS
        </h1>

      </div>

      <section className="sneakers d-flex flex-wrap">
        {items
          .map((item, index) => (
            <Card
              // key={index}
              key={item.id}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              favorited={true} 
              onFavorite={onAddToFavorite}

            />
          ))}
      </section>
    </div>
  )
}

export default Favorites;