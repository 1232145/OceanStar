import Footer from "../../components/footer";
import Header from "../../components/header";
import { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const res = await axios.get("http://localhost:5000/products");
        setProducts(res.data)
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div>
            <Header />
            <h1>Products</h1>
            {
                products.map((item, index) => {
                    return (
                        <div key={index}>
                            <NavLink to={item.path}>
                                {item.name}
                            </NavLink>
                        </div>
                    )
                })
            }
            <Footer />
        </div>
    )
}

export default Products;