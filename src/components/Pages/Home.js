import React from "react";
import "../../assets/css/Home.css";
import Hero from "../Hero";
import PropertyTypeCard from "../PropertyTypeCard";
import BestsellerCard from "../BestsellerCard";
import Header from "../Header";
import Footer from "../Footer";

function Home() {
  return (
    <div className="home">
      <Header />
      <Hero />

      <h1 className="home_title">Property Types</h1>
        <div>
        <PropertyTypeCard />
        </div>

      <h1 className="home_title">Bestsellers</h1>

      <div>
       <BestsellerCard />
      </div>
      <Footer/>
    </div>
  );
}

export default Home;