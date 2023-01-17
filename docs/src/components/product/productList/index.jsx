import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { NavLink } from "react-router-dom";
import colors from '../../color'
import './index.css';

function ListProducts({ displayItemMode, borderMode, pathTo }) {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const res = await axios.get("http://localhost:5000/products");
        setProducts(res.data)
    }

    useEffect(() => {
        getProducts();
    }, [])

    const productTable = () => {
        return (
            <div className='table-container' style={borderMode && { borderRight: `solid 2px ${colors.darkGray}`, borderWidth: 'thin' }}>
                <div className='table-header'>
                    Danh mục sản phẩm
                    <hr style={{ backgroundColor: colors.orange }} />
                </div>
                {
                    products.map((item, index) => {
                        return (
                            <div key={index} className="table-list-name">
                                <div className='table-list-item'>
                                    <NavLink to={pathTo ? (pathTo + item.path): item.path}>
                                        {item.name}
                                    </NavLink>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    const productItems = () => {
        return (
            <div className='items-container'>
                
            </div>
        )
    }

    return (
        <div>
            {
                displayItemMode ? productItems() : productTable()
            }
        </div>
    )
}

export default ListProducts
