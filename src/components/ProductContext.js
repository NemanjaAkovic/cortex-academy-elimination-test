import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(9);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.products);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const addProduct = (item) => {
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        setItems([...items, data]);
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  const updateProduct = (id, updatedProduct) => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        setItems((prevItems) =>
          prevItems.map((item) =>
            item.id === id ? { ...item, ...updatedProduct } : item
          )
        );
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  const deleteProduct = (id) => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setItems(items.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  const loadMore = () => {
    setCounter((prevCounter) => prevCounter + 9);
  };

  return (
    <ProductContext.Provider
      value={{
        items,
        loading,
        counter,
        addProduct,
        updateProduct,
        deleteProduct,
        loadMore,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
