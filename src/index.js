import React from "react";
import ReactDOM from "react-dom";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import "./css/global.css";
import "./css/Navigation.css";
import "./css/Product.css";
import "./css/Products.css";
import "./css/ShoppingCart.css";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import App from "./App";
import { cartReducer } from "./reducers/cartReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(cartReducer, composeEnhancers(applyMiddleware(thunk)));

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>,
  document.getElementById("root")
);
