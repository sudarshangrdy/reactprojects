import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const pizzasLength = pizzas.length;
  //Using conditional operator
  /*
    return (
      <main className="menu">
        <h2>Our Menu</h2>
        {pizzasLength > 0 && (
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        )}
      </main>
    );
    */
  //Using Terminary Operator
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzasLength > 0 ? (
        <React.Fragment>
          <p>
            Pizza is the perfect circle of happiness where melted cheese meets
            endless possibilities on a crispy canvas. Whether it's a quick slice
            or a gourmet masterpiece, it's the universal language of
            deliciousness that never disappoints.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We are still working on our Menu, Please come back later :)</p>
      )}
    </main>
  );
}

//Here we are using destructuring instead of using props object
function Pizza({ pizzaObj }) {
  return (
    <li className={pizzaObj.soldOut ? "sold-out pizza" : "pizza"}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHr = 10;
  const closeHr = 22;
  const isOpen = hour >= openHr && hour <= closeHr;
  if (isOpen) {
    console.log("We are Open.");
  } else {
    console.log("We are Closed.");
  }
  //Using Conditional Operator
  /*return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>We are open until {closeHr}:00. Come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );*/
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHr={closeHr} />
      ) : (
        <p>
          We are Happy to Welcome you between {openHr}:00 and {closeHr}:00
          hours.
        </p>
      )}
    </footer>
  );
  //return React.createElement("footer", null, "We are Currently Open");
}

function Order(props) {
  return (
    <div className="order">
      <p>
        We are open until {props.closeHr}:00. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
