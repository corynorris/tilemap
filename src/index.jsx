import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import roguelikeApp from "./reducers";
import App from "./App";
import "./index.css";

const store = configureStore({
	reducer: roguelikeApp,
});

const root = createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<App />
	</Provider>,
);
