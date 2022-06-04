import React from "react";
import { Product } from "../Components/Product/Product";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src=" https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-01-Hero-D-6bababd9-ff42-407e-8e71-b6b0012e8def._CB417386616_QL85_V1_.jpg"
          className="home__image"
          alt="homepage"
        />
        <div className="home__row">
          <Product
            id={100}
            title="Titan Smart Watch"
            price={29000}
            image="https://m.media-amazon.com/images/I/61DRnuSAgqL._UX522_.jpg
"
            rating={4}
          />
          <Product
            id={101}
            title="Apple Iphone 13"
            price={125000}
            image="https://m.media-amazon.com/images/I/71xb2xkN5qL._SX679_.jpg
"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={102}
            title="STRIFF Adjustable Laptop Stand Patented Riser Ventilated"
            price={6580}
            image="https://m.media-amazon.com/images/I/71Zf9uUp+GL._SX522_.jpg
"
            rating={3}
          />
          <Product
            id={103}
            title="Ferrero Collection - Assorted Chocolates - 24 Pieces"
            price={880}
            image="https://m.media-amazon.com/images/I/7190VJZZuyL._SX679_.jpg"
            rating={5}
          />
          <Product
            id={105}
            title="Zebronics Zeb-Bro in Ear Wired Earphones with Mic"
            price={5000}
            image="https://m.media-amazon.com/images/I/71hJAvt8zLL._SX522_.jpg
"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id={106}
            title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
            price={139050}
            image="https://m.media-amazon.com/images/I/71MlcO29QOL._SX679_.jpg
"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}
