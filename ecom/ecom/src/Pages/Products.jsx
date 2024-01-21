import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsFailure,
  getProductsRequest,
  getProductsSuccess,
} from "../Redux/action";
import { useEffect } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const getData = useSelector((store) => store.reducer);
  const dispatch = useDispatch();

  const { products, loading,counter } = getData;



  const fetchAllProducts = async () => {
    try {
      dispatch(getProductsRequest(true));
      const result = await fetch(`https://fakestoreapi.com/products?limit=${counter}`);
      const res = await result.json();
      dispatch(getProductsSuccess(res));
    } catch (err) {
      console.log(err);
      dispatch(getProductsFailure(true));
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, [counter]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "10px",
      }}
    >
      {loading ? (
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
