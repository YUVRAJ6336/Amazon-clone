import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://wallpaperaccess.com/full/6385958.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg"
            rating={3}
          />
          <Product
            title="OnePlus 9 5G (Arctic Sky,12GB RAM, 256GB Storage)"
            price={42999}
            image="https://m.media-amazon.com/images/I/61fy+u9uqPL._AC_SY390_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="HP v236w 64GB USB 2.0 Pen Drive"
            price={479}
            image="https://m.media-amazon.com/images/I/61xNG4wjOuL._SX679_.jpg"
            rating={4}
          />
          <Product
            title="OnePlus Smart Band: 13"
            price={1599}
            image="https://m.media-amazon.com/images/I/61XPTRJZcCL._SX679_.jpg"
            rating={5}
          />
          <Product
            title="WILDHORN® Carter Leather Wallet for Men (Black Inside)"
            price={299}
            image="https://m.media-amazon.com/images/I/9103dS4XwdL._SX679_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="American Tourister Casual Backpack"
            price={999}
            image="https://m.media-amazon.com/images/I/91FvDEE9sCL._UY879_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
