import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Main.css";
import axios from "axios";
import ProductForm from "../../components/ProductForm/ProductForm";
import ProductList from "../../components/ProductList/ProductList";







const Main = () => {
  const [allProducts, setAllProducts] = useState([]);


  // get all products
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => setAllProducts(res.data.products))
      .catch((err) => console.log(err));
  }, [allProducts]); // important!



  // delete One specific product
  const deleteProduct = (productId) => {
    axios
      .delete("http://localhost:8000/api/products/" + productId)
      .then((res) => {
        console.log(res.data.result);
        //setAllProducts(allProducts.filter(product=> product._id !== productId)); // pas necessaire
      })
      .catch((err) => console.log(err));
  };


  // create one product
  const createProduct = (prodObj) => {
    axios
      .post(
        "http://localhost:8000/api/products", prodObj 
      )
      .then((res) => {
        console.log(res.data.product);
       // setAllProducts([...allProducts, res.data.product]); // pas necessaire
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="Main">
      <ProductForm
        requestPostorPatch={createProduct}
        initialTitle=""
        initialPrice=""
        initialDescription=""
      />

      <ProductList allProducts={allProducts} deleteProduct={deleteProduct} />
    </div>
  );

};

Main.propTypes = {};

Main.defaultProps = {};

export default Main;