import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSearch } from '../../context/ProductContext';

const Navbar = () => {
  const [input, setInput] = useState('');

  const { handleSearch } = useSearch()
  const navigate = useNavigate()


  const onSearchClick = () => {
    handleSearch(input);  // Update the search context with input
    navigate('/search-results');  // Navigate to results page
  };

  return (
    <div>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
       
        
      </ul>
      <form className="d-flex" role="search">
          <input
          type="text"
          className="form-control"
          placeholder="Search products..."
          value={input}
          onChange={(e) => setInput(e.target.value)}  // Update local input state
        />

        {/* Search Button */}
        <button className="btn btn-primary" onClick={onSearchClick}>
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar