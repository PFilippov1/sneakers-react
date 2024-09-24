import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import axios from "axios";
///
// const arr = [
// {
//   title: "Men`s sneakers Nike Blazer Mid Suede",
//   price: 120,
//   imageUrl: "/assets/sneakers/1.jpg",
// },
// {
//   title: "Men`s sneakers Air Max 270",
//   price: 130,
//   imageUrl: "/assets/sneakers/2.jpg",
// },
// {
//   title: "Men`s sneakers Nike Blazer Mid Suede",
//   price: 140,
//   imageUrl: "/assets/sneakers/3.jpg",
// },
// {
//   title: "Men`s sneakers Puma X Aka Boku Future Rider",
//   price: 110,
//   imageUrl: "/assets/sneakers/4.jpg",
// },
// {
//   title: "Men`s sneakers Under Armour Curry 8",
//   price: 130,
//   imageUrl: "/assets/sneakers/5.jpg",
// },
// {
//   title: "Men`s sneakers Nike Kyrie 7",
//   price: 150,
//   imageUrl: "/assets/sneakers/6.jpg",
// },
// {
//   title: "Men`s sneakers Jordan Air Jordan 11",
//   price: 100,
//   imageUrl: "/assets/sneakers/7.jpg",
// },
// {
//   title: "Men`s sneakers Nike LeBron XVIII",
//   price: 120,
//   imageUrl: "/assets/sneakers/8.jpg",
// },
// {
//   title: "Men`s sneakers Nike ",
//   price: 130,
//   imageUrl: "/assets/sneakers/9.jpg",
// },
// {
//   title: "Men`s sneakers Nike Kyrie Flytrap",
//   price: 110,
//   imageUrl: "/assets/sneakers/10.png",
// },
// {
//   title: "Men`s sneakers Nike Flytrap IV",
//   price: 130,
//   imageUrl: "/assets/sneakers/11.png",
// },
// {
//   title: "Men`s sneakers Nike ",
//   price: 100,
//   imageUrl: "/assets/sneakers/12.jpg",
// },

// -----------------------//
//  {
//   "id": "1",
//   "title": "Men`s sneakers Nike Blazer Mid Suede",
//   "price": "120",
//   "imageUrl": "/assets/sneakers/1.jpg"
// },
// {
//   "id": "2",
//   "title": "Men`s sneakers Air Max 270",
//   "price": "130",
//   "imageUrl": "/assets/sneakers/2.jpg"
// },
// {
//   "id": "3",
//   "title": "Men`s sneakers Nike Blazer Mid Suede",
//   "price": "140",
//   "imageUrl": "/assets/sneakers/3.jpg"
// },
// {
//   "id": "4",
//   "title": "Men`s sneakers Puma X Aka Boku Future Rider",
//   "price": "110",
//   "imageUrl": "/assets/sneakers/4.jpg"
// },
// {
//   "id": "5",
//   "title": "Men`s sneakers Under Armour Curry 8",
//   "price": "130",
//   "imageUrl": "/assets/sneakers/5.jpg"
// },
// {
//   "id": "6",
//   "title": "Men`s sneakers Nike Kyrie 7",
//   "price": "150",
//   "imageUrl": "/assets/sneakers/6.jpg"
// },
// {
//   "id": "7",
//   "title": "Men`s sneakers Jordan Air Jordan 11",
//   "price": "100",
//   "imageUrl": "/assets/sneakers/7.jpg"
// },
// {
//   "id": "8",
//   "title": "Men`s sneakers Nike LeBron XVIII",
//   "price": "120",
//   "imageUrl": "/assets/sneakers/8.jpg"
// },
// {
//   "id": "9",
//   "title": "Men`s sneakers Nike ",
//   "price": "130",
//   "imageUrl": "/assets/sneakers/9.jpg"
// },
// {
//   "id": "10",
//   "title": "Men`s sneakers Nike Kyrie Flytrap",
//   "price": "110",
//   "imageUrl": "/assets/sneakers/10.png"
// },
// {
//   "id": "11",
//   "title": "Men`s sneakers Nike Flytrap IV",
//   "price": "130",
//   "imageUrl": "/assets/sneakers/11.png"
// },
// {
//   "id": "12",
//   "title": "Men`s sneakers Nike ",
//   "price": "100",
//   "imageUrl": "/assets/sneakers/12.jpg"
// }
//---------------------//
// ];

///

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([
    // {
    //   title: "Men`s sneakers Nike Blazer Mid Suede",
    //   price: 120,
    //   imageUrl: "/assets/sneakers/1.jpg",
    // },
    // {
    //   title: "Men`s sneakers Air Max 270",
    //   price: 130,
    //   imageUrl: "/assets/sneakers/2.jpg",
    // },
  ]);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  // React.useEffect(() => {
  //   fetch("https://6691464a26c2a69f6e8f3048.mockapi.io/items")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((json) => setItems(json));
  // }, []);

  React.useEffect(() => {
    axios
      .get("https://6691464a26c2a69f6e8f3048.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });

    axios
      .get("https://6691464a26c2a69f6e8f3048.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://6691464a26c2a69f6e8f3048.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  // const onRemoveItem = (id) => {
  //   axios.delete(`https://6691464a26c2a69f6e8f3048.mockapi.io/cart/${id}`);
  //   setCartItems((prev) => prev.filter((item) => item.id !== id));
  // };

  const onRemoveItem = (id) => {
    axios.delete(`https://6691464a26c2a69f6e8f3048.mockapi.io/cart/${id}`)
      .then(() => {
        setItems((prevCartItems) => prevCartItems.filter((item) => item.id !== id));
        console.log("Item deleted successfully");
      })
      .catch((error) => console.error("Error deleting item:", error));
  };
  

  // //TODO
  // const onAddToCart = (obj) => {
  //   axios.post("https://6691464a26c2a69f6e8f3048.mockapi.io/cart", obj);

  //   setCartItems((prev) => {
  //     // Check if the item already exists in the cart
  //     const isItemInCart = prev.some((item) => item.title === obj.title);
  //     // if (isItemInCart&&!obj.isAdded) {
  //     //   return prev.filter((item) => item.title !== obj.title); // If the item is already in the cart, return the previous state
  //     // }
  //     // return [...prev, obj]; // Otherwise, add the new item to the cart
  //     return isItemInCart && !obj.isAdded
  //       ? prev.filter((item) => item.title !== obj.title)
  //       : [...prev, obj];
  //   });
  // };
  ///-----------//

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
    // console.log(event.target.value)
  };

  return (
    <div className="wrapper clear">
      {cartOpen && (
        <Drawer
          items={cartItems}
          onClose={() => {
            setCartOpen(false);
          }}
          onRemove={onRemoveItem}
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
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={() => {
                  console.log("Favorite clicked");
                }}
                onPlus={(obj) => {
                  onAddToCart(obj);
                }}
              />
            ))}
        </section>
      </div>
    </div>
  );
}

export default App;
