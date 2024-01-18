import React from "react";

const ProductCard = (pro) => {
  console.log(pro);
  const { title, category, description, id, image, rating,price } = pro.pro;
  return (
    <div style={{ width:"100%", border:"2px solid green", borderRadius:'10px' }} >
      <img src={image} width={200} />
      <h3> {title} </h3>
      <h4>Category : {category} </h4>
      <h4> Rating : {rating.rate} </h4>
      <h3> Price : {price} $ </h3>

     <p style={{display:"flex", flexWrap:"nowrap"}} > {description} </p>
    </div>
  );
};

export default ProductCard;
