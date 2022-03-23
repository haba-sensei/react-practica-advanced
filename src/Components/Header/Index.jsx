import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Menu from "@components/Menu";
import MyOrder from "@containers/MyOrder";
import AppContext from "@context/AppContext";
import "./Style.scss";
import { menu, logo, icon_shopping_cart } from "./Imports/Images";

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const { state } = useContext(AppContext);

	const handleToggle = () => {
		setToggle(!toggle);
	};

	return (
		<nav>
			<img src={menu} width='100' height='50' alt='menu' className='menu' />
			<div className='navbar-left'>
				<img src={logo} width='100' height='50' alt='logo' className='nav-logo' />
				<ul>
					<li>
						<Link to='/'>All</Link>
					</li>
					<li> 
						<Link to='/'>Clothes </Link>
					</li>
					<li>
						<Link to='/'>Electronics </Link>
					</li>
					<li>
						<Link to='/'>Furnitures</Link>
					</li>
					<li>
						<Link to='/'>Toys</Link>
					</li>
					<li>
						<Link to='/'>Others</Link>
					</li>
					<li>
						<Link to='/login'>login</Link>
					</li>
				</ul>
			</div>
			<div className='navbar-right'>
				<ul>
					<li className='navbar-email' onClick={handleToggle}>
						platzi@example.com
					</li>
					<li className='navbar-shopping-cart' onClick={() => setToggleOrders(!toggleOrders)}>
						<img src={icon_shopping_cart} width='120' height='20' alt='shopping cart' />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{toggle && <Menu />}
			{toggleOrders && <MyOrder />}
		</nav>
	);
};

export default Header;
