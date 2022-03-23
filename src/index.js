import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "@routes/App";
 

ReactDOM.render(
	<React.StrictMode>
		<Router basename='/reactPractico'>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById("app")
);
