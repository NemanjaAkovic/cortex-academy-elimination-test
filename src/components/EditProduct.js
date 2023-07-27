import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "./ProductContext";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { items, updateProduct } = useContext(ProductContext);
  const productId = parseInt(id);
  const product = items.find((item) => item.id === productId);

  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [thumbnail, setThumbnail] = useState(product.thumbnail);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = {
      title,
      price,
      description,
      thumbnail,
    };

    updateProduct(productId, updatedProduct);

    navigate("/");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>Edit Product:</h1>
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
      <input
        type="text"
        placeholder="Thumbnail URL"
        value={thumbnail}
        onChange={(e) => setThumbnail(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default EditProduct;
