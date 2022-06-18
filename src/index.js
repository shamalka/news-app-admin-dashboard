import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import App from "./App";
import "./App.css";
import appWindowSizeReducer from "./features/appWindowSize";

const store = configureStore({
    reducer: {
        appWindowSize: appWindowSizeReducer
    }
})

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
