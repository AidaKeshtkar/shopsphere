import React, { useState, useEffect } from "react";
import Slideshow from "../slideShow/slideshow";
import ProductItem from "../productItem/ProductItem";
import productsData from "../app/product.json";
import "./product.css";

const Products = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      <Slideshow />
      <div className="products-grid">
        {productsData.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
