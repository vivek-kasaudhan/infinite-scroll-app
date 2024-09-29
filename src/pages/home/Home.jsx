import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/layout'
import axios from 'axios'

const Home = () => {
  const [fetchdata, setfetchdata] = useState([])
  const [categories, setcategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const pageSize = 10

  // Fetch products by category (or all products if no category is selected)
  const fetchingdata = async (categorySlug = '') => {
    try {
      let url = `https://dummyjson.com/products?limit=100`
      if (categorySlug) {
        url = `https://dummyjson.com/products/category/${categorySlug}?limit=${pageSize}&page=${currentPage}`
      }
      const { data } = await axios.get(url)
      setfetchdata(data.products)
    } catch (error) {
      console.log(error)
    }
  }

  // Fetch all categories
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get('https://dummyjson.com/products/categories')
      setcategories(data)
    } catch (error) {
      console.log(error)
    }
  }

  // Handle category selection
  const handleCategoryChange = (categorySlug) => {
    setSelectedCategory(categorySlug)
    fetchingdata(categorySlug)  // Fetch data based on the selected category
  }

  // Fetch all data on component mount
  useEffect(() => {
    getAllCategories()
    fetchingdata()  // Fetch all products initially
  }, [currentPage])

  return (
    <Layout>
      <div className='row mt-3 m-3'>
        <div className='col-md-2 m-2 category-background'>
          <h5 className='text-center bg-dark text-white mt-2 rounded p-2'>Filter by Category</h5>
          <div className='d-flex flex-column'>
            <div>
              <input
                type="radio"
                name="category"
                value=""
                id="all"
                onChange={() => handleCategoryChange('')}
                checked={selectedCategory === ''}
              />
              <label htmlFor="all">All</label>
            </div>
            {categories.map((category, index) => (
              <div key={index}>
                <input
                  type="radio"
                  name="category"
                  value={category.slug}
                  id={category.slug}
                  onChange={() => handleCategoryChange(category.slug)}
                  checked={selectedCategory === category.slug}
                />
                <label htmlFor={category.slug}>{category.name}</label>
              </div>
            ))}
          </div>
        </div>

        <div className='col-md-9 w-65'>
          <div className='d-flex justify-content-center flex-wrap'>
            {fetchdata.map((pd) => (
              <div className="card m-2" key={pd.id} style={{ width: '18rem' }}>
                <img src={pd.images[0]} className="card-img-top" alt={pd.title} />
                <div className="card-body">
                  <h4 className="card-title">{pd.title}</h4>
                  <p className='card-text'>{pd.brand}</p>
                  <p className="card-text">{pd.description.substring(0, 50)}....</p>
                  <span className='p-1' style={{ background: "green", color: "#fff" }}>{pd.rating}</span>
                  <p className='card-text'>{pd.price}$</p>
                  <a href="#" className="btn btn-primary">More Details</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
