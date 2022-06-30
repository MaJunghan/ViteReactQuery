import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../types";

const ProductItem = ({
  category,
  title,
  image,
  price,
  rating,
  id,
}: Product) => {
  return (
    <li className="product-item">
      <Link to={`/products/${id}`}>
        <p className="product-item-cetegory">{category}</p>
        <p className="product-item-title">{title}</p>
        <img className="product-item-image" src={image} />
        <span className="product-item-price">{price}</span>
        <span className="product-item-rate">{rating.rate}</span>
      </Link>
    </li>
  );
};

export default ProductItem;
