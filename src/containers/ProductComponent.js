import './ProductComponent.css'
import React from 'react'
import { useSelector } from 'react-redux'

// for page functionality
import { Link } from 'react-router-dom';

function ProductComponent() {
    const products = useSelector((state => state.allProducts.products));
    const renderList = products.map((product) => {
        const {id, title, image, price, category} = product;
        return (
            // notice that we have a key defined
            <div className="four column wide" key={id}>
                <Link to={`/product/${id}`}>
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img className = "image-thing" src={image} alt={title} />
                        </div>
                        <div className="content">
                            <div className="header">{title}</div>
                            <div className="meta price">$ {price}</div>
                            <div className="meta">{category}</div>
                            <p></p>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
        );
    });

    return (
        <>
            {renderList}
        </>
    );
}

export default ProductComponent