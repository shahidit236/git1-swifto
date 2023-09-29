import React, { useState } from 'react'
import Axios from 'axios';

const Orders = () => {
  const [CustomerName, setName] = useState('');
  const [ProductName, setProduct] = useState('');
  const [ProductSize, setSize] = useState('');
  const [ProductPrice, setPrice] = useState('');
  const [ProductDeliveryLocation, setLocation] = useState('');
  const [OrderDate, setDate] = useState('');
  const [alertMessage,setAlertMessage] = useState('');
  const createUser = () => {
      Axios.post('http://localhost:5000/add-orders', {
         
         customer_name : CustomerName,
         product_name : ProductName,
         product_size : ProductSize,
         product_price : ProductPrice,
         product_delivery_location : ProductDeliveryLocation,
         order_date :OrderDate

         


      }).then(() => {
          console.log('User has been created')
          setAlertMessage('User added successfully!');
          alert(alertMessage)
          
      }).catch(error => {
          const errorMessage = JSON.parse(error.request.response)
          console.log(errorMessage.message)
      })
  }
  return (
    <>
    <h1>Add Order </h1>
    <div className='container'>
    <form>
   <h2>Order Details</h2>
  <div className="form-row">  
    <div className="form-group col-md-6">
      <label for="inputEmail4">Customer Name</label>
      <input type="" className="form-control" id="inputEmail4" placeholder=""
         onChange={(event) => {setName(event.target.value)}}
      />
    </div>
    <div className="form-group col-md-6">
      <label for="inputEmail4">Product Name</label>
      <input type="" className="form-control" id="inputEmail4" placeholder=""
         onChange={(event) => {setProduct(event.target.value)}}
      />
    </div>
  </div>
  <div className="form-row">  
    <div className="form-group col-md-6">
      <label for="inputEmail4">Product Size</label>
      <input type="" className="form-control" id="inputEmail4" placeholder=""
         onChange={(event) => {setSize(event.target.value)}}
      />
    </div>
    <div className="form-group col-md-6">
      <label for="inputEmail4">Product Price</label>
      <input type="" className="form-control" id="inputEmail4" placeholder=""
         onChange={(event) => {setPrice(event.target.value)}}
      />
    </div>
  </div>
  <div className="form-row">  
    <div className="form-group col-md-6">
      <label for="inputEmail4">Delivery location</label>
      <input type="" className="form-control" id="inputEmail4" placeholder=""
         onChange={(event) => {setLocation(event.target.value)}}
      />
    </div>
    <div className="form-group col-md-6">
      <label for="inputEmail4">Order Date</label>
      <input type="date" className="form-control" id="inputEmail4" placeholder=""
         onChange={(event) => {setDate(event.target.value)}}
      />
    </div>
  </div>
 
	<div className='float-right '>
  <button className="btn btn-danger mr-20 mt-10" >Reset</button>
  <button className="btn btn-success mr-20 mt-10" onClick={createUser}>Submit</button>
  </div>
	</form>

    </div>
    </>
  )
}

export default Orders
