import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductForm.css';



const ProductForm = (props) => {

    
    const { initialTitle, initialPrice,initialDescription, requestPostorPatch } = props;
    const [title, setTitle] = useState(initialTitle); 
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
  
    const onSubmitHandler =  (e) => {
         
        e.preventDefault();
        requestPostorPatch({ title, price, description});
         //reset form
         setTitle(" ");
         setPrice(" "); 
         setDescription(" "); 
    }
    

    return (
        <div className="ProductForm">
           <h1>Product Manager</h1>
          <form onSubmit={onSubmitHandler}>
             <div className='field'>
                 <label>title :</label><br/>
                 <input type="text" value={title} onChange = {(e)=>setTitle(e.target.value)}/>
             </div>
             <div className='field'>
                 <label>price :</label><br/>
                 <input type="number" value={price} onChange = {(e)=>setPrice(e.target.value)}/>
             </div>
             <div className='field'>
                 <label>description :</label><br/>
                 <textarea name="" id="" cols="2" rows="2" value={description} onChange = {(e)=>setDescription(e.target.value)}></textarea>
             </div>
             <input value="submit"  type="submit"/>
          </form>
        </div>
     )
};
  
ProductForm.propTypes = {};

ProductForm.defaultProps = {};

export default ProductForm;
