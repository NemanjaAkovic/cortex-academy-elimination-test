import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import classes from "./ProductItem.module.css";

function ProductItem({ product }) {
  const { id, title, price, thumbnail, description } = product;
  const navigate = useNavigate();
  const { deleteProduct } = useContext(ProductContext);

  const handleDelete = () => {
    deleteProduct(id);
  };

  return (
    <div className={classes.product}>
      <div>
        <h3>{title}</h3>
        <p>Id:{id}</p>
        <img src={thumbnail} alt={title} />
      </div>
      <p>Price: {price}</p>
      <p className={classes.productDescription}>Description{description}</p>
      <div>
        <Link to={`/product/${id}`} className={classes.btn}>
          View Details
        </Link>
        <button
          onClick={() => navigate(`/product/edit/${id}`)}
          className={classes.btn}
        >
          Edit Product
        </button>
        <button onClick={handleDelete} className={classes.btnDelete}>
          Delete Product
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
