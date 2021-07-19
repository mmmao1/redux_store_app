import './ProductDetail.css'
import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { selectedProducts, removeSelectedProduct } from '../redux/actions/productActions'

function ProductDetail() {
    // if you want to use "product" it needs a store state and reducer
    const product = useSelector((state) => state.product);
    const {image, title, price, category, description} = product;
    
    // ":key" is what "useParams" will extract from the url
    // this is specific to "react-router-dom"
    const {productID} = useParams();
    const dispatch = useDispatch();

    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productID}`).catch((err) => {console.log("Err", err)});
        
        // set above product variable
        dispatch(selectedProducts(response.data));
    }

    useEffect(() => {
        // check if "productID" exists and is not ""
        if (productID && productID !== "") {
            fetchProductDetail();
        }

        // useEffect return functions do cleanup
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [productID]); // every time productID changes, do above (which will happen after we click on a new item)

    return (
        // always need a container
        <>
          {(Object.keys(product).length === 0) // still fetching...
            ? <div>Loading...</div>
            : (<div>
                <img src={image}/>
                <h1>$ {price}</h1>
                </div>)
          }
        </>
    );
    
}

export default ProductDetail