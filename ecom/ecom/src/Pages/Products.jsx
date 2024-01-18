import React from "react";
import { store } from "../Redux/store";
import {
  getProductsFailure,
  getProductsRequest,
  getProductsSuccess,
} from "../Redux/action";
import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [render, setRender] = useState(false);
  const { getState, dispatch, subscribe } = store;

  const fetchAllProducts = async () => {
    try {
      dispatch(getProductsRequest());
      const result = await fetch(`https://fakestoreapi.com/products`);
      const res = await result.json();
      dispatch(getProductsSuccess(res));
    } catch (err) {
      console.log(err);
      dispatch(getProductsFailure);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const { products, laoding } = getState();

  subscribe(() => {
    setRender(!render);
  });

  return (
    <div style={{display:"grid", gridTemplateColumns: "repeat(3,1fr)", gap:"10px" }} >
      {laoding ? (
        <h1>Please Wait Products are loading</h1>
      ) : (
        products.map((pro) => {
          return <ProductCard key={pro.id} pro={pro} />;
        })
      )}
    </div>
  );
};

export default Products;
