import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { NavLink } from "react-router-dom";

function ListProducts() {
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
        </div>
    )
}

export default ListProducts