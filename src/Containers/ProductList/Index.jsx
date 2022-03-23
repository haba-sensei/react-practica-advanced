import React from "react";
import ProductItem from "@components/ProductItem"; 
import useGetProducts from "./hooks/useGetProducts";
import "./Style.scss";
const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
	const products = useGetProducts(API);
	return (
		<section className='main-container'>
			<div className='ProductList'>
				{products.map((product, index) => ( 
					<ProductItem 
						indexValue={`productItem-${index}`}
						key={`productItem-${index}`}  
						product={product}
					/>
				))}
			</div>
		</section>
	);
};

export default ProductList;
