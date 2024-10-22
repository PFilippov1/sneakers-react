import Card from "../components/Card";
import React from "react";
import AppContext from "../context";

function Orders() {

  const { orders } = React.useContext(AppContext);

  return (
    <div className="content p-40" >
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          MY ORDERS
        </h1>

      </div>

      <section className="sneakers d-flex flex-wrap">
        {[]
          .map((item, index) => (
            <Card
              key={index}
              id={item.id}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))}
      </section>
    </div >
  )
}

export default Orders;