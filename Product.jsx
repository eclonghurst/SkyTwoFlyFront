import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Product = (props) =>{
    const nav = useNavigate();
  
    return ( 
        <div onClick={() => nav("/product/" + props.id)} className="product">
            <p>Name: {props.name}</p>
            <p>Price: {props.price}</p>
            <p>Category: {props.category}</p>
        </div> 
        );
}


Product.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    job: PropTypes.string.isRequired,
}


export default Product