import React from "react";
import ReactDOM from "react-dom/client"; // Import the ReactDOM client
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store"; // Correct case


// Get the root DOM node
const rootElement = document.getElementById("root");

// Create a root and render the app
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
