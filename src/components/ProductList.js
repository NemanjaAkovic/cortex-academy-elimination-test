import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { useNavigate } from "react-router-dom";
import ProductItem from "./ProductItem";
import classes from "./ProductList.module.css";

function ProductList({ items, counter }) {
  const displayedItems = items.slice(0, counter);
  const { loadMore } = useContext(ProductContext);
  const navigate = useNavigate();

  return (
    <div>
      <div className={classes.position}>
        <button
          onClick={() => navigate("/product/add")}
          className={classes.btn}
        >
          Add Product
        </button>
      </div>
      <div className={classes.productContainer}>
        {displayedItems.map((item) => (
          <ProductItem key={item.id} product={item} />
        ))}
        {items.length > counter && (
          <div className={classes.position}>
            <button onClick={loadMore} className={classes.btn}>
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;
