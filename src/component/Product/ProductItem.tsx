import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../graphql/product";

const ProductItem = ({
  id,
  title,
  imageUrl,
  price,
  description,
  createAt,
}: Product) => {
  return (
    <li className="product-item">
      <Link to={`/products/${id}`}>
        <p className="product-item-title">{title}</p>
        <img className="product-item-image" src={imageUrl} />
        <span className="product-item-price">{price}</span>
      </Link>
    </li>
  );
};

export default ProductItem;
