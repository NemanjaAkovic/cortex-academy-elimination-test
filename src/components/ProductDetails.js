import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import classes from "./ProductDetails.module.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { items } = useContext(ProductContext);
  const productId = parseInt(id);
  const product = items.find((item) => item.id === productId);

  if (!product) {
    return (
      <div>
        Product not found
        <Link to="/">Go back</Link>
      </div>
    );
  }

  return (
    <div className={classes.productDetails}>
      <div className={classes.productImage}>
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className={classes.productDetailsInfo}>
        <h3>{product.title}</h3>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <p>Brand: {product.brand}</p>
        <p>Category: {product.category}</p>
        <p>Rating: {product.rating}</p>
        <Link to="/" className={classes.productDetailsButton}>
          Go back
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
