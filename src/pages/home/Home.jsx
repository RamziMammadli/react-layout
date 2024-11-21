import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import Card from "../../components/cards/Card";

const Home = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([])
  console.log(cart);
  
  const [name, setName] = useState("");

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setData(res.data.products);
    });

    setCart(JSON.parse(localStorage.getItem('cart')) || [])
    setWish(JSON.parse(localStorage.getItem('wish')) || [])


  }, []);

  const sendDb = () => {};

  const addToBasket = (item) => {

    const updatedcart = [...cart, item]
    localStorage.setItem('cart', JSON.stringify(updatedcart))

  };

  const addToWish = (item) => {
    const updatedwish = [...wish, item]
    localStorage.setItem('wish', JSON.stringify(updatedwish))
  };

  return (
    <Layout>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((item) => (
          <Card item={item} addtocart={() => addToBasket(item)} addtowish={() => addToWish(item)}/>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
