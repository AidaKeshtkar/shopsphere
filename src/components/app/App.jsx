import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Products from "../products/Products";
import About from "../about/About";
import Blog from "../blog/Blog";
import Contact from "../contact/Contact";
import SingleProduct from "../singleProduct/SingleProduct";
import ThemeContext from "../../contexts/ThemeContext";
import themes from "../../configs/theme";
import "./app.css";

const App = () => {
  const [currentTheme, setCurrentTheme] = useState("green");

  return (
    <ThemeContext.Provider
      value={{ theme: themes[currentTheme], setTheme: setCurrentTheme }}
    >
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Products} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route path="/product/:id" component={SingleProduct} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
