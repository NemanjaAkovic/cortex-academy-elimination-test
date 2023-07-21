import React, { useContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ProductContext } from "./components/ProductContext";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import EditProduct from "./components/EditProduct";
import AddProduct from "./components/AddProduct";
import Loader from "./components/Loader";

const App = () => {
  const { items, counter, loading, loadMore } = useContext(ProductContext);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProductList
                items={items}
                counter={counter}
                loadMore={loadMore}
              />
            }
          />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/product/edit/:id" element={<EditProduct />} />
          <Route path="/product/add" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
