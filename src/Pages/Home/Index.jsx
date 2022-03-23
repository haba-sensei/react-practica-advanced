import React from "react";
import ProductList from "@containers/ProductList";
import AnimatedPage from "@routes/AnimateApp";

const Home = () => { 
	return (
		<>
			<AnimatedPage> 
				<ProductList />
			</AnimatedPage> 
		</>
	);
};

export default Home;
