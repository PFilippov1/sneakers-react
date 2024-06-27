import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";

const arr = [
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
  {
    title: "Men`s sneakers Nike Blazer Mid Suede",
    price: 140,
    imageUrl: "/assets/sneakers/3.jpg",
  },
  {
    title: "Men`s sneakers Puma X Aka Boku Future Rider",
    price: 110,
    imageUrl: "/assets/sneakers/4.jpg",
  },
  {
    title: "Men`s sneakers Under Armour Curry 8",
    price: 130,
    imageUrl: "/assets/sneakers/5.jpg",
  },
  {
    title: "Men`s sneakers Nike Kyrie 7",
    price: 150,
    imageUrl: "/assets/sneakers/6.jpg",
  },
  {
    title: "Men`s sneakers Jordan Air Jordan 11",
    price: 100,
    imageUrl: "/assets/sneakers/7.jpg",
  },
  {
    title: "Men`s sneakers Nike LeBron XVIII",
    price: 120,
    imageUrl: "/assets/sneakers/8.jpg",
  },
  {
    title: "Men`s sneakers Nike ",
    price: 130,
    imageUrl: "/assets/sneakers/9.jpg",
  },
  {
    title: "Men`s sneakers Nike Kyrie Flytrap",
    price: 110,
    imageUrl: "/assets/sneakers/10.png",
  },
  {
    title: "Men`s sneakers Nike Flytrap IV",
    price: 130,
    imageUrl: "/assets/sneakers/11.png",
  },
  {
    title: "Men`s sneakers Nike ",
    price: 100,
    imageUrl: "/assets/sneakers/12.jpg",
  },
];

function App() {
  const [cartOpen, setCartOpen] = React.useState(false);
  return (
    <div className="wrapper clear">
      {cartOpen && <Drawer onClose={()=>{setCartOpen(false)}} />}
      <Header onClickCart={()=>{setCartOpen(true)}} onCloseCart={()=>{setCartOpen(false)}}/>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/assets/img/search.svg" alt="Search"></img>
            <input placeholder="search..."></input>
          </div>
        </div>

        <section className="sneakers d-flex">
          {arr.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              price={card.price}
              imageUrl={card.imageUrl}
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
