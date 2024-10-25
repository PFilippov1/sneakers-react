import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import axios from "axios";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./context";
import Orders from "./pages/Orders";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  // React.useEffect(() => {
  //   axios
  //     .get("https://6691464a26c2a69f6e8f3048.mockapi.io/items")
  //     .then((res) => {
  //       setItems(res.data);
  //     });

  //   axios
  //     .get("https://6691464a26c2a69f6e8f3048.mockapi.io/cart")
  //     .then((res) => {
  //       setCartItems(res.data);
  //     });

  //   // axios
  //   // .get("https://6691464a26c2a69f6e8f3048.mockapi.io/favorites")
  //   // .then((res) => {
  //   //   setFavorites(res.data);
  //   // });
  // }, []);

  React.useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const cartResponse = await axios.get(
          "https://6691464a26c2a69f6e8f3048.mockapi.io/cart"
        );
        setCartItems(cartResponse.data);
        const itemsResponse = await axios.get(
          "https://6691464a26c2a69f6e8f3048.mockapi.io/items"
        );
        setItems(itemsResponse.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://6691464a26c2a69f6e8f3048.mockapi.io/cart/${findItem.id}`
        );
      } else {
       // it makes data display without backend delay
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          "https://6691464a26c2a69f6e8f3048.mockapi.io/cart",
          obj
        );
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            } else return item;
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const onAddToFavorite = (obj) => {
  //   axios.post("https://6691464a26c2a69f6e8f3048.mockapi.io/favorite", obj);
  //   setFavorites((prev) => [...prev, obj]);
  // };

  // const onAddToFavorite = (obj) => {
  //   if (obj) {
  //     setFavorites((prev) => [...prev, obj]);
  //     console.log(favorites);
  //   }
  // };

  // const onAddToFavorite = (obj) => {
  //   if (favorites.find((obj) => obj.id === obj.id)) {
  //     axios.delete(`favorites/${obj.id}`);
  //     setFavorites((prev) => prev.filter((item) => item.id === obj.id));
  //   }else{
  //       axios.post('/favorites', obj)
  //       setFavorites((prev) => [...prev, obj]);
  //       console.log(favorites);}
  //        }
  // };
  const onAddToFavorite = (obj) => {
    const isFavorite = favorites.some(
      (item) => Number(item.id) === Number(obj.id)
    );

    if (isFavorite) {
      // Delete element from array favorites
      setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      // Add element to array favorites
      setFavorites((prev) => [...prev, obj]);
    }
    console.log(favorites);
  };

  const onRemoveItem = async (id) => {
    try {
      await axios.delete(
        `https://6691464a26c2a69f6e8f3048.mockapi.io/cart/${id}`
      );
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
    // console.log(event.target.value)
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorite,
        setCartOpen,
        setCartItems,
      }}
    >
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onClose={() => {
            setCartOpen(false);
          }}
          onRemove={onRemoveItem}
          opened={cartOpen}
        />
        <Header
          onClickCart={() => {
            setCartOpen(true);
          }}
          onCloseCart={() => {
            setCartOpen(false);
          }}
        />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
          />
          <Route path="/favorites" exact element={<Favorites />} />
          <Route path="/orders" exact element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;

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

// React.useEffect(() => {
//   fetch("https://6691464a26c2a69f6e8f3048.mockapi.io/items")
//     .then((res) => {
//       return res.json();
//     })
//     .then((json) => setItems(json));
// }, []);
