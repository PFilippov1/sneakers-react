import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([
    {
      title: "Men`s sneakers Nike Blazer Mid Suede",
      price: 120,
      imageUrl: "/assets/sneakers/1.jpg",
    },
    {
      title: "Men`s sneakers Air Max 270",
      price: 130,
      imageUrl: "/assets/sneakers/2.jpg",
    },
  ]);
  const [cartOpen, setCartOpen] = React.useState(false);
  //
  //

  React.useEffect(() => {
    fetch("https://6691464a26c2a69f6e8f3048.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => setItems(json));
  }, []);

  return (
    <div className="wrapper clear">
      {cartOpen && (
        <Drawer
          items={cartItems}
          onClose={() => {
            setCartOpen(false);
          }}
        />
      )}
      <Header
        onClickCart={() => {
          setCartOpen(true);
        }}
        onCloseCart={() => {
          setCartOpen(false);
        }}
      />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/assets/img/search.svg" alt="Search"></img>
            <input placeholder="search..."></input>
          </div>
        </div>

        <section className="sneakers d-flex flex-wrap">
          {items.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => {
                console.log("Favorite clicked");
              }}
              onPlus={() => {
                console.log("Plus clicked");
              }}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
