import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import Card from "../../components/cards/Card";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setData(res.data.products);
    });
  }, []);

  const addToBasket = (item) => {
    axios.post('https://northwind.vercel.app/api/categories', item)
    .then(res => {
        console.log('elave olundu', res.data);
    })
  };

  const addToWish = (item) => {
    axios.post('https://northwind.vercel.app/api/categories', item)
    .then(res => {
        console.log('elave olundu', res.data);
    })
  };

  return (
    <Layout>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((item) => (
          <Card item={item} addtocart={() => addToBasket(item)} addtowish={addToWish}/>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
