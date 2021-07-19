import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import { setProducts } from '../redux/actions/productActions'

var loading = false;

function ProductListing() {
    // get something we want from store
    // in this case it is "products"
    const products = useSelector((state) => state);

    // initialize dispatch
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {console.log("Err", err)});

        // now "products" is assigned response.data
        dispatch(setProducts(response.data));
    }

    // empty array -- upon mount, call "fetchProduct"
    // and set loading to true for the first and last time
    useEffect(() => {
        fetchProducts();
        loading = true;
    }, []);

    return (
        <>
            {!loading ? (<div>Loading...</div>) :
        (<div className="ui grid container">
            <h1>Products</h1>
            <ProductComponent />
        </div>)}
        </>
    )
}

export default ProductListing