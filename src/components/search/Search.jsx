import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearch } from '../../context/ProductContext';

const Search = () => {
  const { searchQuery } = useSearch;  
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);  // Filtered products
  const [loading, setLoading] = useState(false);

  // Fetch all products from API (dummyjson)
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get('https://dummyjson.com/products?limit=100');
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products', error);
      setLoading(false);
    }
  };

  // Filter products based on searchQuery
  useEffect(() => {
    if (products.length > 0) {
      const result = products.filter(product =>
        product.title.includes(searchQuery)
      );
      setFilteredProducts(result);
    }
  }, [searchQuery, products]);

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="container mt-4">
      <h3>Search Results for "{searchQuery}"</h3>
      {filteredProducts.length > 0 ? (
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="card m-2" key={product.id} style={{ width: '18rem' }}>
              <img src={product.images[0]} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h4 className="card-title">{product.title}</h4>
                <p className='card-text'>{product.brand}</p>
                <p className="card-text">{product.description.substring(0, 50)}....</p>
                <span className='p-1' style={{ background: "green", color: "#fff" }}>{product.rating}</span>
                <p className='card-text'>{product.price}$</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default Search;
