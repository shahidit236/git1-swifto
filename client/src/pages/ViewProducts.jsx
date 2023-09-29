// import React from 'react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import  { Link} from 'react-router-dom'


const ViewProducts = () => {


    const [ViewProducts,setProducts] = useState([])
useEffect(() => {
    axios.get('http://localhost:5000/getproducts')
    .then(res => setProducts(res.data))
    .catch(err => console.log(err))
},[])
  return (
    <div>
        <div className="table-container">
        <Link className="text-xl text-green-600 pl-2" to='/Products'>
        <button className='btn btn-success p-3 my-4 '>+  Add Products</button>

            </Link>
      <table className="table">
        <thead>
          <tr className='bg-primary'>
            <th>product id</th>
            <th>product category</th>
            <th>product quantity</th>
            <th>product name</th>
            <th>product price</th>
            <th>product quantitysize</th>
            {/* <th>Description</th> */}
            <th>viewproducts status</th>
          </tr>
        </thead>
        <tbody>
          {
          // eslint-disable-next-line no-whitespace-before-property
          ViewProducts && ViewProducts.map && ViewProducts .map((res, i) => (
            <tr key={i}>
              <td>{res.product_id}</td>
              <td>{res.product_category}</td>
              <td>{res.product_quantity}</td>
              <td>{res.product_name}</td>
              <td>{res.product_price}</td>
              <td>{res.product_quantity_size}</td>
              {/* <td>{res.product_deswcription}</td> */}
              <td><button  className="btn btn-success">Instock</button>
  <button  className="btn btn-danger">Outofstock</button></td>
            </tr>
          ))}
        </tbody>
      </table>
</div>


    </div>
  )
}

export default ViewProducts