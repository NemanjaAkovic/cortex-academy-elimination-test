import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "./ProductContext";

function AddProduct() {
  const { items, addProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: (items.length + 1).toString(),
      title,
      price,
      description,
    };
    addProduct(newProduct);
    navigate("/");
  };

  return (
    <form onSubmit={handleFormSubmit} className="form">
      <h1>Add Product:</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;
