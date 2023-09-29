// import React from 'react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './viewcustomer.css'
import  { Link} from 'react-router-dom'


const ViewCustomers = () => {


    const [ViewCustomers,setCustomers] = useState([])
useEffect(() => {
    axios.get('http://localhost:5000/getcustomers')
    .then(res => setCustomers(res.data))
    .catch(err => console.log(err))
},[])
  return (
    <div>
        <div className="table-container">
						<Link className="text-xl text-green-600 pl-2" to='/Customers'>
        <button className='btn btn-success p-3 my-4 '>+  Add Customers</button>

            </Link>
      <table className="table">
        <thead>
          <tr className='bg-primary'>
            <th>customer id</th>
            <th>customer name</th>
            <th>customer age</th>
            <th>customer gender</th>
            <th>customer emailid</th>
            <th>customer mobile</th>
            <th>customer address</th>
            <th>customer pincode</th>
            <th>customer state</th>
            <th>customer country</th>
            <th>Customer Activity Status</th>
          </tr>
        </thead>
        <tbody>
          {
          ViewCustomers && ViewCustomers.map && ViewCustomers .map((res, i) => (
            <tr key={i}>
              <td>{res.customer_id}</td>
              <td>{res.customer_name}</td>
              <td>{res.customer_age}</td>
              <td>{res.customer_gender}</td>
              <td>{res.customer_emailid}</td>
              <td>{res.customer_mobile}</td>
              <td>{res.customer_address}</td>
              <td>{res.customer_pincode}</td>
              <td>{res.customer_state}</td>
              <td>{res.customer_country}</td>
              <td>
              <div class="btn-group">
  <button type="" class="btn btn-success">Act</button>
  <button type="" class="btn btn-danger">Inact</button>
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

export default ViewCustomers