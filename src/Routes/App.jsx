import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "@core-ui/global.css";
import Layout from "@containers/Layout";
import AppContext from "@context/AppContext";
import useInitialState from "@hooks/useInitialState"; 

const Home = React.lazy(() => import("@pages/Home"));
const Login = React.lazy(() => import("@pages/Login"));
const PasswordRecovery = React.lazy(() => import("@pages/PasswordRecovery"));
const NotFound = React.lazy(() => import("@pages/NotFound"));

const App = () => {
	const initialState = useInitialState();
	const location = useLocation();

	return (
		<>
			<AppContext.Provider value={initialState}>
				<Layout> 
					<Suspense fallback={<div>Loading...</div>}>
						<AnimatePresence exitBeforeEnter initial={false}>
							<Routes key={location.pathname} location={location}>
								<Route path='/' element={<Home />} />
								<Route path='/login' element={<Login />} />
								<Route path='/recovery-password' element={<PasswordRecovery />} />
								<Route path='*' element={<NotFound />} />
							</Routes>
						</AnimatePresence>
					</Suspense>
				</Layout>
			</AppContext.Provider>
		</>
	);
};

export default App;
