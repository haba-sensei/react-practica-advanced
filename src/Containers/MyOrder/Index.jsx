import React, {useContext} from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from "@context/AppContext";
import flechita from '@icons/flechita.svg';
import './Style.scss';

const MyOrder = () => {

	const { state } = useContext(AppContext);
	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flechita} width="30" height="30" alt="flechita" className='flechita' />
				<p className="title">My order</p>
			</div> 
			<div className="my-order-content">
				{state.cart.map((product,index) => (
					<OrderItem 
						indexValue={`orderItem-${index}`}
						key={`orderItem-${index}`} 
						product={product}
					/>
				))} 
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>$ {sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
