import React from 'react';
import Footer from "../../components/footer";
import Header from "../../components/header";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Product() {
    const [product, setProduct] = useState({});
    const { productId } = useParams();



    useEffect(() => async () => {
        const res = await axios.get("http://localhost:5000/products");
        const products = res.data.filter(item => item.path === productId);
        setProduct(products[0]);
    }, [productId])

    return (
        <div>
            <Header />
            <h3>{product.name}</h3>
            <div>{product.price}</div>
            <div>{product.description}</div>
            <Footer />
        </div>
    )
}

export default Product