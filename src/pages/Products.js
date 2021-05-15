import React from 'react';
import { Section } from '../components/globalStyle';
import ImgProduct from "../images/img-1.jpg"

function Products() {
    return (
        <Section>
            <h2>PRODUCTS</h2>
            <img src={ImgProduct} alt="Product" />
        </Section>
    )
}
export default Products;
