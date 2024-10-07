import Card from "../components/Card";

function Home({ items,
  cartItems,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart }) {

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {searchValue
            ? `search by request:"${searchValue}"`
            : "All sneakers"}
        </h1>
        <div className="search-block d-flex">
          <img src="/assets/img/search.svg" alt="Search"></img>
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear removeBtn cu-p"
              src="/assets/img/cartButtonRemove.svg"
              alt="Clear"
            ></img>
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="search..."
          ></input>
        </div>
      </div>

      <section className="sneakers d-flex flex-wrap">
        {items
          .filter((item) => item.title.toLowerCase().includes(searchValue))
          .map((item, index) => (
            <Card
              key={index}
              id={item.id}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => {
                onAddToCart(obj);
              }}
              added={cartItems.some(obj => Number(obj.id) === Number(item.id))}
            />

          ))}
      </section>
    </div>
  )
}

export default Home;