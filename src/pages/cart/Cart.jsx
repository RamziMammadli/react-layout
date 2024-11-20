import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import Card from "../../components/cards/Card";

const Cart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/categories").then((res) => {
      const filteredData = res.data.filter(item => item.title != undefined)
      setData(filteredData)
    });
  }, []);

  return (
    <Layout>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((item) => (
          <Card
            item={item}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Cart;
