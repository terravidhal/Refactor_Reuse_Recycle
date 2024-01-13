import PropTypes from 'prop-types';
import './ProductList.css';
import { Link } from 'react-router-dom';
import DeleteButton from '../DeleteButton/DeleteButton';





const ProductList =  (props) => {
  const { allProducts, deleteProduct } = props;

  return (
    
    <div className="ProductList">
      <h2>All products:</h2>
      { 
         allProducts.map((elt, index)=> {
          return (
            <div key={index} className='one_product'>
              <Link to={`/products/${elt._id}`}> 
                {elt.title} Page details! 
              </Link>
              |
              <Link to={"/products/edit/" + elt._id}>
                Edit
              </Link>
              |
              {/* <button onClick={()=>{deleteProduct(elt._id)}}>Delete</button> */}
              <DeleteButton productId={elt._id} successCallback={()=>deleteProduct(elt._id)}/>
            </div>
          );
        }) 
      } 
    </div>
    );
};




ProductList.propTypes = {};

ProductList.defaultProps = {};

export default ProductList;
