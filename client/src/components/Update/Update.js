import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Update.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ProductForm from '../ProductForm/ProductForm';
import DeleteButton from '../DeleteButton/DeleteButton';




const Update = (props) => {

    const { id } = useParams();
    const [prodObj, setProdObj] = useState({});
    const [loaded, setLoaded] = useState(false); // verifie quand si ls donnees st recupereés et disponibles
    const navigate = useNavigate();
  
  
  
    //get  data one specific product
    useEffect(() => {
      axios
        .get("http://localhost:8000/api/products/" + id)
        .then((res) => {
          setProdObj(res.data.product);
          setLoaded(true); // données dispo on set en "true"
        })
        .catch((err) => console.log(err));
    }, [id]); // bof
  
  
  
    // update one specific product
    const updateProduct = (prodObj) => {
      axios
        .patch(
          "http://localhost:8000/api/products/" + id,
  
          prodObj 
        )
        .then((res) => {
         // console.log(res.data.product);
          navigate("/home");
        })
        .catch((err) => console.log(err));
    };
  
  
  
    return (
      <div className="Update">
        <h1>Update a Product</h1>
        {loaded === true ? 
          <ProductForm requestPostorPatch={updateProduct} initialTitle={prodObj.title} 
          initialPrice={prodObj.price} initialDescription={prodObj.description} />
         : null}
        <DeleteButton productId={prodObj._id} successCallback={() => navigate("/")} />
        
        <Link to="/">
          Return Home Page!
        </Link>
      </div>
    );

};

Update.propTypes = {};

Update.defaultProps = {};

export default Update;
