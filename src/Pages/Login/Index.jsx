import React, { useRef } from "react";
import AnimatedPage from "@routes/AnimateApp";
import "./Style.scss";
import logo from "@logos/logo_yard_sale.svg";
const Login = () => {
	const form = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			username: formData.get("email"),
			password: formData.get("password"),
		}
 
	};

	return (
		<AnimatedPage>
			<div className='Login'>
				<div className='Login-container'>
					<img src={logo} width='100' height='50' alt='logo' className='logo' />
					<form action='/' className='form' ref={form}>
						<label htmlFor='email' className='label'>
							Email address
						</label>
						<input type='text' name='email' placeholder='platzi@example.cm' className='input input-email' />
						<label htmlFor='password' className='label'>
							Password
						</label>
						<input type='password' name='password' placeholder='*********' className='input input-password' />
						<button 
							type='submit'
							className='primary-button login-button' 
							onClick={handleSubmit}
						>
							Log in
						</button>
						<a href='/'>Forgot my password</a>
					</form>
					<button 
						className='secondary-button signup-button'  
					>
						Sign up
					</button>
				</div>
			</div>
		</AnimatedPage>
	);
};

export default Login;
