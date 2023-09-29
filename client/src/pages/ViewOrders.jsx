// import React from 'react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import  { Link} from 'react-router-dom'


const ViewOrders = () => {


    const [ViewOrders,setOrders] = useState([])
useEffect(() => {
    axios.get('http://localhost:5000/getorders')
    .then(res => setOrders(res.data))
    .catch(err => console.log(err))
},[])
  return (
    <div>
        <div className="table-container">
        <Link className="text-xl text-green-600 pl-2" to='/Orders'>
        <button className='btn btn-success p-3 my-4 '>+  Add Orders</button>

            </Link>
      <table className="table">
        <thead>
          <tr className='bg-primary'>
            <th>order id</th>
            <th>customer name</th>
            <th>product name</th>
            <th>product size</th>
            <th>product price </th>
            <th>product delivery location</th>
            <th>order date</th>
            <th>order activity status</th>
          </tr>
        </thead>
        <tbody>
          {
          // eslint-disable-next-line no-whitespace-before-property
          ViewOrders && ViewOrders.map && ViewOrders .map((res, i) => (
            <tr key={i}>
              <td>{res.order_id}</td>
              <td>{res.customer_name}</td>
              <td>{res.product_name}</td>
              <td>{res.product_size}</td>
              <td>{res.product_price}</td>
              <td>{res.product_delivery_location}</td>
              <td>{res.order_date}</td>
              <td>
              <div class="btn-group">
  <button type="" class="btn btn-success">delivered</button>
  <button type="" class="btn btn-danger">rejected</button>
</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
</div>


    </div>
  )
}

export default ViewOrders