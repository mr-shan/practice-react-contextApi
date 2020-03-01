import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AppContextProvider from "./context/ContextProvider2";

import Navbar from "./components/nav/Navbar";
import ShoppingList from "./components/shopping-list/ShoppingList";
import ShoppingCart from "./components/shopping-cart/ShoppingCart";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <AppContextProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ShoppingList} />
            <Route exact path="/shopping-list" component={ShoppingList} />
            <Route exact path="/shopping-cart" component={ShoppingCart} />
          </Switch>
        </BrowserRouter>
      </AppContextProvider>
    </div>
  );
};

export default App;
